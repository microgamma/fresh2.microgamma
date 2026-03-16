/// <reference lib="deno.unstable" />

import { BlogPost } from "./blogTypes.ts";
import { blogService } from "./blogService.ts";

export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  type: "GitHub Release" | "Pre-release" | "Draft Release" | "Dev.to Article" | "Blog Post" | "Internal Post" | "X Post";
  excerpt: string;
  content: string;
  source: "github" | "devto" | "internal" | "x";
  sourceUrl: string;
  publishedAt: Date;
  isPrerelease?: boolean;
  tagName?: string;
  articleTags?: string[];
  readingTime?: number; // in minutes
  likes?: number;
  retweets?: number;
  images?: string[]; // URLs of attached images
}

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string;
  html_url: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
  }>;
}

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  published_at: string;
  url: string;
  body_markdown: string;
  tags: string[];
  cover_image?: string;
  canonical_url: string;
}

export interface XPost {
  id: string;
  text: string;
  created_at: string;
  public_metrics?: {
    like_count: number;
    retweet_count: number;
  };
  author_id?: string;
  attachments?: {
    media_keys?: string[];
  };
}

export interface XMedia {
  media_key: string;
  type: "photo" | "video" | "animated_gif";
  url?: string;
  preview_image_url?: string;
  width?: number;
  height?: number;
}

export class NewsService {
  private readonly githubToken: string;
  private readonly repoOwner: string;
  private readonly repoName: string;
  private readonly apiBaseUrl = "https://api.github.com";
  private readonly devtoUsername: string;
  private readonly devtoTagFilter: string;
  private readonly devtoMaxArticles: number;
  private readonly xBearerToken: string;
  private readonly xUsername: string;
  private readonly xMaxTweets: number;
  private readonly xApiBaseUrl = "https://api.x.com/2";

  constructor() {
    this.githubToken = Deno.env.get("GITHUB_ACCESS_TOKEN") || "";
    this.repoOwner = Deno.env.get("GITHUB_REPO_OWNER") || "microgamma";
    this.repoName = Deno.env.get("GITHUB_REPO_NAME") || "microgamma";
    this.devtoUsername = Deno.env.get("DEVTO_USERNAME") || "davidecavaliere";
    this.devtoTagFilter = Deno.env.get("DEVTO_TAG_FILTER") || "Microgamma";
    this.devtoMaxArticles = parseInt(
      Deno.env.get("DEVTO_MAX_ARTICLES") || "20",
    );
    this.xBearerToken = Deno.env.get("X_BEARER_TOKEN") || "";
    this.xUsername = Deno.env.get("X_USERNAME") || "microgamma_io";
    this.xMaxTweets = parseInt(Deno.env.get("X_MAX_TWEETS") || "10");

    if (!this.githubToken) {
      console.warn(
        "GITHUB_ACCESS_TOKEN not found. GitHub API calls will fail.",
      );
    }
    if (!this.xBearerToken) {
      console.warn(
        "X_BEARER_TOKEN not found. X API calls will be skipped.",
      );
    }
  }

  async getNews(): Promise<NewsItem[]> {
    try {
      // Fetch from all sources in parallel
      const [githubReleases, devtoArticles, xTweets] = await Promise.allSettled([
        this.fetchGitHubReleases(),
        this.fetchDevToArticles(),
        this.xBearerToken ? this.fetchXTweets() : Promise.resolve({ tweets: [], media: [] }),
      ]);

      const allNews: NewsItem[] = [];

      // Process GitHub releases
      if (githubReleases.status === "fulfilled") {
        const githubNews = this.transformReleasesToNews(githubReleases.value);
        allNews.push(...githubNews);
        console.log(`Fetched ${githubNews.length} GitHub releases`);
      } else {
        console.error(
          "Failed to fetch GitHub releases:",
          githubReleases.reason,
        );
      }

      // Process Dev.to articles
      if (devtoArticles.status === "fulfilled") {
        const devtoNews = this.transformDevToArticles(devtoArticles.value);
        allNews.push(...devtoNews);
        console.log(`Fetched ${devtoNews.length} Dev.to articles`);
      } else {
        console.error("Failed to fetch Dev.to articles:", devtoArticles.reason);
      }

      // Process X posts
      if (xTweets.status === "fulfilled") {
        const xNews = this.transformXTweetsToNews(xTweets.value.tweets, xTweets.value.media);
        allNews.push(...xNews);
        console.log(`Fetched ${xNews.length} X posts`);
      } else {
        console.error("Failed to fetch X posts:", xTweets.reason);
      }

      // Sort by publication date (newest first) and deduplicate
      const sorted = allNews
        .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

      // Simple deduplication by title (add suffix if duplicate)
      const seenTitles = new Map<string, number>();
      for (const item of sorted) {
        const count = seenTitles.get(item.title) || 0;
        if (count > 0) {
          item.title = `${item.title} (${count + 1})`;
        }
        seenTitles.set(item.title, count + 1);
      }

      return sorted;
    } catch (error) {
      console.error("Failed to fetch news from any source:", error);
      return this.getFallbackNews();
    }
  }

