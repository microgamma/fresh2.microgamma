import { BlogPost } from "./blogTypes.ts";

const DEVTO_API = "https://dev.to/api/articles";
const SITE_URL = Deno.env.get("SITE_URL") || "https://www.microgamma.io";

export interface DevtoResult {
  id: number;
  url: string;
}

/**
 * Cross-posts published blog posts to dev.to via the Forem Articles API.
 * The microgamma.io post stays canonical; dev.to gets a copy with a
 * `canonical_url` pointing back here.
 */
export class DevtoService {
  private readonly apiKey: string;

  constructor() {
    this.apiKey = Deno.env.get("DEV_TO_API_KEY") || "";
    if (!this.apiKey) {
      console.warn(
        "DEV_TO_API_KEY not set — blog posts will not be cross-posted to dev.to.",
      );
    }
  }

  isConfigured(): boolean {
    return this.apiKey.length > 0;
  }

  /**
   * dev.to tags must be lowercase alphanumeric (no spaces or punctuation) and
   * there can be at most four. Sanitize, dedupe, and cap.
   */
  private sanitizeTags(tags: string[]): string[] {
    const seen = new Set<string>();
    const out: string[] = [];
    for (const tag of tags) {
      const clean = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (clean && !seen.has(clean)) {
        seen.add(clean);
        out.push(clean);
        if (out.length === 4) break;
      }
    }
    return out;
  }

  /** The exact request body sent to dev.to (exposed for dry-run inspection). */
  buildPayload(post: BlogPost) {
    return {
      article: {
        title: post.title,
        body_markdown: post.content,
        published: true,
        canonical_url: `${SITE_URL}/blog/${post.slug}`,
        description: post.excerpt,
        tags: this.sanitizeTags(post.tags),
      },
    };
  }

  /**
   * Publish `post` to dev.to. Returns the created article's id and url, or
   * null if no API key is configured. Throws on an API error.
   */
  async crossPost(post: BlogPost): Promise<DevtoResult | null> {
    if (!this.isConfigured()) {
      console.warn(
        `Skipping dev.to cross-post for "${post.title}" — DEV_TO_API_KEY not set.`,
      );
      return null;
    }

    const res = await fetch(DEVTO_API, {
      method: "POST",
      headers: {
        "api-key": this.apiKey,
        "Content-Type": "application/json",
        "Accept": "application/vnd.forem.api-v1+json",
      },
      body: JSON.stringify(this.buildPayload(post)),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`dev.to API returned ${res.status}: ${body}`);
    }

    const data = await res.json();
    return { id: data.id, url: data.url };
  }
}

export const devtoService = new DevtoService();
