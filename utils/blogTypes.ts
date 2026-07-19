/// <reference lib="deno.unstable" />

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string; // Raw markdown
  excerpt: string;
  authorId: string;
  authorName: string;
  tags: string[];
  status: "draft" | "published";
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  readingTime?: number;
  // Set once the post has been cross-posted to dev.to.
  devtoId?: number;
  devtoUrl?: string;
}

export interface CreateBlogPostData {
  title: string;
  content: string;
  tags: string[];
  status: "draft" | "published";
}

export interface UpdateBlogPostData {
  title?: string;
  content?: string;
  tags?: string[];
  status?: "draft" | "published";
}

// KV Key patterns for blog posts
export const KV_KEYS = {
  // Individual posts: ["blog_post", postId]
  post: (postId: string) => ["blog_post", postId] as const,

  // Published posts index: ["blog_posts_published"]
  publishedPosts: ["blog_posts_published"] as const,

  // User-specific post lists: ["blog_posts_by_user", userId]
  userPosts: (userId: string) => ["blog_posts_by_user", userId] as const,

  // Draft management: ["blog_drafts_by_user", userId]
  userDrafts: (userId: string) => ["blog_drafts_by_user", userId] as const,

  // Tag indexes: ["blog_posts_by_tag", tag]
  postsByTag: (tag: string) => ["blog_posts_by_tag", tag] as const,

  // All tags: ["blog_tags"]
  allTags: ["blog_tags"] as const,
} as const;
