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
          content="Stay updated with the latest Microgamma developments and updates on X."
        />
      </Head>

      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              News & <span class="gradient-text">Updates</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              Follow along with the latest from{" "}
              <a
                href="https://x.com/microgamma_io"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-300 hover:text-primary-200 transition"
              >
                @microgamma_io
              </a>{" "}
              on X.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full">
            </div>
          </div>

          <div class="max-w-6xl mx-auto">
            {newsItems.length === 0
              ? (
                <div class="text-center py-20">
                  <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 max-w-2xl mx-auto">
                    <h3 class="text-2xl font-bold mb-4 text-primary-300">
                      No Updates Yet
                    </h3>
                    <p class="text-gray-300 mb-6">
                      Check back soon for the latest Microgamma news and updates
                      on X.
                    </p>
                    <div class="flex justify-center space-x-2 text-primary-400">
                      <span class="text-2xl">📰</span>
                      <span class="text-lg font-semibold">
                        Your Music. Your Way.
                      </span>
                      <span class="text-2xl">📰</span>
                    </div>
                  </div>
                </div>
              )
              : (
                <div class="flex flex-col gap-8 mb-16">
                  {newsItems.map((item) => (
                    <article
                      key={item.slug}
                      class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                    >
                      <p class="text-gray-300 mb-4 leading-relaxed">
                        {item.content}
                      </p>

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
              )}
          </div>

          <div class="text-center mt-16">
            <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold mb-4 text-primary-300">
                Stay in the Loop
              </h3>
              <p class="text-gray-300 mb-6">
                Follow our progress as we build Microgamma. Every update brings
                new features for your self-hosted music library.
              </p>
              <div class="flex justify-center space-x-2 text-primary-400">
                <span class="text-2xl">📰</span>
                <span class="text-lg font-semibold">
                  Your Music. Your Way.
                </span>
                <span class="text-2xl">📰</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
