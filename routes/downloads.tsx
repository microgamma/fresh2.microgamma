import { Head } from "fresh/runtime";
import DownloadsContent from "../islands/DownloadsContent.tsx";
import CopyCommand from "../islands/CopyCommand.tsx";
import Kicker from "../components/Kicker.tsx";

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>Download Microgamma - Your Music, Your Way</title>
        <meta
          name="description"
          content="Download Microgamma for Windows, macOS, and Linux. A self-hosted music player that's free to run on your own hardware."
        />
      </Head>

      {/* Downloads Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <Kicker class="justify-center mb-5" label="// TERMINAL.DOWNLOAD" />
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Download <span class="gradient-text">Microgamma</span>
            </h1>
            <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-accent-300 [text-shadow:0_2px_14px_rgba(8,3,15,0.9)]">
              Get started in under a minute. Download Microgamma, point it at
              your music folder, and start playing your library — free to run,
              and forever yours.
            </p>
            <hr class="hr-neon max-w-xs mx-auto mb-12" />
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
                      Download for Linux x64 and arm64. Run it on a desktop, a
                      home server, or a Raspberry Pi.
                    </p>
                    <p class="text-gray-300 leading-relaxed mt-3">
                      On Windows or macOS? Run Microgamma in{" "}
                      <a
                        href="/docs"
                        class="text-primary-400 hover:text-primary-300 underline"
                      >
                        Docker
                      </a>.
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

            {/* Docker / self-host Section */}
            <div class="hud-card rounded-xl p-8 mt-12">
              <div class="flex items-start gap-4 mb-6">
                <div class="text-3xl">🐳</div>
                <div>
                  <h3 class="font-head text-xl text-primary-300 mb-2">
                    Run it yourself — Docker
                  </h3>
                  <p class="text-accent-300 leading-relaxed">
                    Prefer to self-host? Microgamma ships as a public,
                    multi-architecture Docker image — run it headless on a home
                    server, a NAS, or a Raspberry Pi. Pull the image and Docker
                    automatically picks the right build for your machine (Intel
                    or Apple Silicon / ARM).
                  </p>
                </div>
              </div>

              {/* Availability caveat */}
              <div class="flex items-start gap-3 rounded-sm border border-sun/40 bg-sun/10 px-4 py-3 mb-6 text-sm text-sun font-mono-tech">
                <span aria-hidden="true">⚠</span>
                <span>
                  Heads up: the image goes live after the next release, once the
                  GHCR package is switched to public. Until then the command
                  below will return a 404.
                </span>
              </div>

              <CopyCommand command="docker pull ghcr.io/microgamma/microgamma-desktop:latest" />

              <p class="text-accent-300/70 text-sm mt-6">
                Pin a specific version with a tag like{" "}
                <code class="text-cyber">:v2.94.3</code>. See the{" "}
                <a
                  href="/docs/docker"
                  class="text-cyber hover:text-cyber-300 underline"
                >
                  Docker guide
                </a>{" "}
                for first-run setup and running headless — or the{" "}
                <a
                  href="/docs/headless"
                  class="text-cyber hover:text-cyber-300 underline"
                >
                  Headless Mode
                </a>{" "}
                docs to run it without a container.
              </p>
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
