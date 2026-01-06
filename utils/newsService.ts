/// <reference lib="deno.unstable" />

export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  type: "GitHub Release" | "Pre-release" | "Draft Release";
  excerpt: string;
  content: string;
  source: "github";
  sourceUrl: string;
  publishedAt: Date;
  isPrerelease: boolean;
  tagName: string;
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

export class NewsService {
  private readonly githubToken: string;
  private readonly repoOwner: string;
  private readonly repoName: string;
  private readonly apiBaseUrl = "https://api.github.com";

  constructor() {
    this.githubToken = Deno.env.get("GITHUB_ACCESS_TOKEN") || "";
    this.repoOwner = Deno.env.get("GITHUB_REPO_OWNER") || "microgamma";
    this.repoName = Deno.env.get("GITHUB_REPO_NAME") || "microgamma";

    if (!this.githubToken) {
      console.warn("GITHUB_ACCESS_TOKEN not found. GitHub API calls will fail.");
    }
  }

  async getNews(): Promise<NewsItem[]> {
    try {
      const releases = await this.fetchGitHubReleases();
      return this.transformReleasesToNews(releases);
    } catch (error) {
      console.error("Failed to fetch GitHub releases:", error);
      return this.getFallbackNews();
    }
  }

  private async fetchGitHubReleases(): Promise<GitHubRelease[]> {
    const url = `${this.apiBaseUrl}/repos/${this.repoOwner}/${this.repoName}/releases`;

    const response = await fetch(url, {
      headers: {
        "Authorization": `token ${this.githubToken}`,
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Microgamma-News-Fetcher/1.0"
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("GitHub token is invalid or missing");
      }
      if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded or insufficient permissions");
      }
      if (response.status === 404) {
        throw new Error("GitHub repository not found or access denied");
      }
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
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
      const date = publishedAt.toISOString().split('T')[0];

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
        tagName: release.tag_name
      });
    }

    // Sort by publication date (newest first)
    return newsItems.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim()
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  }

  private createExcerpt(body: string): string {
    // Remove markdown headers, links, and clean up text
    const cleanBody = body
      .replace(/^#+\s*.+$/gm, '') // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
      .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
      .replace(/\*([^*]+)\*/g, '$1') // Remove italic
      .replace(/`([^`]+)`/g, '$1') // Remove inline code
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim();

    // Take first 150 characters
    if (cleanBody.length <= 150) {
      return cleanBody;
    }

    // Find last complete word within 150 characters
    const truncated = cleanBody.substring(0, 150);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (lastSpaceIndex > 0) {
      return truncated.substring(0, lastSpaceIndex) + '...';
    }

    return truncated + '...';
  }

  private getFallbackNews(): NewsItem[] {
    // Return empty array for now - could add static fallback news here
    console.warn("Using fallback news data due to GitHub API failure");
    return [];
  }
}

// Export singleton instance
export const newsService = new NewsService();