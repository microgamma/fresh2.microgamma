import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface NewsItem {
  slug: string;
  date: string;
  title: string;
  type: "X Post";
  excerpt: string;
  content: string;
  source: "x";
  sourceUrl: string;
  likes?: number;
  retweets?: number;
  images?: string[];
}

export default function NewsContent() {
  const newsItems = useSignal<NewsItem[] | null>(null);
  const error = useSignal(false);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((items: NewsItem[]) => {
        newsItems.value = items;
      })
      .catch(() => {
        error.value = true;
      });
  }, []);

  if (error.value) {
    return (
      <div class="text-center py-12">
        <p class="text-gray-400">
          Failed to load news. Please try again later.
        </p>
      </div>
    );
  }

  if (!newsItems.value) {
    return (
      <div class="flex flex-col gap-8 mb-16">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 animate-pulse"
          >
            <div class="h-4 bg-accent-500/15 rounded w-full mb-3" />
            <div class="h-4 bg-accent-500/15 rounded w-5/6 mb-3" />
            <div class="h-4 bg-accent-500/15 rounded w-3/4 mb-6" />
            <div class="flex justify-between">
              <div class="h-4 bg-accent-500/15 rounded w-24" />
              <div class="h-4 bg-accent-500/15 rounded w-32" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (newsItems.value.length === 0) {
    return (
      <div class="text-center py-20">
        <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-4 text-primary-300">
            No Updates Yet
          </h3>
          <p class="text-gray-300">
            Check back soon for the latest Microgamma news and updates on X.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div class="flex flex-col gap-8 mb-16">
      {newsItems.value.map((item) => (
        <article
          key={item.slug}
          class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
        >
          <p class="text-gray-300 mb-4 leading-relaxed">{item.content}</p>

          {item.images && item.images.length > 0 && (
            <div class="flex flex-col gap-4 mb-6">
              {item.images.map((imageUrl, imgIdx) => (
                <a
                  key={imgIdx}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full overflow-hidden rounded-lg transition-all hover:opacity-90"
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${imgIdx + 1} from X post`}
                    class="w-full h-auto max-h-[500px] object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          )}

          <div class="flex items-center justify-between">
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-200 font-medium group"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>View on X</span>
              <span class="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>

            <div class="flex items-center space-x-3 text-gray-500 text-sm">
              <span class="flex items-center space-x-1">
                <span>❤️</span>
                <span>{item.likes || 0}</span>
              </span>
              <span class="flex items-center space-x-1">
                <span>🔄</span>
                <span>{item.retweets || 0}</span>
              </span>
              <span class="flex items-center space-x-1 ml-2">
                <span>📅</span>
                <span>{item.date}</span>
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
