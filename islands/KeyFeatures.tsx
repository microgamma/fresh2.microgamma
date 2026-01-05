import { useEffect } from "preact/hooks";

export default function KeyFeatures() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".fade-in");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section class="bg-gray-900 text-white py-20 px-4 grid-bg">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8 text-primary-400">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📡 Seamless Streaming
            </h3>
            <p>
              Stream your music library instantly without interruptions or
              buffering.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎵 High Fidelity Audio
            </h3>
            <p>
              Stream high-fidelity audio peer-to-peer using WebRTC with Opus
              codec for optimal compression and quality.{" "}
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔒 Secure & Private
            </h3>
            <p>
              Your music stays on your device. Data is served peer-to-peer,
              nothing passes through our servers. No data collection or ads.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              ⚡ Quick and Easy Installation
            </h3>
            <p>
              Install Microgamma in seconds. Download the executable,
              launch, select your music folder, and enjoy instant playback.
              🎶
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔍 Smart Search with Auto Suggestions
            </h3>
            <p>
              Quickly find any song, artist, or album using fuzzy search and
              real-time suggestions. No exact match required.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📋 Album & Artist
            </h3>
            <p>
              Our AI agent searches the web to find the most up-to-date
              information about each album and artist.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎤 Lyrics
            </h3>
            <p>
              Add synchronized lyrics in LRC format as part of your song metadata for karaoke-style display.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎨 Cover Art
            </h3>
            <p>
              Using Discogs, select community-brought cover art to
              personalize your collection.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔧 Hackable Player
            </h3>
            <p>
              All metadata is stored in JSON files that can be opened using our open source libraries published under the "@microphi" handle.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📱 Cross-Device Control
            </h3>
            <p>
              Control your music from your phone, tablet, or computer. Start
              a playlist on your desktop and skip a track from your phone.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔊 Multi-Device Output
            </h3>
            <p>
              Choose where your music plays. Stream to your home stereo,
              your headphones, or both at the same time.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
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
  );
}