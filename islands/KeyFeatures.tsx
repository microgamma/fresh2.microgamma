import { useEffect } from "preact/hooks";
import Kicker from "../components/Kicker.tsx";

const FEATURES: [string, string, string][] = [
  [
    "🎵",
    "Your Music, Always",
    "Stream your entire library with full ownership. Every album you add stays yours — no subscriptions, no expiration.",
  ],
  [
    "📀",
    "High-Fidelity Streaming",
    "Crystal-clear audio streamed peer-to-peer. Your music sounds the way it was meant to — no compression, no compromise.",
  ],
  [
    "🔒",
    "Private by Default",
    "Your music stays on your device. No ads, no tracking, no data harvesting — just you and your music.",
  ],
  [
    "⚡",
    "Ready in Seconds",
    "Download, launch, point to your music folder. You're streaming in under a minute — no accounts, no setup wizards.",
  ],
  [
    "🔍",
    "Instant Search",
    "Find any song, artist, or album in milliseconds. Fuzzy search that understands you, even with typos.",
  ],
  [
    "🎤",
    "Lyrics Built In",
    "Add synchronized lyrics to any track. Follow along, or turn your living room into a karaoke stage.",
  ],
  [
    "🎨",
    "Your Covers, Your Way",
    "Pull art from Discogs, use your own scans, or design something new. Your albums always look the way you want.",
  ],
  [
    "🔧",
    "Make It Yours",
    "Open JSON metadata and extensible libraries let you tweak, script, and automate anything in your collection.",
  ],
  [
    "📱",
    "One Library, Every Device",
    "Control your music from any device. Start on desktop, pick up on your phone — it all stays in sync.",
  ],
  [
    "🔊",
    "Play Everywhere",
    "Stream to your home stereo, headphones, or multiple rooms at once. Your music fills every space you want.",
  ],
  [
    "🔄",
    "Seamless Handoff",
    "Switch between devices without missing a beat. Your music follows you naturally, wherever you go.",
  ],
];

export default function KeyFeatures() {
  useEffect(() => {
    // Enable the animated entrance only now that JS is running, so SSR /
    // no-JS renders show the cards immediately.
    document.documentElement.dataset.anim = "on";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );

    const cards = document.querySelectorAll(".fade-in");
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section class="relative bg-accent-900 py-24 px-4 grid-bg">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-14">
          <Kicker class="justify-center mb-4" label="[ 03 ] // CAPABILITIES" />
          <h2 class="font-head text-3xl md:text-5xl text-white">
            Key <span class="gradient-text">Features</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(([icon, title, body], i) => (
            <div
              class="fade-in hud-card rounded-sm p-6"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-3xl">{icon}</span>
                <span class="font-mono-tech text-xs text-cyber/60 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 class="font-head text-lg mb-3 text-primary-400">{title}</h3>
              <p class="text-accent-300 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
