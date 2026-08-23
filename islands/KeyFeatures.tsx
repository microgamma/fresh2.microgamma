import { useEffect } from "preact/hooks";
import Kicker from "../components/Kicker.tsx";

const FEATURES: [string, string, string][] = [
  [
    "🧩",
    "No Box, No Port Forwarding",
    "It's an app, not an appliance: install it on the machine you already use, with no dedicated device to flash. And reaching your library from outside the house takes no port forwarding, no VPN, no argument with your router.",
  ],
  [
    "📱",
    "Every Device Is the Same Player",
    "Open play.microgamma.io on your laptop, your phone, the box wired to your amp — it's one player, seen from wherever you are. Put a record on and it plays through every connected device at once, each with its own volume, driven from whichever screen is in your hand — no pairing, no limit. Add it to your phone's home screen and it behaves like a native app.",
  ],
  [
    "🎯",
    "Only Your Music",
    "No streaming tab, no web radio, no podcast section. Microgamma plays the collection you own and nothing else — which is exactly why it stays fast and stays out of the way.",
  ],
  [
    "🎧",
    "What to Play Next",
    "Out of the box, suggestions come from your own library: same genre, same feel as the song that's playing — as good as your metadata is. Add your own DeepSeek key and they get properly smart, and anything you don't own yet comes with a pointer to it on Discogs.",
  ],
  [
    "📀",
    "High-Fidelity Streaming",
    "Your files streamed peer-to-peer, straight from the machine that holds them. No re-encoding — the file you own is the file you hear.",
  ],
  [
    "🎚️",
    "Consistent Volume",
    "No more reaching for the dial between songs. Microgamma measures each track's loudness (ReplayGain / EBU R128) and levels playback — per track, or in album mode that keeps a record's quiet-to-loud dynamics intact.",
  ],
  [
    "⏭️",
    "Gapless Playback",
    "Albums play the way they were mastered. The next track is preloaded and handed over the instant the last one ends — no silence, no stutter, even on live sets and continuous mixes.",
  ],
  [
    "🔒",
    "Private by Default",
    "Your music stays on your device. No ads, no tracking, no data harvesting — just you and your music.",
  ],
  [
    "💿",
    "The Exact Release You Own",
    "Match a record to its precise Discogs release — format, label, year, the pressing sitting on your shelf — and pull in the community's scans, credits and notes. Swap in alternate covers or your own photos of the sleeve, zoom the art full-screen, and jump straight to similar records in your library.",
  ],
  [
    "📺",
    "Retro Visualizers",
    "Six of them — Synthwave, Tunnel, Spectrum 3D, Waveform, Circles and Bars — moving to whatever's playing. Throw one on the big screen and let the room do the rest.",
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
