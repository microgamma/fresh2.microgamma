import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);
  return (
    <>
      <Head>
        <title>Microgamma - Brave New Audio Player</title>
      </Head>

        {/* Hero Section */}
        <section class="relative text-white min-h-screen flex items-center justify-center">
          <div class="container mx-auto text-center">
            <h1 class="text-6xl font-bold mb-4">Microgamma</h1>
            <p class="text-xl mb-8">A Brave New Audio Player</p>
            <a
              href="/downloads"
              class="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-400 transition inline-block"
            >
              Get Started
            </a>
          </div>
        </section>
        {/* Features Section */}
        <section class="bg-black text-white py-20 px-4">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4 text-pink-400">
              Break the Rules
            </h2>
            <p class="text-xl mb-8">
              Stream your music from your machine to your phone without complex
              server setup or NAT/firewall hassles. Just install the app and
              open play.microgamma.io – it's that easy.
            </p>
          </div>
        </section>
        {/* More Features */}
        <section class="bg-gray-900 text-white py-20 px-4">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8 text-pink-400">Key Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  📡 Seamless Streaming
                </h3>
                <p>
                  Stream your music library instantly without interruptions or
                  buffering.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🎵 High Fidelity Audio
                </h3>
                <p>
                  Stream high-fidelity audio peer-to-peer using WebRTC with Opus
                  codec for optimal compression and quality.{" "}
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🔒 Secure & Private
                </h3>
                <p>
                  Your music stays on your device. Data is served peer-to-peer,
                  nothing passes through our servers. No data collection or ads.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  ⚡ Quick and Easy Installation
                </h3>
                <p>
                  Install Microgamma in seconds. Download the executable,
                  launch, select your music folder, and enjoy instant playback.
                  🎶
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🔍 Smart Search with Auto Suggestions
                </h3>
                <p>
                  Quickly find any song, artist, or album using fuzzy search and
                  real-time suggestions. No exact match required.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  📋 Album & Artist
                </h3>
                <p>
                  Our AI agent searches the web to find the most up-to-date
                  information about each album and artist.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🎤 Lyrics
                </h3>
                <p>
                  Add synchronized lyrics in LRC format as part of your song metadata for karaoke-style display.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🎨 Cover Art
                </h3>
                <p>
                  Using Discogs, select community-brought cover art to
                  personalize your collection.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🔧 Hackable Player
                </h3>
                <p>
                  All metadata is stored in JSON files that can be opened using our open source libraries published under the "@microphi" handle.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  📱 Cross-Device Control
                </h3>
                <p>
                  Control your music from your phone, tablet, or computer. Start
                  a playlist on your desktop and skip a track from your phone.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🔊 Multi-Device Output
                </h3>
                <p>
                  Choose where your music plays. Stream to your home stereo,
                  your headphones, or both at the same time.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🔄 Seamless Switching
                </h3>
                <p>
                  Switch between output devices without interrupting the music.
                  The transition is smooth and seamless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Features */}
        <section class="bg-gray-800 text-white py-20 px-4">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8 text-pink-400">Upcoming Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🖥️ MPC Server
                </h3>
                <p>
                  Music Player Controller server for advanced remote control capabilities.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🤖 AI-Driven Song Info
                </h3>
                <p>
                  Enhanced current song information and intelligent suggestions using artificial intelligence.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🔄 Smarter Infinity Queue
                </h3>
                <p>
                  Improved queue management with smarter recommendations that adapt to your listening habits.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  👥 Multi Profile
                </h3>
                <p>
                  Support for multiple user profiles with personalized libraries and settings.
                </p>
              </div>
              <div class="fade-in p-6 bg-transparent border border-pink-400 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-pink-400">
                  🌐 Remote Instance
                </h3>
                <p>
                  Upload your music to selected storage brokers and let us run your Microgamma server for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
         document.addEventListener('DOMContentLoaded', function() {
           const observer = new IntersectionObserver((entries) => {
             entries.forEach(entry => {
               if (entry.isIntersecting) {
                 entry.target.classList.add('visible');
               }
             });
           }, { threshold: 0.1 });
           document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
         });
       `,
        }}
      />
    </>
  );
});
