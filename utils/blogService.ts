/// <reference lib="deno.unstable" />

import { BlogPost, CreateBlogPostData, UpdateBlogPostData, KV_KEYS } from "./blogTypes.ts";

const kv = await Deno.openKv();

export class BlogService {
  /**
   * Generate a unique post ID
   */
  private generateId(): string {
    return crypto.randomUUID();
  }

  /**
   * Generate slug from title
   */
  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single
      .trim()
      .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
  }

  /**
   * Calculate reading time from content
   */
  private calculateReadingTime(content: string): number {
    const words = content
      .replace(/[#*`]/g, "") // Remove markdown symbols
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const wordCount = words.length;
    const wordsPerMinute = 200; // Conservative estimate

    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  }

  /**
   * Generate excerpt from content
   */
  private generateExcerpt(content: string): string {
    // Remove markdown headers, links, and clean up text
    const cleanContent = content
      .replace(/^#+\s*.+$/gm, "") // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
      .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold
      .replace(/\*([^*]+)\*/g, "$1") // Remove italic
      .replace(/`([^`]+)`/g, "$1") // Remove inline code
      .replace(/\n+/g, " ") // Replace newlines with spaces
      .trim();

    // Take first 150 characters
    if (cleanContent.length <= 150) {
      return cleanContent;
    }

    // Find last complete word within 150 characters
    const truncated = cleanContent.substring(0, 150);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
      return truncated.substring(0, lastSpaceIndex) + "...";
    }

    return truncated + "...";
  }

  /**
   * Create a new blog post
   */
  async createPost(
    authorId: string,
    authorName: string,
    data: CreateBlogPostData
  ): Promise<BlogPost> {
    const postId = this.generateId();
    const now = new Date();
    const slug = this.generateSlug(data.title);

    // Check if slug is unique
    const existingPost = await this.getPostBySlug(slug);
    const finalSlug = existingPost ? `${slug}-${Date.now()}` : slug;

    const post: BlogPost = {
      id: postId,
      title: data.title,
      slug: finalSlug,
      content: data.content,
      excerpt: this.generateExcerpt(data.content),
      authorId,
      authorName,
      tags: data.tags,
      status: data.status,
      createdAt: now,
      updatedAt: now,
      publishedAt: data.status === "published" ? now : undefined,
      readingTime: this.calculateReadingTime(data.content),
    };

    // Store the post
    await kv.set(KV_KEYS.post(postId), post);

    // Update indexes
    if (data.status === "published") {
      await this.addToPublishedIndex(postId);
    } else {
      await this.addToUserDrafts(authorId, postId);
    }

    // Update user posts index
    await this.addToUserPosts(authorId, postId);

    // Update tag indexes
    for (const tag of data.tags) {
      await this.addToTagIndex(tag, postId);
    }

    return post;
  }

  /**
   * Get a post by ID
   */
  async getPost(postId: string): Promise<BlogPost | null> {
    const result = await kv.get(KV_KEYS.post(postId));
    return result.value as BlogPost | null;
  }

  /**
   * Get a post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    // This is inefficient but necessary since we don't have secondary indexes
    // In a real app, we'd maintain a slug-to-id mapping
    const publishedPosts = await this.getPublishedPosts();
    const allUserPosts = await this.getAllUserPosts();

    const allPosts = [...publishedPosts, ...allUserPosts.flatMap(([_, posts]) => posts)];

    for (const post of allPosts) {
      if (post.slug === slug) {
        return post;
      }
    }

    return null;
  }

  /**
   * Update an existing post
   */
  async updatePost(
    postId: string,
    authorId: string,
    data: UpdateBlogPostData
  ): Promise<BlogPost | null> {
    const existingPost = await this.getPost(postId);
    if (!existingPost || existingPost.authorId !== authorId) {
      return null; // Post not found or not owned by user
    }

    const now = new Date();
    const updatedPost: BlogPost = {
      ...existingPost,
      ...data,
      updatedAt: now,
    };

    // Recalculate derived fields if content changed
    if (data.content !== undefined) {
      updatedPost.excerpt = this.generateExcerpt(data.content);
      updatedPost.readingTime = this.calculateReadingTime(data.content);
    }

    // Update slug if title changed
    if (data.title !== undefined) {
      const newSlug = this.generateSlug(data.title);
      // Check uniqueness (excluding current post)
      const conflictingPost = await this.getPostBySlug(newSlug);
      updatedPost.slug = conflictingPost && conflictingPost.id !== postId
        ? `${newSlug}-${Date.now()}`
        : newSlug;
    }

    // Handle status changes
    const oldStatus = existingPost.status;
    const newStatus = updatedPost.status;

    if (oldStatus !== newStatus) {
      if (oldStatus === "draft" && newStatus === "published") {
        // Moving from draft to published
        await this.removeFromUserDrafts(authorId, postId);
        await this.addToPublishedIndex(postId);
        updatedPost.publishedAt = now;
      } else if (oldStatus === "published" && newStatus === "draft") {
        // Moving from published to draft
        await this.removeFromPublishedIndex(postId);
        await this.addToUserDrafts(authorId, postId);
        updatedPost.publishedAt = undefined;
      }
    }

    // Update tag indexes if tags changed
    if (data.tags !== undefined) {
      // Remove from old tags
      for (const tag of existingPost.tags) {
        if (!updatedPost.tags.includes(tag)) {
          await this.removeFromTagIndex(tag, postId);
        }
      }
      // Add to new tags
      for (const tag of updatedPost.tags) {
        if (!existingPost.tags.includes(tag)) {
          await this.addToTagIndex(tag, postId);
        }
      }
    }

    // Save updated post
    await kv.set(KV_KEYS.post(postId), updatedPost);

    return updatedPost;
  }

  /**
   * Delete a post
   */
  async deletePost(postId: string, authorId: string): Promise<boolean> {
    const post = await this.getPost(postId);
    if (!post || post.authorId !== authorId) {
      return false;
    }

    // Remove from all indexes
    await this.removeFromUserPosts(authorId, postId);

    if (post.status === "published") {
      await this.removeFromPublishedIndex(postId);
    } else {
      await this.removeFromUserDrafts(authorId, postId);
    }

    // Remove from tag indexes
    for (const tag of post.tags) {
      await this.removeFromTagIndex(tag, postId);
    }

    // Delete the post
    await kv.delete(KV_KEYS.post(postId));

    return true;
  }

  /**
   * Get all published posts
   */
  async getPublishedPosts(): Promise<BlogPost[]> {
    const result = await kv.get(KV_KEYS.publishedPosts);
    const postIds = (result.value as string[]) || [];

    const posts: BlogPost[] = [];
    for (const postId of postIds) {
      const post = await this.getPost(postId);
      if (post) {
        posts.push(post);
      }
    }

    return posts.sort((a, b) => (b.publishedAt?.getTime() || 0) - (a.publishedAt?.getTime() || 0));
  }

  /**
   * Get posts by user
   */
  async getUserPosts(userId: string): Promise<BlogPost[]> {
    const result = await kv.get(KV_KEYS.userPosts(userId));
    const postIds = (result.value as string[]) || [];

    const posts: BlogPost[] = [];
    for (const postId of postIds) {
      const post = await this.getPost(postId);
      if (post) {
        posts.push(post);
      }
    }

    return posts.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  /**
   * Get user drafts
   */
  async getUserDrafts(userId: string): Promise<BlogPost[]> {
    const result = await kv.get(KV_KEYS.userDrafts(userId));
    const postIds = (result.value as string[]) || [];

    const posts: BlogPost[] = [];
    for (const postId of postIds) {
      const post = await this.getPost(postId);
      if (post) {
        posts.push(post);
      }
    }

    return posts.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  /**
   * Get all posts by all users (admin only)
   */
  private async getAllUserPosts(): Promise<[string, BlogPost[]][]> {
    const results: [string, BlogPost[]][] = [];

    // This is a simple implementation - in production you'd want a more efficient way
    const iter = kv.list({ prefix: ["blog_posts_by_user"] });
    for await (const entry of iter) {
      const userId = (entry.key as string[])[1];
      const posts = await this.getUserPosts(userId);
      results.push([userId, posts]);
    }

    return results;
  }

  // Index management methods
  private async addToPublishedIndex(postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.publishedPosts);
    const postIds = (result.value as string[]) || [];
    if (!postIds.includes(postId)) {
      postIds.push(postId);
      await kv.set(KV_KEYS.publishedPosts, postIds);
    }
  }

  private async removeFromPublishedIndex(postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.publishedPosts);
    const postIds = (result.value as string[]) || [];
    const filtered = postIds.filter(id => id !== postId);
    await kv.set(KV_KEYS.publishedPosts, filtered);
  }

  private async addToUserPosts(userId: string, postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.userPosts(userId));
    const postIds = (result.value as string[]) || [];
    if (!postIds.includes(postId)) {
      postIds.push(postId);
      await kv.set(KV_KEYS.userPosts(userId), postIds);
    }
  }

  private async removeFromUserPosts(userId: string, postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.userPosts(userId));
    const postIds = (result.value as string[]) || [];
    const filtered = postIds.filter(id => id !== postId);
    await kv.set(KV_KEYS.userPosts(userId), filtered);
  }

  private async addToUserDrafts(userId: string, postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.userDrafts(userId));
    const postIds = (result.value as string[]) || [];
    if (!postIds.includes(postId)) {
      postIds.push(postId);
      await kv.set(KV_KEYS.userDrafts(userId), postIds);
    }
  }

  private async removeFromUserDrafts(userId: string, postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.userDrafts(userId));
    const postIds = (result.value as string[]) || [];
    const filtered = postIds.filter(id => id !== postId);
    await kv.set(KV_KEYS.userDrafts(userId), filtered);
  }

  private async addToTagIndex(tag: string, postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.postsByTag(tag));
    const postIds = (result.value as string[]) || [];
    if (!postIds.includes(postId)) {
      postIds.push(postId);
      await kv.set(KV_KEYS.postsByTag(tag), postIds);
    }
  }

  private async removeFromTagIndex(tag: string, postId: string): Promise<void> {
    const result = await kv.get(KV_KEYS.postsByTag(tag));
    const postIds = (result.value as string[]) || [];
    const filtered = postIds.filter(id => id !== postId);
    await kv.set(KV_KEYS.postsByTag(tag), filtered);
  }
}

// Export singleton instance
export const blogService = new BlogService();