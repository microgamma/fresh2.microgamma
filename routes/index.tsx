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
          content="Microgamma gives the music you already own one home — and plays it anywhere: your machine, the box wired to your amp, or your phone across town. Auto-Queue shuffles a new album into what you're already hearing, and a no-repeat window means you hear each song once."
        />
        <meta
          name="keywords"
          content="music player, music server, music streaming, music ownership, self-hosted music, auto-queue, remote control, discogs, audiophile, music library, digital music"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Microgamma",
            "description":
              "A music player, streamer and headless music server in one. Microgamma plays the collection you already own, on the machine you already use, and streams it to every device in the house — or to your phone outside it, with no router configuration.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Windows, macOS, Linux, Android",
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
              ▸ Download
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
                "Install it, point it at your music folder, press play. No cloud to upload to, no setup wizard to sit through — just your collection, on your machine.",
              ],
              [
                "📱",
                "The Streamer",
                "Leave it running on the box wired to your amplifier and drive it from your phone. Same library, same player, whichever device you pick up.",
              ],
              [
                "🖥️",
                "The Server",
                "Run it headless on a NAS or a spare machine. Everyone at home connects — and you can reach it from outside without touching a router.",
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
          <p class="text-accent-300 text-lg mt-14 max-w-2xl mx-auto leading-relaxed">
            No streaming tab, no web radio, no podcast section. Microgamma plays
            the collection you own and nothing else — which is exactly why it
            stays fast and stays out of the way.
          </p>
          <p class="text-cyber-300 font-head tracking-wide text-lg md:text-xl mt-6">
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
                  "No ads, no tracking, no data harvesting",
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
            Twenty years from now it still plays — no licence check, no renewal,
            no permission to ask for.
          </p>
        </div>
      </section>

      {/* ====================== KEY FEATURES ====================== */}
      <KeyFeatures />

      {/* ====================== AUTO-QUEUE ======================= */}
      <section
        id="auto-queue"
        class="relative bg-[#08030f] py-24 px-4 overflow-hidden scroll-mt-24"
      >
        <div
          class="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[24rem] rounded-full bg-primary-500/15 blur-3xl"
          aria-hidden="true"
        >
        </div>
        <div
          class="pointer-events-none absolute -bottom-24 right-0 w-[28rem] h-[20rem] rounded-full bg-cyber/10 blur-3xl"
          aria-hidden="true"
        >
        </div>

        <div class="container mx-auto max-w-6xl relative">
          <div class="text-center mb-12">
            <Kicker class="justify-center mb-4" label="[ 04 ] // AUTO_QUEUE" />
            <h2 class="font-head text-4xl md:text-6xl mb-6 text-white leading-tight">
              Hear the album <span class="gradient-text">you just added.</span>
            </h2>
            <p class="text-accent-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Add a new album and Auto-Queue shuffles it into what you're
              already listening to. The no-repeat window means you hear each
              song once before anything repeats. No same ten songs on loop.
            </p>
          </div>

          <div class="feature-billboard rounded-sm p-6 md:p-12">
            <p class="font-mono-tech text-xs uppercase tracking-[0.28em] text-cyber mb-8">
              A weighted roll, then a truly random song
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                [
                  "01",
                  "You set the mix",
                  "Liked songs, recently added, and the whole library each have a weight. Turn one up and it feeds the queue more often. Set it to zero and that source stays out.",
                ],
                [
                  "02",
                  "Random inside the source",
                  "The weights only choose which pile to draw from. Inside that pile, every song has the same chance.",
                ],
                [
                  "03",
                  "Dislikes stay gone",
                  "A song you dislike never comes back into the mix.",
                ],
                [
                  "04",
                  "Always a few ahead",
                  "The queue stays a few songs deep, and draws the next one as you listen.",
                ],
              ].map(([n, title, body]) => (
                <div class="flex gap-4">
                  <span class="font-mono-tech text-cyber text-sm tracking-widest pt-1">
                    {n}
                  </span>
                  <div>
                    <h3 class="font-head text-lg text-white mb-2">{title}</h3>
                    <p class="text-accent-300 text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/docs/auto-queue"
              class="btn-ghost mt-10 px-6 py-3 rounded-sm text-xs"
            >
              How the sliders work
            </a>

            <div class="mt-10 pt-8 border-t border-cyber/25">
              <h3 class="font-head text-xl text-primary-400 mb-3">
                Stations — the same queue, with a guide
              </h3>
              <p class="text-accent-300 leading-relaxed max-w-3xl">
                Stations are the AI-guided mode of Auto-Queue. Hit the wand on
                whatever's playing, or start a station from any song, and
                Microgamma keeps the queue filled from your own library. Pick a
                preset or give it a theme in plain words — “same era”, “disco
                only”, anything you can say — and it steers every pick. A theme
                you type needs your own{" "}
                <a
                  href="/docs/deepseek-token"
                  class="text-cyber hover:text-cyber-300 underline decoration-cyber/40 underline-offset-4"
                >
                  DeepSeek key
                </a>
                . The AI needs Premium, or that key, and it remembers what you
                like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== DEPLOY ======================== */}
      <section class="relative bg-[#08030f] py-24 px-4 grid-bg">
        <div class="container mx-auto max-w-5xl text-center">
          <Kicker class="justify-center mb-4" label="[ 05 ] // WHAT_IT_COSTS" />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            Basic Features, <span class="gradient-text">Always</span>
          </h2>
          <p class="text-accent-300 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
            The basic features work on hardware you run yourself, and they keep
            working. A small paid option only adds convenience — for example, us
            handling the hosting.
          </p>
          <p class="text-sun text-sm font-mono-tech uppercase tracking-widest mb-14">
            ⚡ You run the basics. Hosting is the part you can hand to us
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="hud-card rounded-sm p-8">
              <h3 class="font-head text-xl mb-4 text-primary-400 flex items-center gap-3">
                <span class="text-2xl">🎧</span> You Run It
              </h3>
              <p class="text-accent-300 mb-6">
                Install it and use the basic features. Nothing to bring but the
                music you already have.
              </p>
              <ul class="space-y-3 text-accent-300">
                {[
                  [
                    "The basics",
                    "playback and your library, on hardware you run",
                  ],
                  [
                    "Your disk",
                    "your library stays on the machine you install it on",
                  ],
                  ["Your network", "play it on every device in the house"],
                  [
                    "Beyond the house",
                    "reach it from outside with premium relays, or servers you supply",
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
                Point it at your folder and press play.
              </p>
            </div>

            <div class="hud-card rounded-sm p-8">
              <h3 class="font-head text-xl mb-4 text-cyber flex items-center gap-3">
                <span class="text-2xl">🗺️</span> When You'd Rather Not
              </h3>
              <p class="text-accent-300 mb-6">
                A paid option only adds convenience. The basic features keep
                working on hardware you run.
              </p>
              <ul class="space-y-3 text-accent-300">
                {[
                  [
                    "Run it yourself",
                    "your hardware, your API keys — the basic features",
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
          <Kicker class="justify-center mb-4" label="[ 06 ] // JACK_IN" />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            Point It at <span class="gradient-text">Your Folder</span>
          </h2>
          <p class="text-accent-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Microgamma is in beta and moving quickly. It's already good for
            daily listening — download it, open your collection, and see.
          </p>
          <a href="/downloads" class="btn-neon px-10 py-4 rounded-sm text-sm">
            ▸ Download
          </a>
        </div>
      </section>

      {/* ==================== WHAT COMES NEXT ==================== */}
      <section class="relative bg-[#08030f] py-24 px-4 overflow-hidden">
        <div class="container mx-auto max-w-3xl text-center">
          <Kicker
            class="justify-center mb-4"
            label="[ 07 ] // WHAT_COMES_NEXT"
          />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            What Comes <span class="gradient-text">Next</span>
          </h2>
          <p class="text-accent-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Neither of these is built yet. It's where we're headed.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              [
                "☁️",
                "Hosted Instance",
                "Would rather not run it yourself? We'll run Microgamma for you.",
              ],
              [
                "👥",
                "Family & Friends",
                "Separate profiles for a household sharing one library.",
              ],
            ].map(([icon, title, body]) => (
              <div class="hud-card rounded-sm p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-2xl">{icon}</span>
                  <span class="text-[10px] font-mono-tech uppercase tracking-widest rounded-sm px-2 py-0.5 border text-sun border-sun/40">
                    Planned
                  </span>
                </div>
                <h3 class="font-head text-lg mb-2 text-primary-400">
                  {title}
                </h3>
                <p class="text-accent-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});
