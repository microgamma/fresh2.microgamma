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
    "The Phone Is the Remote",
    "Open play.microgamma.io on your phone — no app store, no pairing. Add it to the home screen and it behaves like any native app. The box wired to your amp does the playing; the phone in your hand does the choosing.",
  ],
  [
    "🔊",
    "Every Room at Once",
    "Start the record and it plays through every connected device — laptop, phone, the box by the stereo. The same music in every room, give or take a heartbeat.",
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
    "Match a record to its precise Discogs release — the pressing sitting on your shelf, not a generic entry — and pull in the community's cover scans, credits and notes. Or use your own photos of the sleeve.",
  ],
  [
    "💿",
    "Rich Album Pages",
    "Zoom cover art full-screen, see the exact pressing you own — format, label, year from Discogs — swap in alternate covers, and jump to similar records in your own library.",
  ],
  [
    "🔧",
    "Make It Yours",
    "Open JSON metadata and extensible libraries let you tweak, script, and automate anything in your collection.",
  ],
  [
    "🎤",
    "Lyrics Built In",
    "Add synchronized lyrics to any track. Follow along, or turn your living room into a karaoke stage.",
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
