import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import KeyFeatures from "../islands/KeyFeatures.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);
  return (
    <>
      <Head>
        <title>Microgamma - Brave New Audio Player</title>
      </Head>

        {/* Hero Section */}
        <section class="relative text-white min-h-screen flex items-center justify-center overflow-hidden vaporwave-bg">
          <div class="container mx-auto text-center z-50">
            <h1 class="text-6xl font-bold mb-4">Microgamma</h1>
            <p class="text-xl mb-8 text-primary-300 gradient-text">A Brave New Audio Player</p>
            <a
              href="/downloads"
              class="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition inline-block"
            >
              Get Started
            </a>
          </div>
        </section>
        {/* Features Section */}
        <section class="bg-black text-white py-20 px-4 grid-bg">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4 text-primary-400">
              Break the Rules
            </h2>
            <p class="text-xl mb-8">
              Stream your music from your machine to your phone without complex
              server setup or NAT/firewall hassles. Just install the app and
              open play.microgamma.io – it's that easy.
            </p>
          </div>
        </section>
        <KeyFeatures />

        {/* Upcoming Features */}
        <section class="bg-gray-800 text-white py-20 px-4 grid-bg">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8 text-primary-400">Upcoming Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🖥️ MPC Server
                </h3>
                <p>
                  Music Player Controller server for advanced remote control capabilities.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🤖 AI-Driven Song Info
                </h3>
                <p>
                  Enhanced current song information and intelligent suggestions using artificial intelligence.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🔄 Smarter Infinity Queue
                </h3>
                <p>
                  Improved queue management with smarter recommendations that adapt to your listening habits.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  👥 Multi Profile
                </h3>
                <p>
                  Support for multiple user profiles with personalized libraries and settings.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🌐 Remote Instance
                </h3>
                <p>
                  Upload your music to selected storage brokers and let us run your Microgamma server for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        </>
  );
});