  async getBlogPosts(): Promise<NewsItem[]> {
    try {
      // Fetch both internal blog posts and Dev.to articles in parallel
      const [internalPosts, devtoArticles] = await Promise.allSettled([
        blogService.getPublishedPosts(),
        this.fetchDevToArticles(),
      ]);

      const allBlogPosts: NewsItem[] = [];

      // Process internal blog posts
      if (internalPosts.status === "fulfilled") {
        const internalNews = this.transformInternalPostsToNews(internalPosts.value);
        allBlogPosts.push(...internalNews);
        console.log(`Fetched ${internalNews.length} internal blog posts`);
      } else {
        console.error(
          "Failed to fetch internal blog posts:",
          internalPosts.reason,
        );
      }

      // Process Dev.to articles
      if (devtoArticles.status === "fulfilled") {
        const devtoNews = this.transformDevToArticles(devtoArticles.value);
        // Change type to distinguish from internal posts
        devtoNews.forEach(post => {
          post.type = "Blog Post";
        });
        allBlogPosts.push(...devtoNews);
        console.log(`Fetched ${devtoNews.length} Dev.to blog articles`);
      } else {
        console.error("Failed to fetch Dev.to blog articles:", devtoArticles.reason);
      }

      // Sort by publication date (newest first) and deduplicate
      const sorted = allBlogPosts
        .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

      // Simple deduplication by title (add suffix if duplicate)
      const seenTitles = new Map<string, number>();
      for (const item of sorted) {
        const count = seenTitles.get(item.title) || 0;
        if (count > 0) {
          item.title = `${item.title} (${count + 1})`;
        }
        seenTitles.set(item.title, count + 1);
      }

      return sorted;
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      return [];
    }
  }

  async getGalleryMedia(): Promise<GalleryItem[]> {
    if (!this.xBearerToken) {
      console.warn("X_BEARER_TOKEN not set — gallery will be empty");
      return [];
    }

    try {
      const { tweets, media } = await this.fetchXTweets();

      const mediaMap = new Map<string, XMedia>();
      for (const m of media) {
        mediaMap.set(m.media_key, m);
      }

      const items: GalleryItem[] = [];

      for (const tweet of tweets) {
        if (!tweet.attachments?.media_keys?.length) continue;

        const images: GalleryItem["images"] = [];
        for (const key of tweet.attachments.media_keys) {
          const m = mediaMap.get(key);
          if (m?.type === "photo" && m.url) {
            images.push({ url: m.url, width: m.width, height: m.height });
          }
        }

        if (images.length === 0) continue;

        const publishedAt = new Date(tweet.created_at);

        items.push({
          id: tweet.id,
          text: tweet.text,
          date: publishedAt.toISOString().split("T")[0],
          sourceUrl: `https://x.com/${this.xUsername}/status/${tweet.id}`,
          likes: tweet.public_metrics?.like_count ?? 0,
          retweets: tweet.public_metrics?.retweet_count ?? 0,
          images,
        });
      }

      return items;
    } catch (error) {
      console.error("Failed to fetch gallery media from X:", error);
      return [];
    }
  }

