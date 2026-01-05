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
              🎵 Own Your Sound
            </h3>
            <p>
              Stream your entire music library with complete ownership. Never lose access to what you've collected.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📀 Audiophile Freedom
            </h3>
            <p>
              High-fidelity audio streaming that respects your ears. Peer-to-peer quality without compromises.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔒 Privacy by Design
            </h3>
            <p>
              Your music stays on your devices. No ads, no tracking, no platform surveillance. Just pure listening.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              ⚡ Zero-Setup Revolution
            </h3>
            <p>
              Download, launch, select your music folder. Instant streaming without the subscription hassle.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔍 Your Search, Your Rules
            </h3>
            <p>
              Find any song, artist, or album instantly. Fuzzy search that understands how you think about music.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📋 Curate Your Knowledge
            </h3>
            <p>
              Our AI discovers album and artist info for you. Build the ultimate music encyclopedia in your collection.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎤 Lyrics You Control
            </h3>
            <p>
              Add synchronized lyrics to your tracks. Perfect karaoke or just following along with your favorites.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🎨 Your Covers, Your Choice
            </h3>
            <p>
              Never let anyone change what your favorite albums look like. Choose covers from Discogs or your own scans.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔧 Hack Your Experience
            </h3>
            <p>
              JSON metadata you can manipulate with our open libraries. Customize everything to your liking.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              📱 Unified Control
            </h3>
            <p>
              Control your music from any device. Start on desktop, continue on phone. Seamless everywhere.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔊 Multi-Room Freedom
            </h3>
            <p>
              Stream to your home stereo, headphones, or both simultaneously. Your music, your spaces.
            </p>
          </div>
          <div class="fade-in p-6 card-glow rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🔄 Effortless Switching
            </h3>
            <p>
              Move between devices without missing a beat. Music flows where you want it, when you want it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}