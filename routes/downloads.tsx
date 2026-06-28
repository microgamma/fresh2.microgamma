import { Head } from "fresh/runtime";
import DownloadsContent from "../islands/DownloadsContent.tsx";

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>Download Microgamma - Your Music, Your Way</title>
        <meta
          name="description"
          content="Download Microgamma for Windows, macOS, and Linux. Stream your own music library from any device — free, self-hosted, no subscriptions."
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
              Get started in under a minute. Download Microgamma, point it
              at your music folder, and start streaming to any device — free
              and forever yours.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full">
            </div>
          </div>

          <DownloadsContent />

          {/* Information Section */}
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Linux Downloads */}
              <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30">
                <div class="flex items-start space-x-4">
                  <div class="text-3xl mb-2">🐧</div>
                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-primary-300">
                      Linux
                    </h3>
                    <p class="text-gray-300 leading-relaxed">
                      Download for Linux x64 and arm64. Run it on a desktop,
                      a home server, or a Raspberry Pi.
                    </p>
                    <p class="text-gray-300 leading-relaxed mt-3">
                      On Windows or macOS? Run Microgamma in{" "}
                      <a href="/docs" class="text-primary-400 hover:text-primary-300 underline">Docker</a>.
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
                      Quick Start
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

            {/* Headless / Docker Section */}
            <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 mt-12">
              <div class="flex items-start space-x-4">
                <div class="text-3xl mb-2">🐳</div>
                <div>
                  <h3 class="text-xl font-semibold mb-4 text-primary-300">
                    Headless Mode &amp; Docker
                  </h3>
                  <p class="text-gray-300 leading-relaxed mb-4">
                    Microgamma can run without a desktop GUI — on a home server,
                    a Raspberry Pi, or inside a Docker container. Start it from
                    the command line, point it at your music folder, and stream
                    from any device.
                  </p>
                  <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300 space-y-2">
                    <div class="text-primary-400 mb-1"># Authenticate (one-time)</div>
                    <div>Microgamma --login</div>
                    <div class="text-gray-500 mt-3 mb-1"># Start streaming</div>
                    <div>Microgamma --token --config --device-name="My Server" --music-path="/music"</div>
                  </div>
                  <p class="text-gray-400 text-sm mt-4">
                    See the <a href="/docs" class="text-primary-400 hover:text-primary-300 underline">documentation</a> for
                    Docker setup and full CLI reference. No GUI required. No code signing concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div class="text-center mt-16">
              <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
                <h3 class="text-2xl font-bold mb-4 text-primary-300">
                  Ready to Try It?
                </h3>
                <p class="text-gray-300 mb-6">
                  Join thousands of music lovers who stream their own
                  collections. Free to download, yours to keep.
                </p>
                <div class="flex justify-center space-x-2 text-primary-400">
                  <span class="text-2xl">🎵</span>
                  <span class="text-lg font-semibold">
                    Your Music. Your Way.
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
