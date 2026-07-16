import { Head } from "fresh/runtime";
import NewsContent from "../islands/NewsContent.tsx";
import Kicker from "../components/Kicker.tsx";

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
            <Kicker class="justify-center mb-5" label="// LIVE.FEED" />
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              News & <span class="gradient-text">Updates</span>
            </h1>
            <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-accent-300 [text-shadow:0_2px_14px_rgba(8,3,15,0.9)]">
              Follow along with the latest from{" "}
              <a
                href="https://x.com/microgamma_io"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cyber hover:text-cyber-300 transition"
              >
                @microgamma_io
              </a>{" "}
              on X.
            </p>
            <hr class="hr-neon max-w-xs mx-auto mb-12" />
          </div>

          <div class="max-w-6xl mx-auto">
            <NewsContent />
          </div>

          <div class="text-center mt-16">
            <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold mb-4 text-primary-300">
                Stay in the Loop
              </h3>
              <p class="text-gray-300">
                Follow our progress as we build Microgamma. Every update brings
                new features for your self-hosted music library.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
