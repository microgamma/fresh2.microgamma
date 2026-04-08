import { Head } from "fresh/runtime";
import NewsContent from "../islands/NewsContent.tsx";

export default function NewsPage() {
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
            <NewsContent />
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
