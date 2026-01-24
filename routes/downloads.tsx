import { Head } from "fresh/runtime";
import {
  DownloadCard,
  Platform,
  Release,
} from "../components/DownloadCard.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { cachedFetch } from "../utils.ts";

export default async function DownloadsPage() {
  interface AppRealeases {
    [platform: string]: Release[];
  }

  const releases = await cachedFetch(
    "https://signaling.microgamma.io/releases/list",
  ) as AppRealeases;

  const downloads = Object.entries(releases).map(([platform, data]) => {
    const lastRelease = data[0];

    return {
      platform: platform as Platform,
      ...lastRelease,
    };
  });

  return (
    <>
      <Head>
        <title>Download Microgamma - Own Your Music, Own Your Sound</title>
        <meta
          name="description"
          content="Download Microgamma for Windows, macOS, and Linux. Take control of your music collection with self-hosted streaming, no subscriptions required."
        />
      </Head>

      {/* Downloads Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Download <span class="gradient-text">Microgamma</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              Take ownership of your music collection. Join the ownership
              revolution where your music belongs to you - no subscriptions, no
              compromises, no platform dictators.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full">
            </div>
          </div>

          {/* Download Cards Section */}
          <div class="max-w-4xl mx-auto mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-primary-300">
              Choose Your Platform
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloads.map((download, idx) => {
                return <DownloadCard key={idx} release={download} />;
              })}
            </div>
          </div>

          {/* Information Section */}
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Warning Note */}
              <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30">
                <div class="flex items-start space-x-4">
                  <div class="text-3xl mb-2">⚠️</div>
                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-primary-300">
                      Security Note
                    </h3>
                    <p class="text-gray-300 leading-relaxed">
                      Windows and macOS executables are not code signed. You may
                      need to allow them in your security settings. This is
                      normal for open-source software in active development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Start */}
              <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30">
                <div class="flex items-start space-x-4">
                  <div class="text-3xl mb-2">🚀</div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold mb-4 text-primary-300">
                      Take Ownership - Quick Start
                    </h3>
                    <ol class="text-gray-300 space-y-3">
                      <li class="flex items-start space-x-2">
                        <span class="text-primary-400 font-bold">1.</span>
                        <span>Download the executable for your platform</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <span class="text-primary-400 font-bold">2.</span>
                        <span>Unzip and Launch Microgamma</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <span class="text-primary-400 font-bold">3.</span>
                        <span>Select your music folder</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <span class="text-primary-400 font-bold">4.</span>
                        <span>Open play.microgamma.io on any device</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <span class="text-primary-400 font-bold">5.</span>
                        <span class="text-primary-300 font-semibold">
                          Start streaming your owned music!
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div class="text-center mt-16">
              <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
                <h3 class="text-2xl font-bold mb-4 text-primary-300">
                  Ready to Own Your Music?
                </h3>
                <p class="text-gray-300 mb-6">
                  Join music enthusiasts who've taken back control. Your
                  collection, your rules, your revolution.
                </p>
                <div class="flex justify-center space-x-2 text-primary-400">
                  <span class="text-2xl">🎵</span>
                  <span class="text-lg font-semibold">
                    Welcome to the Ownership Movement
                  </span>
                  <span class="text-2xl">🎵</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
