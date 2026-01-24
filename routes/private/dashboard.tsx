import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";

export default define.page(function DashboardPage(ctx) {
  const user = ctx.state.user;
  console.log({ user });

  return (
    <>
      <Head>
        <title>Subscription Dashboard - Microgamma</title>
        <meta
          name="description"
          content="Manage your Microgamma subscription, view premium features, and upgrade your account."
        />
      </Head>
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto">
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
              <h1 class="text-2xl md-3xl font-bold text-primary-400 text-center mb-2">
                Subscription Dashboard
              </h1>
              <p class="text-gray-300 text-center">
                Manage your subscription and unlock premium features
              </p>
            </div>

            {/* Current Plan Status */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
              <h3 class="text-xl font-semibold text-primary-400 mb-6 pb-4 border-b border-primary-400/20">
                Current Plan
              </h3>
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-lg font-medium text-white mb-1">Free Tier</h4>
                  <p class="text-gray-300 text-sm">Basic features included</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-900/50 text-primary-300 border border-primary-400/30">
                  Active
                </span>
              </div>
            </div>

            {/* Premium Features */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
              <h3 class="text-xl font-semibold text-primary-400 mb-6 pb-4 border-b border-primary-400/20">
                Premium Features
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 p-6 rounded-lg">
                  <h4 class="text-lg font-semibold text-primary-300 mb-3">
                    🤖 AI-Powered Discovery
                  </h4>
                  <p class="text-gray-300 text-sm mb-4">
                    Smart recommendations and metadata enrichment using your own
                    API keys.
                  </p>
                  <button
                    type="button"
                    class="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-400 transition"
                  >
                    Upgrade to Premium
                  </button>
                </div>
                <div class="bg-gray-800/50 p-6 rounded-lg">
                  <h4 class="text-lg font-semibold text-primary-300 mb-3">
                    🖥️ Self-Hosted Freedom
                  </h4>
                  <p class="text-gray-300 text-sm mb-4">
                    Run your own Microgamma server with complete control over
                    your data.
                  </p>
                  <button
                    type="button"
                    class="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-400 transition"
                  >
                    Upgrade to Premium
                  </button>
                </div>
                <div class="bg-gray-800/50 p-6 rounded-lg">
                  <h4 class="text-lg font-semibold text-primary-300 mb-3">
                    📱 Multi-Device Sync
                  </h4>
                  <p class="text-gray-300 text-sm mb-4">
                    Seamless streaming across all your devices with premium
                    sync.
                  </p>
                  <button
                    type="button"
                    class="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-400 transition"
                  >
                    Upgrade to Premium
                  </button>
                </div>
                <div class="bg-gray-800/50 p-6 rounded-lg">
                  <h4 class="text-lg font-semibold text-primary-300 mb-3">
                    🌐 Cloud Storage Integration
                  </h4>
                  <p class="text-gray-300 text-sm mb-4">
                    Upload and manage your music in any cloud provider with
                    advanced tools.
                  </p>
                  <button
                    type="button"
                    class="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-400 transition"
                  >
                    Upgrade to Premium
                  </button>
                </div>
              </div>
            </div>

            {/* Plan Comparison */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
              <h3 class="text-xl font-semibold text-primary-400 mb-6 pb-4 border-b border-primary-400/20">
                Plan Comparison
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
                  <h4 class="text-lg font-semibold text-white mb-3">
                    Free Tier
                  </h4>
                  <ul class="text-gray-300 text-sm space-y-2 mb-4">
                    <li>✓ Basic music streaming</li>
                    <li>✓ Local music library</li>
                    <li>✓ Manual metadata editing</li>
                    <li>✗ AI features</li>
                    <li>✗ Self-hosted options</li>
                  </ul>
                  <p class="text-primary-300 font-medium">$0/month</p>
                </div>
                <div class="bg-primary-900/20 p-6 rounded-lg border border-primary-400/50">
                  <h4 class="text-lg font-semibold text-primary-300 mb-3">
                    Premium
                  </h4>
                  <ul class="text-gray-300 text-sm space-y-2 mb-4">
                    <li>✓ Everything in Free</li>
                    <li>✓ AI-powered discovery</li>
                    <li>✓ Self-hosted infrastructure</li>
                    <li>✓ Multi-device premium sync</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <p class="text-primary-300 font-medium">$9.99/month</p>
                </div>
              </div>
            </div>

            {/* Billing History */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
              <h3 class="text-xl font-semibold text-primary-400 mb-6 pb-4 border-b border-primary-400/20">
                Billing History
              </h3>
              <p class="text-gray-300 text-center">
                No billing history available
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
