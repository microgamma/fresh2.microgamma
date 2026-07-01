/// <reference lib="deno.unstable" />

import { BlogPost } from "./blogTypes.ts";
import { blogService } from "./blogService.ts";

export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  type: "X Post";
  excerpt: string;
  content: string;
  source: "x";
  sourceUrl: string;
  publishedAt: Date;
  likes?: number;
  retweets?: number;
  images?: string[];
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
  private readonly xBearerToken: string;
  private readonly xUsername: string;
  private readonly xMaxTweets: number;
  private readonly xApiBaseUrl = "https://api.x.com/2";

  constructor() {
    this.xBearerToken = Deno.env.get("X_BEARER_TOKEN") || "";
    this.xUsername = Deno.env.get("X_USERNAME") || "microgamma_io";
    this.xMaxTweets = parseInt(Deno.env.get("X_MAX_TWEETS") || "10");

    if (!this.xBearerToken) {
      console.warn(
        "X_BEARER_TOKEN not found. X API calls will be skipped.",
      );
    }
  }

  async getNews(): Promise<NewsItem[]> {
    if (!this.xBearerToken) {
      console.warn("X_BEARER_TOKEN not set — news feed will be empty");
      return [];
    }

    try {
      const { tweets, media } = await this.fetchXTweets();
      const xNews = this.transformXTweetsToNews(tweets, media);
      console.log(`Fetched ${xNews.length} X posts for news`);
      return xNews;
    } catch (error) {
      console.error("Failed to fetch news from X:", error);
      return [];
    }
  }

  async getBlogPosts() {
    try {
      const internalPosts = await blogService.getPublishedPosts();
      console.log(`Fetched ${internalPosts.length} internal blog posts`);
      return internalPosts;
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      return [];
    }
  }

  private async fetchXTweets(): Promise<{ tweets: XPost[]; media: XMedia[] }> {
    if (!this.xBearerToken) {
      return { tweets: [], media: [] };
    }

    try {
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

      const tweetsUrl =
        `${this.xApiBaseUrl}/users/${userId}/tweets?max_results=${this.xMaxTweets}&tweet.fields=created_at,public_metrics&exclude=replies,retweets&expansions=attachments.media_keys&media.fields=media_key,type,url,preview_image_url,width,height`;
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
    const mediaMap = new Map<string, XMedia>();
    for (const m of media) {
      mediaMap.set(m.media_key, m);
    }

    return tweets.map((tweet) => {
      const publishedAt = new Date(tweet.created_at);
      const date = publishedAt.toISOString().split("T")[0];
      const excerpt = tweet.text.length > 150
        ? tweet.text.substring(0, 150).trim() + "..."
        : tweet.text;

      const slug = this.generateSlug(tweet.text.substring(0, 50));

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

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
      .replace(/^-|-$/g, "");
  }
}

export const newsService = new NewsService();
