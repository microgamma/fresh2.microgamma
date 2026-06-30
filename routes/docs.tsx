import { Head } from "fresh/runtime";

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Docs — Microgamma Headless & Docker</title>
        <meta
          name="description"
          content="Run Microgamma headless: CLI auth, Docker setup, and headless streaming configuration."
        />
      </Head>

      <section class="relative text-white min-h-screen overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="gradient-text">Headless Mode</span>
          </h1>
          <p class="text-xl text-gray-200 mb-12">
            Run Microgamma without a graphical desktop — on a server, in Docker,
            on a Raspberry Pi. The GUI is optional.
          </p>

          {/* Auth */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">1. Authenticate</h2>
            <p class="text-gray-300 mb-4">
              Run the login command once to associate this device with your Microgamma account.
              A browser window opens for the OAuth flow. The token is saved locally and reused
              on subsequent starts.
            </p>
            <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300">
              Microgamma --login
            </div>
          </section>

          {/* Start streaming */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">2. Start Streaming</h2>
            <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300 space-y-3">
              <div class="text-primary-400"># Minimal start</div>
              <div>Microgamma --token</div>
              <div class="text-gray-500 mt-4"># With persistent device config</div>
              <div>Microgamma --token --config --device-name="Living Room" --music-path="/data/music"</div>
            </div>
          </section>

          {/* Docker */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">3. Docker</h2>
            <p class="text-gray-300 mb-4">
              Run Microgamma in a container. Mount your music folder, pass your token,
              and connect from any device on the network.
            </p>
            <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300 space-y-3">
              <div class="text-gray-500"># Login to ECR</div>
              <div>aws ecr get-login-password --region eu-west-2 | \</div>
              <div>  docker login --username AWS --password-stdin 588144900153.dkr.ecr.eu-west-2.amazonaws.com</div>
              <div class="text-gray-500 mt-4"># Pull and run (pick your architecture)</div>
              <div>docker run -d \</div>
              <div>  --name microgamma \</div>
              <div>  -v /path/to/music:/data/music \</div>
              <div>  -e MICROGAMMA_TOKEN=your-token \</div>
              <div>  -e DEVICE_NAME="Home Server" \</div>
              <div>  588144900153.dkr.ecr.eu-west-2.amazonaws.com/microgamma-desktop:latest-x64</div>
              <div class="text-gray-500 mt-4"># Raspberry Pi / ARM</div>
              <div>  588144900153.dkr.ecr.eu-west-2.amazonaws.com/microgamma-desktop:latest-arm64</div>
            </div>
          </section>

          {/* CLI Reference */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">CLI Reference</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-gray-300">
                <thead>
                  <tr class="border-b border-primary-400/20 text-left">
                    <th class="py-2 pr-4 text-primary-300">Flag</th>
                    <th class="py-2 text-primary-300">Description</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-700/50">
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">--login</td>
                    <td class="py-2">Open browser for OAuth device authorization. Saves token locally.</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">--token</td>
                    <td class="py-2">Read saved token from local storage. Skips login if already authenticated.</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">--logout</td>
                    <td class="py-2">Clear saved token.</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">--config</td>
                    <td class="py-2">Save device configuration (name, music path) to local storage.</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">--device-name</td>
                    <td class="py-2">Set a human-readable name for this device. Appears in the peer list.</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">--music-path</td>
                    <td class="py-2">Absolute path to your music folder.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-400 text-sm mt-4">
              You can also set <code class="bg-gray-800 text-primary-300 px-1 rounded">MICROGAMMA_TOKEN</code> as an
              environment variable to skip the <code class="bg-gray-800 text-primary-300 px-1 rounded">--token</code> flag.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
