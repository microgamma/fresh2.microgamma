import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import KeyFeatures from "../islands/KeyFeatures.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);
  return (
    <>
      <Head>
        <title>Microgamma - Your Music, Your Way</title>
        <meta
          name="description"
          content="Stream your entire music library with full ownership. Microgamma is the self-hosted music player that keeps your collection yours — no subscriptions, no compromises."
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
            "author": {
              "@type": "Organization",
              "name": "Microgamma",
            },
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section class="relative text-white min-h-screen flex items-center justify-center overflow-hidden vaporwave-bg">
        <div class="container mx-auto text-center z-50">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Microgamma</h1>
          <p class="text-lg md:text-xl mb-4 text-primary-300 gradient-text">
            Your Music. Your Way.
          </p>
          <p class="text-lg mb-8 text-gray-300">
            The self-hosted music player that keeps your collection
            yours — stream anywhere,  own it forever.
          </p>
          <a
            href="/downloads"
            class="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition inline-block btn-glow"
          >
            Download Free
          </a>
        </div>
      </section>

      {/* What is Microgamma? */}
      <section class="bg-gray-900 text-white py-20 px-4">
        <div class="container mx-auto text-center max-w-4xl">
          <h2 class="text-3xl font-bold mb-8 text-primary-400">
            What is Microgamma?
          </h2>
          <p class="text-xl mb-6">
            Microgamma is a modern music player built for people who love
            their music collection. Stream your library to any device,
            customize covers and metadata, and enjoy full remote control —
            all from your own hardware.
          </p>
          <p class="text-lg text-gray-300">
            Think of it as curating a prized vinyl library, but with the
            convenience of modern streaming — and the peace of mind that
            it's all yours.
          </p>
        </div>
      </section>

      {/* Why Ownership Matters */}
      <section class="bg-black text-white py-20 px-4 grid-bg">
        <div class="container mx-auto text-center max-w-4xl">
          <h2 class="text-4xl font-bold mb-8 text-primary-400">
            Why Ownership Matters
          </h2>
          <div class="space-y-8">
            <div class="text-center">
              <p class="text-xl mb-6">
                Have you ever wanted to set your own album covers, or keep
                your carefully curated playlists forever?
              </p>
              <p class="text-lg text-gray-300 mb-6">
                With streaming services, your collection only exists while
                you keep paying. Cancel a subscription, and years of
                curation vanish overnight.
              </p>
              <p class="text-lg text-gray-300">
                What if your music purchases built something permanent
                instead?
              </p>
              <p class="text-lg text-gray-300 mb-6">
                With Microgamma, every album you add is yours to keep,
                customize, and stream on your terms — no monthly fee
                required.
              </p>
            </div>
            <div class="border-t border-primary-400/20 pt-8">
              <p class="text-xl text-primary-300">
                Microgamma is for music lovers who want a permanent home
                for their collection. Like curating vinyl, but with modern
                streaming convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership vs Streaming */}
      <section class="bg-gray-900 text-white py-20 px-4 grid-bg">
        <div class="container mx-auto text-center max-w-5xl">
          <h2 class="text-4xl font-bold mb-8 text-primary-400">
            Build a Collection That Lasts
          </h2>
          <div class="space-y-8">
            <div class="text-center">
              <p class="text-xl mb-6">
                What if every dollar you spent on music built something permanent?
              </p>
              <p class="text-lg text-gray-300 mb-6">
                Streaming is convenient, but it's a rental. Over time, those monthly
                payments add up — and you don't keep anything when you stop.
              </p>
              <p class="text-lg text-gray-300 mb-6">
                With Microgamma, you invest in albums that stay with you. Music you
                can stream anywhere, customize freely.
              </p>
            </div>
            
            {/* Comparison Table */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div class="card-glow p-6 rounded-lg bg-red-900/20 border border-red-400/30">
                <h3 class="text-2xl font-semibold mb-4 text-red-400">
                  🎭 Streaming Subscriptions
                </h3>
                <ul class="text-left space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-red-400 mr-2">✗</span>
                    <span>Monthly fees for temporary access</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-2">✗</span>
                    <span>Collection disappears when you cancel</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-2">✗</span>
                    <span>Platform decides your experience</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-2">✗</span>
                    <span>No lasting value from your spending</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-2">✗</span>
                    <span>Renting access you never truly hold</span>
                  </li>
                </ul>
              </div>
              
              <div class="card-glow p-6 rounded-lg bg-green-900/20 border border-green-400/30">
                <h3 class="text-2xl font-semibold mb-4 text-green-400">
                  🎵 Microgamma Ownership
                </h3>
                <ul class="text-left space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-green-400 mr-2">✓</span>
                    <span>Buy albums once, keep them forever</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-2">✓</span>
                    <span>Build a permanent music library</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-2">✓</span>
                    <span>You customize your way</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-2">✓</span>
                    <span>Every purchase is an investment in your taste</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-2">✓</span>
                    <span>True ownership with modern streaming power</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="border-t border-primary-400/20 pt-8">
              <p class="text-xl text-primary-300">
                Start building a music collection that grows with you.
              </p>
              <p class="text-lg text-gray-300 mt-4">
                With Microgamma, every album you add becomes part of your permanent
                library. No subscriptions, no expiration dates — just music that's yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <KeyFeatures />

      {/* Philosophy - Coming Soon */}
      <section class="bg-black text-white py-20 px-4">
        <div class="container mx-auto text-center max-w-5xl">
          <h2 class="text-4xl font-bold mb-4 text-primary-400">
            The Microgamma Philosophy
          </h2>
          <div class="inline-block px-4 py-1 rounded-full bg-yellow-900/50 border border-yellow-400/30 text-yellow-300 text-sm font-medium mb-6">
            Coming Soon
          </div>
          <p class="text-xl mb-6 max-w-3xl mx-auto">
            Microgamma is free to use — forever. If you have the hardware,
            you have everything you need. If you'd rather not deal with
            infrastructure, we've got you covered for a fraction of what
            streaming services charge.
          </p>
          <p class="text-lg text-gray-400 mb-8">
            <span class="text-yellow-400">Beta update:</span> We're providing TURN/STUN
            servers for remote streaming completely free while in beta.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div class="card-glow p-8 rounded-lg bg-primary-900/20 border border-primary-400/30">
              <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                🏠 Bring Your Own
              </h3>
              <p class="text-gray-300 mb-6">
                Run Microgamma entirely on your own hardware — completely free,
                no strings attached.
              </p>
              <ul class="text-left space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="text-primary-400 mr-2">✓</span>
                  <span>
                    <strong>Your hardware</strong> — any computer, NAS, or
                    server you already own
                  </span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-400 mr-2">✓</span>
                  <span>
                    <strong>Your AI keys</strong> — bring your own
                    OpenAI/Anthropic API key for smart discovery
                  </span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-400 mr-2">✓</span>
                  <span>
                    <strong>Your TURN/STUN servers</strong> — or use ours free
                    while in beta
                  </span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-400 mr-2">✓</span>
                  <span>
                    <strong>Your storage</strong> — any folder, drive, or NAS
                    you connect
                  </span>
                </li>
              </ul>
              <p class="text-lg text-primary-300 mt-6 font-semibold">
                Pay nothing. Own everything.
              </p>
            </div>

            <div class="card-glow p-8 rounded-lg bg-green-900/20 border border-green-400/30">
              <h3 class="text-2xl font-semibold mb-4 text-green-400">
                ☁️ We Handle It
              </h3>
              <p class="text-gray-300 mb-6">
                Let us host your Microgamma server — for a fraction of what
                you'd pay a streaming service.
              </p>
              <ul class="text-left space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>Hosted server</strong> — we run Microgamma in our
                    cloud, you just stream
                  </span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>AI included</strong> — smart discovery without
                    bringing your own keys
                  </span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>Global TURN relay</strong> — stream from
                    anywhere, through any firewall
                  </span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">✓</span>
                  <span>
                    <strong>Storage included</strong> — your library lives in
                    our cloud
                  </span>
                </li>
              </ul>
              <p class="text-lg text-green-300 mt-6 font-semibold">
                A fraction of what Spotify or Apple Music costs.
              </p>
            </div>
          </div>

          <div class="border-t border-primary-400/20 pt-8 mt-12">
            <p class="text-xl text-primary-300">
              Mix and match however you like. Start free, add services when
              you need them.
            </p>
            <p class="text-lg text-gray-300 mt-4">
              No lock-in. No surprise fees. Your music, your infrastructure
              choices.
            </p>
          </div>
        </div>

      </section>

      {/* Get Started */}
      <section class="bg-gray-800 text-white py-20 px-4 grid-bg">
        <div class="container mx-auto text-center max-w-5xl">
          <h2 class="text-4xl font-bold mb-8 text-primary-400">
            Ready to Get Started?
          </h2>
          <div class="mb-12">
            <p class="text-xl mb-6">
              Microgamma is evolving fast — we're building the future of
              self-hosted music streaming.
            </p>
            <p class="text-lg text-gray-300 mb-6">
              It's already great for daily listening, and there's much more
              on the way. Download it today and start building your
              permanent collection.
            </p>
            <p class="text-lg text-primary-300">
              Your music deserves a permanent home.
            </p>
          </div>
          {/* Coming Soon */}
          <div class="mt-16 pt-12 border-t border-primary-400/20">
            <h3 class="text-2xl font-bold mb-6 text-primary-400">
              Coming Soon
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🖥️ Infrastructure Freedom
                </h3>
                <p>
                  Run the Microgamma streamer on your own hardware, or let us
                  handle the hosting — you choose what works for you.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🤖 Smart Discovery
                </h3>
                <p>
                  Use AI features with your own API keys for full privacy, or
                  subscribe to our premium discovery service.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🌐 Flexible Storage
                </h3>
                <p>
                  Upload your library to any cloud provider and keep full
                  ownership. Host with us or run everything yourself.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  🔄 Smart Queues
                </h3>
                <p>
                  Intelligent playlists that learn what you love. Self-hosted
                  algorithms or our premium recommendation engine.
                </p>
              </div>
              <div class="fade-in p-6 card-glow rounded-lg">
                <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                  👥 Family & Friends
                </h3>
                <p>
                  Multi-profile support for shared households. Run your own
                  family server or use our premium multi-user plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
