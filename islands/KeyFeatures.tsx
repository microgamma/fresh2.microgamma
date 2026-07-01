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
      { threshold: 0.1 },
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
              🎵 Your Music, Always
            </h3>
            <p>
              Stream your entire library with full ownership. Every album you
              add stays yours — no subscriptions, no expiration.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📀 High-Fidelity Streaming
            </h3>
            <p>
              Crystal-clear audio streamed peer-to-peer. Your music sounds the
              way it was meant to — no compression, no compromise.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔒 Private by Default
            </h3>
            <p>
              Your music stays on your device. No ads, no tracking, no data
              harvesting — just you and your music.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              ⚡ Ready in Seconds
            </h3>
            <p>
              Download, launch, point to your music folder. You're streaming in
              under a minute — no accounts, no setup wizards.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔍 Instant Search
            </h3>
            <p>
              Find any song, artist, or album in milliseconds. Fuzzy search that
              understands what you're looking for, even with typos.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎤 Lyrics Built In
            </h3>
            <p>
              Add synchronized lyrics to any track. Follow along with your
              favorites or turn your living room into a karaoke stage.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎨 Your Covers, Your Way
            </h3>
            <p>
              Pick album art from Discogs, use your own scans, or design
              something new. Your albums always look the way you want.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔧 Make It Yours
            </h3>
            <p>
              Open JSON metadata and extensible libraries let you tweak, script,
              and automate anything in your collection.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📱 One Library, Every Device
            </h3>
            <p>
              Control your music from any device. Start on desktop, pick up on
              your phone — it all stays in sync.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔊 Play Everywhere
            </h3>
            <p>
              Stream to your home stereo, headphones, or multiple rooms at once.
              Your music fills every space you want.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔄 Seamless Handoff
            </h3>
            <p>
              Switch between devices without missing a beat. Your music follows
              you naturally, wherever you go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