  private async fetchDevToArticles(): Promise<DevToArticle[]> {
    const url =
      `https://dev.to/api/articles?username=${this.devtoUsername}&tag=${this.devtoTagFilter}&per_page=${this.devtoMaxArticles}`;

    try {
      const response = await fetch(url, {
        headers: {
          "Accept": "application/json",
          "User-Agent": "Microgamma-News-Fetcher/1.0",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Dev.to API error: ${response.status} ${response.statusText}`,
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching from Dev.to API:", error);
      throw error;
    }
  }

  private async fetchGitHubReleases(): Promise<GitHubRelease[]> {
    const url =
      `${this.apiBaseUrl}/repos/${this.repoOwner}/${this.repoName}/releases`;

    const response = await fetch(url, {
      headers: {
        "Authorization": `token ${this.githubToken}`,
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Microgamma-News-Fetcher/1.0",
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("GitHub token is invalid or missing");
      }
      if (response.status === 403) {
        throw new Error(
          "GitHub API rate limit exceeded or insufficient permissions",
        );
      }
      if (response.status === 404) {
        throw new Error("GitHub repository not found or access denied");
      }
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  }

  private async fetchXTweets(): Promise<{ tweets: XPost[]; media: XMedia[] }> {
    if (!this.xBearerToken) {
      return { tweets: [], media: [] };
    }

    try {
      // First, get user ID by username
      const userUrl = `${this.xApiBaseUrl}/users/by/username/${this.xUsername}`;
      const userResponse = await fetch(userUrl, {
        headers: {
          "Authorization": `Bearer ${this.xBearerToken}`,
          "Accept": "application/json",
        },
      });

      if (!userResponse.ok) {
        if (userResponse.status === 401) {
          console.warn("X API bearer token is invalid");
          return { tweets: [], media: [] };
        }
        if (userResponse.status === 429) {
          console.warn("X API rate limit exceeded");
          return { tweets: [], media: [] };
        }
        throw new Error(
          `X API error: ${userResponse.status} ${userResponse.statusText}`,
        );
      }

      const userData = await userResponse.json();
      const userId = userData.data?.id;

      if (!userId) {
        console.warn(`X user ${this.xUsername} not found`);
        return { tweets: [], media: [] };
      }

      // Then, fetch tweets from the user timeline with media expansions
      const tweetsUrl = `${this.xApiBaseUrl}/users/${userId}/tweets?max_results=${this.xMaxTweets}&tweet.fields=created_at,public_metrics&exclude=replies,retweets&expansions=attachments.media_keys&media.fields=media_key,type,url,preview_image_url,width,height`;
      const tweetsResponse = await fetch(tweetsUrl, {
        headers: {
          "Authorization": `Bearer ${this.xBearerToken}`,
          "Accept": "application/json",
        },
      });

      if (!tweetsResponse.ok) {
        if (tweetsResponse.status === 429) {
          console.warn("X API rate limit exceeded for tweets");
          return { tweets: [], media: [] };
        }
        throw new Error(
          `X API error: ${tweetsResponse.status} ${tweetsResponse.statusText}`,
        );
      }

      const tweetsData = await tweetsResponse.json();
      return {
        tweets: tweetsData.data || [],
        media: tweetsData.includes?.media || [],
      };
    } catch (error) {
      console.error("Error fetching from X API:", error);
      return { tweets: [], media: [] };
    }
  }

  private transformXTweetsToNews(tweets: XPost[], media: XMedia[]): NewsItem[] {
    // Create a lookup map for media by media_key
    const mediaMap = new Map<string, XMedia>();
    for (const m of media) {
      mediaMap.set(m.media_key, m);
    }

    return tweets.map((tweet) => {
      const publishedAt = new Date(tweet.created_at);
      const date = publishedAt.toISOString().split("T")[0];
      // Create excerpt from tweet text (first 150 chars)
      const excerpt = tweet.text.length > 150 
        ? tweet.text.substring(0, 150).trim() + "..."
        : tweet.text;
      
      // Generate slug from tweet text
      const slug = this.generateSlug(tweet.text.substring(0, 50));

      // Extract image URLs from attachments
      const images: string[] = [];
      if (tweet.attachments?.media_keys) {
        for (const mediaKey of tweet.attachments.media_keys) {
          const mediaItem = mediaMap.get(mediaKey);
          if (mediaItem && mediaItem.type === "photo" && mediaItem.url) {
            images.push(mediaItem.url);
          }
        }
      }

      return {
        slug: `x-${tweet.id}`,
        date,
        title: `X Post: ${date}`,
        type: "X Post",
        excerpt,
        content: tweet.text,
        source: "x",
        sourceUrl: `https://x.com/${this.xUsername}/status/${tweet.id}`,
        publishedAt,
        likes: tweet.public_metrics?.like_count || 0,
        retweets: tweet.public_metrics?.retweet_count || 0,
        images,
      };
    });
  }

  private transformReleasesToNews(releases: GitHubRelease[]): NewsItem[] {
    const newsItems: NewsItem[] = [];
    const seenTitles = new Map<string, number>();

    for (const release of releases) {
      // Skip drafts unless they have a name
      if (release.draft && !release.name) continue;

      let title = release.name || release.tag_name;
      const originalTitle = title;

      // Handle deduplication
      const count = seenTitles.get(originalTitle) || 0;
      if (count > 0) {
        title = `${originalTitle} (${count + 1})`;
      }
      seenTitles.set(originalTitle, count + 1);

      // Generate slug
      const slug = this.generateSlug(title);

      // Create excerpt (first 150 characters)
      const excerpt = this.createExcerpt(release.body);

      // Determine type
      let type: NewsItem["type"];
      if (release.draft) {
        type = "Draft Release";
      } else if (release.prerelease) {
        type = "Pre-release";
      } else {
        type = "GitHub Release";
      }

      // Format date
      const publishedAt = new Date(release.published_at);
      const date = publishedAt.toISOString().split("T")[0];

      newsItems.push({
        slug,
        date,
        title,
        type,
        excerpt,
        content: release.body,
        source: "github",
        sourceUrl: release.html_url,
        publishedAt,
        isPrerelease: release.prerelease,
        tagName: release.tag_name,
      });
    }

    // Sort by publication date (newest first)
    return newsItems.sort((a, b) =>
      b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  private transformDevToArticles(articles: DevToArticle[]): NewsItem[] {
    return articles.map((article) => {
      const slug = this.generateSlug(article.title);
      const publishedAt = new Date(article.published_at);
      const date = publishedAt.toISOString().split("T")[0];
      const excerpt = article.description ||
        this.createExcerpt(article.body_markdown);
      const readingTime = this.calculateReadingTime(article.body_markdown);

      return {
        slug,
        date,
        title: article.title,
        type: "Dev.to Article",
        excerpt,
        content: article.body_markdown,
        source: "devto",
        sourceUrl: article.url,
        publishedAt,
        articleTags: article.tags,
        readingTime,
      };
    });
  }

  private transformInternalPostsToNews(posts: BlogPost[]): NewsItem[] {
    return posts.map((post) => {
      const date = post.publishedAt?.toISOString().split("T")[0] || post.createdAt.toISOString().split("T")[0];

      return {
        slug: post.slug,
        date,
        title: post.title,
        type: "Internal Post", // Distinguish from Dev.to posts
        excerpt: post.excerpt,
        content: post.content,
        source: "internal",
        sourceUrl: "", // No external URL for internal posts
        publishedAt: post.publishedAt || post.createdAt,
        articleTags: post.tags,
        readingTime: post.readingTime,
      };
    });
  }

  private calculateReadingTime(content: string): number {
    // Average reading speed: 200-250 words per minute
    // Count words in the content (rough approximation)
    const words = content
      .replace(/[#*`]/g, "") // Remove markdown symbols
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const wordCount = words.length;
    const wordsPerMinute = 200; // Conservative estimate

    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single
      .trim()
      .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
  }

  private createExcerpt(body: string): string {
    // Remove markdown headers, links, and clean up text
    const cleanBody = body
      .replace(/^#+\s*.+$/gm, "") // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
      .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold
      .replace(/\*([^*]+)\*/g, "$1") // Remove italic
      .replace(/`([^`]+)`/g, "$1") // Remove inline code
      .replace(/\n+/g, " ") // Replace newlines with spaces
      .trim();

    // Take first 150 characters
    if (cleanBody.length <= 150) {
      return cleanBody;
    }

    // Find last complete word within 150 characters
    const truncated = cleanBody.substring(0, 150);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
      return truncated.substring(0, lastSpaceIndex) + "...";
    }

    return truncated + "...";
  }

  private getFallbackNews(): NewsItem[] {
    // Return empty array for now - could add static fallback news here
    console.warn("Using fallback news data due to GitHub API failure");
    return [];
  }
}

export interface GalleryItem {
  id: string;
  text: string;
  date: string;
  sourceUrl: string;
  likes: number;
  retweets: number;
  images: Array<{
    url: string;
    width?: number;
    height?: number;
  }>;
}

// Export singleton instance
export const newsService = new NewsService();