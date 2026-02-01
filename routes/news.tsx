import { Head } from "fresh/runtime";
import { newsService } from "../utils/newsService.ts";

export default async function NewsPage() {
  const newsItems = await newsService.getNews();

  return (
    <>
      <Head>
        <title>News & Updates - Microgamma</title>
        <meta
          name="description"
          content="Stay updated with the latest Microgamma developments, technical insights, and announcements from the music ownership revolution."
        />
      </Head>

      {/* News Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              News & <span class="gradient-text">Updates</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              Stay connected with the latest developments, technical insights,
              and announcements from the{" "}
              <span class="text-primary-300">music ownership revolution</span>.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full">
            </div>
          </div>

          {/* News Articles Grid */}
          <div class="max-w-6xl mx-auto">
            <div class="flex flex-col gap-8 mb-16">
              {newsItems.map((item, idx) => (
                <article
                  key={idx}
                  class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                >
                  {item.source !== "x" && (
                    <div class="flex justify-between items-start mb-6">
                      <div class="flex-1">
                        <h2 class="text-2xl font-bold text-primary-300 mb-2 leading-tight">
                          {item.title}
                        </h2>
                        <div class="flex items-center space-x-4 text-sm text-gray-400">
                          <span class="flex items-center">
                            📅 {item.date}
                          </span>
                          <span
                            class={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.type === "GitHub Release"
                                ? "text-green-400 bg-green-900/50"
                                : item.type === "Pre-release"
                                ? "text-yellow-400 bg-yellow-900/50"
                                : item.type === "Dev.to Article"
                                ? "text-purple-400 bg-purple-900/50"
                                : "text-gray-400 bg-gray-900/50"
                            }`}
                          >
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <p class="text-gray-300 mb-4 leading-relaxed">
                    {item.source === "x" ? item.content : item.excerpt}
                  </p>

                  {/* Images for X posts */}
                  {item.source === "x" && item.images && item.images.length > 0 && (
                    <div class="flex flex-col gap-4 mb-6">
                      {item.images.map((imageUrl, imgIdx) => (
                        <a
                          key={imgIdx}
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="block w-full overflow-hidden rounded-lg transition-all"
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

                  {/* Article tags for Dev.to articles */}
                  {item.articleTags && item.articleTags.length > 0 && (
                    <div class="flex flex-wrap gap-2 mb-6">
                      {item.articleTags.map((tag) => (
                        <span class="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-xs border border-primary-400/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div class="flex items-center justify-between">
                    {item.source === "x" ? (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-200 font-medium group"
                      >
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>View on X</span>
                        <span class="group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </a>
                    ) : (
                      <a
                        href={`/news/${item.slug}`}
                        class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                      >
                        <span>Read More</span>
                        <span class="group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </a>
                    )}

                    <div class="flex items-center space-x-3 text-gray-500 text-sm">
                      {item.source === "devto" && (
                        <>
                          <span>📝</span>
                          <span>Dev.to • {item.readingTime}min read</span>
                        </>
                      )}
                      {item.source === "x" && (
                        <>
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
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to Action */}
            <div class="text-center">
              <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
                <h3 class="text-2xl font-bold mb-4 text-primary-300">
                  Stay in the Loop
                </h3>
                <p class="text-gray-300 mb-6">
                  Follow our journey as we build the future of music ownership.
                  Every update brings us closer to a world where your music
                  truly belongs to you.
                </p>
                <div class="flex justify-center space-x-2 text-primary-400">
                  <span class="text-2xl">📰</span>
                  <span class="text-lg font-semibold">
                    Latest from the Ownership Revolution
                  </span>
                  <span class="text-2xl">📰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
