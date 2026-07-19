import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  readingTime?: number;
  devtoUrl?: string;
}

export default function BlogContent() {
  const blogPosts = useSignal<BlogPost[] | null>(null);
  const error = useSignal(false);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((posts: BlogPost[]) => {
        blogPosts.value = posts;
      })
      .catch(() => {
        error.value = true;
      });
  }, []);

  if (error.value) {
    return (
      <div class="text-center py-12">
        <p class="text-gray-400">
          Failed to load blog posts. Please try again later.
        </p>
      </div>
    );
  }

  if (!blogPosts.value) {
    return (
      <div class="flex flex-col gap-8 mb-16">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            class={`card-glow p-8 rounded-xl backdrop-blur-sm border border-primary-400/30 animate-pulse ${
              i % 2 === 0 ? "bg-black/60" : "bg-gray-900/40"
            }`}
          >
            <div class="h-6 bg-accent-500/15 rounded w-2/3 mb-4" />
            <div class="h-3 bg-accent-500/15 rounded w-32 mb-6" />
            <div class="h-4 bg-accent-500/15 rounded w-full mb-2" />
            <div class="h-4 bg-accent-500/15 rounded w-5/6 mb-6" />
            <div class="flex justify-between">
              <div class="h-4 bg-accent-500/15 rounded w-24" />
              <div class="h-4 bg-accent-500/15 rounded w-36" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (blogPosts.value.length === 0) {
    return (
      <div class="text-center py-16">
        <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-4 text-primary-300">
            No Blog Posts Yet
          </h3>
          <p class="text-gray-300">
            We're working on our first posts. Check back soon for writing on
            music ownership, self-hosting, and building a collection that lasts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div class="flex flex-col gap-8 mb-16">
      {blogPosts.value.map((post, idx) => {
        const displayDate = (post.publishedAt || post.createdAt).split("T")[0];
        return (
          <article
            key={idx}
            class={`card-glow p-8 rounded-xl backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300 ${
              idx % 2 === 0 ? "bg-black/60" : "bg-gray-900/40"
            }`}
          >
            <div class="flex justify-between items-start mb-6">
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-primary-300 mb-2 leading-tight">
                  {post.title}
                </h2>
                <div class="flex items-center space-x-4 text-sm text-gray-400">
                  <span class="flex items-center">
                    📅 {displayDate}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

            {post.tags && post.tags.length > 0 && (
              <div class="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span class="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-xs border border-primary-400/20">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div class="flex items-center justify-between">
              <a
                href={`/blog/${post.slug}`}
                class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
              >
                <span>Read More</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>

              <div class="flex items-center space-x-3 text-gray-500 text-sm">
                {post.devtoUrl && (
                  <a
                    href={post.devtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-cyber hover:text-cyber-300 transition"
                  >
                    Also on Dev.to ↗
                  </a>
                )}
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
