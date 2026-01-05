import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import KeyFeatures from "../islands/KeyFeatures.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);
  return (
    <>
      <Head>
        <title>Microgamma - Brave New Audio Player</title>
      </Head>

        {/* Hero Section */}
        <section class="relative text-white min-h-screen flex items-center justify-center overflow-hidden vaporwave-bg">
          <div class="container mx-auto text-center z-50">
            <h1 class="text-6xl font-bold mb-4">Microgamma</h1>
            <p class="text-xl mb-4 text-primary-300 gradient-text">Own Your Music. Own Your Sound.</p>
            <p class="text-lg mb-8 text-gray-300">The underground music player that puts you in charge - no subscriptions, no compromises, no platform dictators.</p>
            <a
              href="/downloads"
              class="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition inline-block btn-glow"
            >
              Join the Underground Music Revolution
            </a>
          </div>
        </section>
        {/* The Music Ownership Crisis */}
        <section class="bg-black text-white py-20 px-4 grid-bg">
          <div class="container mx-auto text-center max-w-4xl">
            <h2 class="text-4xl font-bold mb-8 text-primary-400">
              The Music Ownership Crisis
            </h2>
            <div class="space-y-8">
              <div class="text-center">
                <p class="text-xl mb-6">
                  Ever wished you could set your own album covers instead of letting platforms decide what your music looks like?
                </p>
                <p class="text-lg text-gray-300 mb-6">
                  Frustrated that after paying for music subscriptions year after year, when you decide to quit you're left with absolutely nothing - not even the list of songs you loved?
                </p>
                <p class="text-lg text-gray-300">
                  Tired of platforms controlling your music experience and deciding what you can and cannot do with your collection?
                </p>
              </div>
              <div class="border-t border-primary-400/20 pt-8">
                <p class="text-xl text-primary-300">
                  We're the secret club for music lovers who demand ownership. Like curating your vinyl collection, but with modern streaming power.
                </p>
              </div>
            </div>
          </div>
        </section>
        <KeyFeatures />

        {/* Join the Revolution */}
        <section class="bg-gray-800 text-white py-20 px-4 grid-bg">
          <div class="container mx-auto text-center max-w-5xl">
            <h2 class="text-4xl font-bold mb-8 text-primary-400">Join the Revolution</h2>
            <div class="mb-12">
              <p class="text-xl mb-6">
                Microgamma is evolving rapidly - we're building the future of self-owned music streaming.
              </p>
              <p class="text-lg text-gray-300 mb-6">
                Current features work for daily use, but we're just getting started. Be part of the movement that changes how the world thinks about music ownership.
              </p>
              <p class="text-lg text-primary-300">
                Part of the music ownership resistance.
              </p>
            </div>
            {/* What's Next */}
            <div class="mt-16 pt-12 border-t border-primary-400/20">
              <h3 class="text-2xl font-bold mb-6 text-primary-400">What's Next</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="fade-in p-6 card-glow rounded-lg">
                  <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                    🖥️ Infrastructure Freedom
                  </h3>
                  <p>
                    Run the Microgamma streamer on your own hardware for complete control, or let us handle the infrastructure for you.
                  </p>
                </div>
                <div class="fade-in p-6 card-glow rounded-lg">
                  <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                    🤖 Self-Hosted Intelligence
                  </h3>
                  <p>
                    Run AI features with your own API keys for complete control, or subscribe to our premium AI service.
                  </p>
                </div>
                <div class="fade-in p-6 card-glow rounded-lg">
                  <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                    🌐 Cloud Liberation
                  </h3>
                  <p>
                    Upload to any storage provider and maintain ownership. Host remotely with us or run it yourself.
                  </p>
                </div>
                <div class="fade-in p-6 card-glow rounded-lg">
                  <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                    🔄 Adaptive Discovery
                  </h3>
                  <p>
                    Smarter queues that learn your taste. Self-hosted algorithms or our premium recommendation engine.
                  </p>
                </div>
                <div class="fade-in p-6 card-glow rounded-lg">
                  <h3 class="text-2xl font-semibold mb-4 text-primary-400">
                    👥 Family & Friends
                  </h3>
                  <p>
                    Multi-profile support for shared households. Host your own family server or use our premium multi-user service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        </>
  );
});
