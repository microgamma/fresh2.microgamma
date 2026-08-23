import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import KeyFeatures from "../islands/KeyFeatures.tsx";
import Kicker from "../components/Kicker.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Microgamma — Own Your Music. Own Your Sound.</title>
        <meta
          name="description"
          content="Microgamma gives the music you already own one home — and plays it anywhere: your machine, the box wired to your amp, or your phone across town. No dedicated hardware, no port forwarding. Free while in beta."
        />
        <meta
          name="keywords"
          content="music player, music server, music streaming, music ownership, self-hosted music, remote control, discogs, audiophile, music library, digital music"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Microgamma",
            "description":
              "A music player, streamer and headless music server in one. Microgamma plays the collection you already own, on the machine you already use, and streams it to every device in the house — or to your phone outside it, with no router configuration.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Windows, macOS, Linux",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "author": { "@type": "Organization", "name": "Microgamma" },
          })}
        </script>
      </Head>

      {/* ============================ HERO ============================ */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        <div class="outrun" aria-hidden="true">
          <div class="outrun-sun"></div>
          <div class="outrun-grid"></div>
        </div>

        <div class="container mx-auto px-4 text-center relative z-10 -mt-10">
          <Kicker class="justify-center mb-6" label="// SIGNAL.ACQUIRED" />
          <h1
            class="glitch font-display text-5xl sm:text-7xl md:text-8xl leading-none mb-6"
            data-text="MICROGAMMA"
          >
            MICROGAMMA
          </h1>
          <p class="font-head text-lg md:text-2xl tracking-[0.25em] uppercase gradient-text mb-6">
            Own Your Music · Own Your Sound
          </p>
          <p class="max-w-xl mx-auto text-accent-300 text-base md:text-lg mb-4 leading-relaxed [text-shadow:0_2px_16px_rgba(8,3,15,0.95)]">
            You already own the music — the download codes from the sleeve, the
            lossless files you paid for, the rips scattered across folders.
            Microgamma gives it one home, and plays it anywhere: this machine,
            the box wired to your amp, or your phone across town.
          </p>
          <p class="max-w-xl mx-auto text-cyber-300 font-mono-tech text-xs md:text-sm uppercase tracking-[0.2em] mb-10 [text-shadow:0_2px_16px_rgba(8,3,15,0.95)]">
            Install it · point it at your folder · press play
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/downloads"
              class="btn-neon px-8 py-4 rounded-sm text-sm"
            >
              ▸ Download Free
            </a>
            <a
              href="#manifest"
              f-client-nav={false}
              class="btn-ghost px-8 py-4 rounded-sm text-sm"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#manifest"
          f-client-nav={false}
          aria-label="Scroll to content"
          class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-mono-tech text-xs uppercase tracking-[0.3em] text-cyber-300 animate-pulse hover:text-cyber transition"
        >
          ▼ scroll
        </a>
      </section>

      {/* ========================= MANIFEST ========================= */}
      <section
        id="manifest"
        class="relative bg-accent-900 py-24 px-4 grid-bg scroll-mt-24"
      >
        <div class="container mx-auto max-w-4xl text-center">
          <Kicker class="justify-center mb-4" label="[ 01 ] // MANIFEST" />
          <h2 class="font-head text-3xl md:text-5xl mb-4 text-white">
            What is <span class="gradient-text">Microgamma</span>?
          </h2>
          <p class="text-accent-300 text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
            One program, three jobs. Run the one you need today — or all three
            at once.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              [
                "🎧",
                "The Player",
                "Install it, point it at your music folder, press play. No account, no cloud, no setup wizard — just your collection, on your machine.",
              ],
              [
                "📱",
                "The Streamer",
                "Leave it running on the box wired to your amplifier and drive it from your phone. Same library, whichever room you're standing in.",
              ],
              [
                "🖥️",
                "The Server",
                "Run it headless on a NAS or a spare machine. Everyone at home connects for free — and you can reach it from outside without touching a router.",
              ],
            ].map(([icon, title, body]) => (
              <div class="hud-card rounded-sm p-6">
                <span class="text-3xl">{icon}</span>
                <h3 class="font-head text-lg mt-4 mb-2 text-primary-400">
                  {title}
                </h3>
                <p class="text-accent-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p class="text-cyber-300 font-head tracking-wide text-lg md:text-xl mt-14">
            Like curating a vinyl collection — with the convenience of modern
            streaming.
          </p>
        </div>
      </section>

      {/* ===================== THE REBELLION ===================== */}
      <section class="relative bg-[#08030f] py-24 px-4 overflow-hidden">
        <div class="container mx-auto max-w-5xl">
          <div class="text-center mb-14">
            <Kicker
              class="justify-center mb-4"
              label="[ 02 ] // WHAT_YOU_KEEP"
            />
            <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
              What Vanishes, <span class="gradient-text">What Stays</span>
            </h2>
            <p class="text-accent-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Microgamma doesn't sell you music — you already buy it, from the
              record shop, from the download code in the sleeve, from wherever
              you get your lossless. What it does is make sure everything you
              build on top of it stays yours too: the playlists, the likes, the
              years of listening.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rented */}
            <div class="hud-card rounded-sm p-8 bg-warn-700/10">
              <h3 class="font-head text-xl mb-6 text-warn flex items-center gap-3">
                <span class="text-2xl">⏳</span> When You Rent
              </h3>
              <ul class="space-y-4 text-accent-300">
                {[
                  "Your playlists live in someone else's account",
                  "Stop paying and the curation goes with the catalogue",
                  "Albums disappear when a licence expires",
                  "The app decides how your library looks and behaves",
                  "Nothing on your disk to back up",
                ].map((t) => (
                  <li class="flex items-start gap-3">
                    <span class="text-warn font-mono-tech mt-0.5">✗</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Owned */}
            <div class="hud-card rounded-sm p-8 bg-cyber-500/5">
              <h3 class="font-head text-xl mb-6 text-cyber flex items-center gap-3">
                <span class="text-2xl">💾</span> When You Own
              </h3>
              <ul class="space-y-4 text-accent-300">
                {[
                  "Your files stay exactly where you put them",
                  "Playlists, likes and play history live on your disk",
                  "Backed up with everything else you own",
                  "Nothing expires, nothing gets delisted",
                  "Covers, metadata, order — all of it yours to edit",
                ].map((t) => (
                  <li class="flex items-start gap-3">
                    <span class="text-cyber font-mono-tech mt-0.5">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p class="text-center text-cyber-300 font-head tracking-wide text-lg mt-12">
            Twenty years from now it still plays — no account, no licence check,
            no renewal.
          </p>
        </div>
      </section>

      {/* ====================== KEY FEATURES ====================== */}
      <KeyFeatures />

      {/* ======================== DEPLOY ======================== */}
      <section class="relative bg-[#08030f] py-24 px-4 grid-bg">
        <div class="container mx-auto max-w-5xl text-center">
          <Kicker class="justify-center mb-4" label="[ 04 ] // WHAT_IT_COSTS" />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            Right Now, <span class="gradient-text">Nothing</span>
          </h2>
          <p class="text-accent-300 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
            Microgamma is in beta. Every feature is switched on, for everyone,
            at no cost — there is nothing to buy yet, and nothing held back.
          </p>
          <p class="text-sun text-sm font-mono-tech uppercase tracking-widest mb-14">
            ⚡ Beta: remote streaming runs on our relays, free while we build
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="hud-card rounded-sm p-8">
              <h3 class="font-head text-xl mb-4 text-primary-400 flex items-center gap-3">
                <span class="text-2xl">🎧</span> Today
              </h3>
              <p class="text-accent-300 mb-6">
                Install it and use it. No account to create, no tier to pick,
                nothing to bring but the music you already have.
              </p>
              <ul class="space-y-3 text-accent-300">
                {[
                  ["Everything on", "the full feature set, free during beta"],
                  [
                    "Your disk",
                    "your library stays on the machine you install it on",
                  ],
                  ["Your network", "play it on every device in the house"],
                  [
                    "Beyond it too",
                    "reach your library from outside, on our relays",
                  ],
                ].map(([k, v]) => (
                  <li class="flex items-start gap-3">
                    <span class="text-primary-400 font-mono-tech mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong class="text-white">{k}</strong> — {v}
                    </span>
                  </li>
                ))}
              </ul>
              <p class="font-head text-cyber mt-6 tracking-wide">
                Nothing to pay. Nothing to configure.
              </p>
            </div>

            <div class="hud-card rounded-sm p-8">
              <h3 class="font-head text-xl mb-4 text-cyber flex items-center gap-3">
                <span class="text-2xl">🗺️</span> Later
              </h3>
              <p class="text-accent-300 mb-6">
                One day we do have to charge for something. When that happens,
                the split is simple — and you get to pick which side you're on.
              </p>
              <ul class="space-y-3 text-accent-300">
                {[
                  [
                    "Run it yourself",
                    "your hardware, your API keys — free, and staying that way",
                  ],
                  [
                    "Or let us run it",
                    "planned: a hosted instance, our services, no setup",
                  ],
                  [
                    "Never a hostage",
                    "your files and playlists are on your disk either way",
                  ],
                ].map(([k, v]) => (
                  <li class="flex items-start gap-3">
                    <span class="text-cyber font-mono-tech mt-0.5">✓</span>
                    <span>
                      <strong class="text-white">{k}</strong> — {v}
                    </span>
                  </li>
                ))}
              </ul>
              <p class="font-head text-primary-400 mt-6 tracking-wide">
                We'll sell convenience, not access.
              </p>
            </div>
          </div>

          <p class="text-accent-300 mt-12 max-w-2xl mx-auto">
            Microgamma itself isn't open source — that's what pays for building
            it. But if you know how to run the pieces yourself, they're yours to
            run. Paying us will only ever mean you'd rather not.
          </p>
        </div>
      </section>

      {/* ====================== GET STARTED ====================== */}
      <section class="relative bg-accent-900 py-24 px-4 overflow-hidden">
        <div class="container mx-auto max-w-5xl text-center">
          <Kicker class="justify-center mb-4" label="[ 05 ] // JACK_IN" />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            Point It at <span class="gradient-text">Your Folder</span>
          </h2>
          <p class="text-accent-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Microgamma is in beta and moving quickly. It's already good for
            daily listening — download it, open your collection, and see.
          </p>
          <a href="/downloads" class="btn-neon px-10 py-4 rounded-sm text-sm">
            ▸ Download Free
          </a>

          <div class="mt-20 pt-12 border-t border-primary-500/20">
            <Kicker class="justify-center mb-4" label="// WHAT_COMES_NEXT" />
            <h3 class="font-head text-2xl md:text-3xl text-white mb-3">
              What Comes Next
            </h3>
            <p class="text-accent-300 mb-10 max-w-2xl mx-auto">
              Lyrics are being built right now; the rest is where we're headed.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                [
                  "☁️",
                  "Hosted Instance",
                  "Would rather not run it yourself? We'll run Microgamma for you.",
                  "Planned",
                ],
                [
                  "🔄",
                  "Smart Queues",
                  "Playlists that learn what you actually keep coming back to.",
                  "Planned",
                ],
                [
                  "👥",
                  "Family & Friends",
                  "Separate profiles for a household sharing one library.",
                  "Planned",
                ],
                [
                  "🎤",
                  "Lyrics",
                  "Synchronized lyrics you can follow along to, track by track.",
                  "In progress",
                ],
              ].map(([icon, title, body, status]) => (
                <div class="hud-card rounded-sm p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-2xl">{icon}</span>
                    <span
                      class={`text-[10px] font-mono-tech uppercase tracking-widest rounded-sm px-2 py-0.5 border ${
                        status === "In progress"
                          ? "text-cyber border-cyber/40"
                          : "text-sun border-sun/40"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <h4 class="font-head text-lg mb-2 text-primary-400">
                    {title}
                  </h4>
                  <p class="text-accent-300 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
