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
          content="Stream your entire music library with full ownership. Microgamma is the self-hosted music player that keeps your collection yours — free to run on your own hardware."
        />
        <meta
          name="keywords"
          content="music player, music streaming, music ownership, self-hosted music, audiophile, music library, digital music"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Microgamma",
            "description":
              "A modern, self-hosted music player for managing digital music collections with complete user ownership and premium streaming features.",
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
          <p class="max-w-xl mx-auto text-accent-300 text-base md:text-lg mb-10 leading-relaxed [text-shadow:0_2px_16px_rgba(8,3,15,0.95)]">
            The self-hosted music player that keeps your collection yours. Free
            forever on your own hardware — or let us host the heavy lifting.
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
              What's Microgamma?
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
          <h2 class="font-head text-3xl md:text-5xl mb-14 text-white">
            What is <span class="gradient-text">Microgamma</span>?
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              ["🎵", "A music player you truly own."],
              ["🏠", "Runs on your own hardware."],
              ["📱", "Streams to any device you have."],
              ["🎨", "Customize everything — covers, metadata, playlists."],
              ["🌐", "Remote control from anywhere on Earth."],
              ["💰", "Free forever on your own hardware."],
            ].map(([icon, text]) => (
              <div class="hud-card rounded-sm p-5 flex items-center gap-4">
                <span class="text-2xl">{icon}</span>
                <span class="text-accent-300">{text}</span>
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
              label="[ 02 ] // THE REBELLION"
            />
            <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
              Ownership vs. <span class="text-warn">The Rental</span>
            </h2>
            <p class="text-accent-300 text-lg max-w-3xl mx-auto leading-relaxed">
              With streaming services, your collection only exists while you
              keep paying. Cancel, and years of curation vanish overnight. What
              if every dollar you spent on music built something permanent
              instead?
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Streaming */}
            <div class="hud-card rounded-sm p-8 bg-warn-700/10">
              <h3 class="font-head text-xl mb-6 text-warn flex items-center gap-3">
                <span class="text-2xl">🎭</span> Streaming Subscriptions
              </h3>
              <ul class="space-y-4 text-accent-300">
                {[
                  "Monthly fees for temporary access",
                  "Collection disappears when you cancel",
                  "The platform decides your experience",
                  "No lasting value from your spending",
                  "Renting access you never truly hold",
                ].map((t) => (
                  <li class="flex items-start gap-3">
                    <span class="text-warn font-mono-tech mt-0.5">✗</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Microgamma */}
            <div class="hud-card rounded-sm p-8 bg-cyber-500/5">
              <h3 class="font-head text-xl mb-6 text-cyber flex items-center gap-3">
                <span class="text-2xl">🎵</span> Microgamma Ownership
              </h3>
              <ul class="space-y-4 text-accent-300">
                {[
                  "Buy albums once, keep them forever",
                  "Build a permanent, portable library",
                  "Customize everything, your way",
                  "Every purchase invests in your taste",
                  "True ownership with modern streaming power",
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
            Start building a music collection that grows with you — not one that
            expires with your credit card.
          </p>
        </div>
      </section>

      {/* ====================== KEY FEATURES ====================== */}
      <KeyFeatures />

      {/* ======================== DEPLOY ======================== */}
      <section class="relative bg-[#08030f] py-24 px-4 grid-bg">
        <div class="container mx-auto max-w-5xl text-center">
          <Kicker class="justify-center mb-4" label="[ 04 ] // DEPLOYMENT" />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            Your Infrastructure, <span class="gradient-text">Your Rules</span>
          </h2>
          <p class="text-accent-300 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
            The player is free, forever. Bring your own infrastructure —
            hardware, storage, relays — and the whole thing stays free. Don't
            want to run it yourself? We host the pieces you need for a fraction
            of what streaming services charge.
          </p>
          <p class="text-sun text-sm font-mono-tech uppercase tracking-widest mb-14">
            ⚡ Beta: free TURN/STUN relays for remote streaming while we build
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="hud-card rounded-sm p-8">
              <h3 class="font-head text-xl mb-4 text-primary-400 flex items-center gap-3">
                <span class="text-2xl">🏠</span> Bring Your Own
              </h3>
              <p class="text-accent-300 mb-6">
                Run Microgamma entirely on hardware you already own — completely
                free, no strings attached.
              </p>
              <ul class="space-y-3 text-accent-300">
                {[
                  ["Your hardware", "any computer, NAS, or server you own"],
                  ["Your AI keys", "bring your own OpenAI/Anthropic key"],
                  [
                    "Your relays",
                    "self-host TURN/STUN, or use ours free in beta",
                  ],
                  ["Your storage", "any folder, drive, or NAS you connect"],
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
                Pay nothing. Own everything.
              </p>
            </div>

            <div class="hud-card rounded-sm p-8">
              <h3 class="font-head text-xl mb-4 text-cyber flex items-center gap-3">
                <span class="text-2xl">☁️</span> We Handle It
              </h3>
              <p class="text-accent-300 mb-6">
                Let us host your Microgamma server — for a fraction of what
                you'd pay a streaming service.
              </p>
              <ul class="space-y-3 text-accent-300">
                {[
                  ["Hosted server", "we run it in our cloud, you just stream"],
                  ["AI included", "smart discovery, no keys to bring"],
                  [
                    "Global relay",
                    "stream from anywhere, through any firewall",
                  ],
                  ["Storage included", "your library lives in our cloud"],
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
                A fraction of Spotify or Apple Music.
              </p>
            </div>
          </div>

          <p class="text-accent-300 mt-12 max-w-2xl mx-auto">
            Mix and match however you like. Start free, add services when you
            need them. No lock-in. No surprise fees.
          </p>
        </div>
      </section>

      {/* ====================== GET STARTED ====================== */}
      <section class="relative bg-accent-900 py-24 px-4 overflow-hidden">
        <div class="container mx-auto max-w-5xl text-center">
          <Kicker class="justify-center mb-4" label="[ 05 ] // JACK_IN" />
          <h2 class="font-head text-3xl md:text-5xl mb-6 text-white">
            Ready to <span class="gradient-text">Get Started?</span>
          </h2>
          <p class="text-accent-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Microgamma is evolving fast. It's already great for daily listening,
            and there's much more on the way. Download it today and start
            building your permanent collection.
          </p>
          <a href="/downloads" class="btn-neon px-10 py-4 rounded-sm text-sm">
            ▸ Download Free
          </a>

          <div class="mt-20 pt-12 border-t border-primary-500/20">
            <Kicker
              class="justify-center mb-8"
              label="// INCOMING_TRANSMISSIONS"
            />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                [
                  "🖥️",
                  "Infrastructure Freedom",
                  "Run the streamer on your own hardware, or let us host it — your call.",
                ],
                [
                  "🤖",
                  "Smart Discovery",
                  "AI features with your own API keys for full privacy, or our premium service.",
                ],
                [
                  "🌐",
                  "Flexible Storage",
                  "Upload to any cloud provider and keep full ownership, or host it all yourself.",
                ],
                [
                  "🔄",
                  "Smart Queues",
                  "Playlists that learn what you love — self-hosted or our premium engine.",
                ],
                [
                  "👥",
                  "Family & Friends",
                  "Multi-profile support for shared households, self-run or premium.",
                ],
              ].map(([icon, title, body]) => (
                <div class="hud-card rounded-sm p-6">
                  <div class="text-2xl mb-3">{icon}</div>
                  <h3 class="font-head text-lg mb-2 text-primary-400">
                    {title}
                  </h3>
                  <p class="text-accent-300 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
              <div class="hud-card rounded-sm p-6 flex flex-col items-center justify-center text-center bg-sun/5">
                <span class="text-xs font-mono-tech uppercase tracking-widest text-sun">
                  status
                </span>
                <span class="font-head text-cyber text-lg mt-2">
                  More on the way
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
