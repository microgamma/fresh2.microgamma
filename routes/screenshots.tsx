import { Head } from "fresh/runtime";
import { newsService } from "../utils/newsService.ts";
import Thumbnail from "../islands/Thumbnail.tsx";

export default async function GalleryPage() {
  const galleryItems = await newsService.getGalleryMedia();

  return (
    <>
      <Head>
        <title>Gallery - Microgamma</title>
        <meta
          name="description"
          content="See what Microgamma has been sharing on X. Screenshots, updates, and behind-the-scenes from our self-hosted music player."
        />
      </Head>

      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Gallery & <span class="gradient-text">Updates</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              Latest media shared by{" "}
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

          <div class="max-w-7xl mx-auto">
            {galleryItems.length === 0
              ? (
                <div class="text-center py-20">
                  <p class="text-gray-400 text-lg">
                    No media posts found. Check back soon!
                  </p>
                </div>
              )
              : (
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      class="card-glow bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300 group"
                    >
                      <div class="relative overflow-hidden">
                        <Thumbnail
                          screenshot={{
                            image: item.images[0].url,
                            title: item.text.substring(0, 80),
                          }}
                        />
                        {item.images.length > 1 && (
                          <div class="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                            +{item.images.length - 1} more
                          </div>
                        )}
                      </div>

                      <div class="p-6">
                        <p class="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                          {item.text}
                        </p>

                        <div class="flex items-center justify-between">
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-200 font-medium group/link"
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
                          </a>

                          <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span class="flex items-center space-x-1">
                              <span>❤️</span>
                              <span>{item.likes}</span>
                            </span>
                            <span class="flex items-center space-x-1">
                              <span>🔄</span>
                              <span>{item.retweets}</span>
                            </span>
                            <span class="flex items-center space-x-1 ml-2">
                              <span>📅</span>
                              <span>{item.date}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

          <div class="text-center mt-16">
            <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold mb-4 text-primary-300">
                Follow Us on X
              </h3>
              <p class="text-gray-300 mb-6">
                Stay up to date with the latest Microgamma screenshots, updates
                and behind-the-scenes content.
              </p>
              <a
                href="https://x.com/microgamma_io"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition font-semibold"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@microgamma_io</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
