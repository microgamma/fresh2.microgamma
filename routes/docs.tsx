import { Head } from "fresh/runtime";

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Docs — Microgamma Headless & Docker</title>
        <meta
          name="description"
          content="Run Microgamma headless: the mg CLI (setup, login, scan), Docker setup, and headless streaming."
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

          <p class="text-gray-300 mb-12">
            There are two commands:{" "}
            <code class="bg-gray-800 text-primary-300 px-1 rounded">
              Microgamma
            </code>{" "}
            launches the app, and{" "}
            <code class="bg-gray-800 text-primary-300 px-1 rounded">mg</code>{" "}
            is the CLI you use to configure it — <code class="bg-gray-800 text-primary-300 px-1 rounded">mg setup</code>,{" "}
            <code class="bg-gray-800 text-primary-300 px-1 rounded">mg login</code>,{" "}
            <code class="bg-gray-800 text-primary-300 px-1 rounded">mg scan</code>, and more.
            Config is saved locally (in{" "}
            <code class="bg-gray-800 text-primary-300 px-1 rounded">
              ~/.microgamma
            </code>) and reused on every run.
          </p>

          {/* Setup */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">
              1. Set up
            </h2>
            <p class="text-gray-300 mb-4">
              Run the interactive wizard once. It asks for a device name and your
              music library location, logs you in, and scans your library into
              the database. Login uses the device-code flow: it prints a URL and
              code — open it on any device (phone, laptop) to authorize.
            </p>
            <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300">
              mg setup
            </div>
            <p class="text-gray-400 text-sm mt-4">
              Prefer to do it piecemeal? Run{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">
                mg login
              </code>,{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">
                mg config
              </code>{" "}
              and{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">
                mg scan
              </code>{" "}
              individually — see the reference below.
            </p>
          </section>

          {/* Run */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">
              2. Run headless
            </h2>
            <p class="text-gray-300 mb-4">
              Launch the app with no visible window. It reads the config and
              library you set up above and starts streaming to any device on your
              network.
            </p>
            <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300">
              Microgamma --headless
            </div>
          </section>

          {/* Docker */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">3. Docker</h2>
            <p class="text-gray-300 mb-4">
              In the container, prefix any CLI command with{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">mg</code>;
              running with no command launches the app headless. Keep your config
              in a named volume so it survives restarts, and mount your music at{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">/music</code>.
            </p>
            <div class="bg-gray-900/80 rounded-lg p-4 border border-primary-400/20 font-mono text-sm text-gray-300 space-y-3">
              <div class="text-gray-500"># Login to ECR</div>
              <div>aws ecr get-login-password --region eu-central-1 | \</div>
              <div>
                docker login --username AWS --password-stdin
                588144900153.dkr.ecr.eu-central-1.amazonaws.com
              </div>

              <div class="text-gray-500 mt-4">
                # First-run setup (interactive: device name, music, login, scan)
              </div>
              <div>docker run -it --rm \</div>
              <div>-v mg-config:/root/.microgamma \</div>
              <div>-v /path/to/music:/music \</div>
              <div>
                588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-x64
                {" "}mg setup
              </div>

              <div class="text-gray-500 mt-4">
                # Run headless (reuses the mg-config volume)
              </div>
              <div>docker run -d \</div>
              <div>--name microgamma \</div>
              <div>-v mg-config:/root/.microgamma \</div>
              <div>-v /path/to/music:/music \</div>
              <div>
                588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-x64
              </div>

              <div class="text-gray-500 mt-4"># Raspberry Pi / ARM</div>
              <div>
                588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-arm64
              </div>
            </div>
            <p class="text-gray-400 text-sm mt-4">
              Setup needs an interactive terminal (<code class="bg-gray-800 text-primary-300 px-1 rounded">-it</code>).
              You can re-run any command later the same way, e.g.{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">
                docker run --rm -v mg-config:/root/.microgamma … mg scan --reset
              </code>.
            </p>
          </section>

          {/* CLI Reference */}
          <section class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-primary-400/30 mb-8">
            <h2 class="text-2xl font-bold text-primary-300 mb-4">
              CLI Reference
            </h2>
            <p class="text-gray-300 mb-4">
              <code class="bg-gray-800 text-primary-300 px-1 rounded">mg</code>{" "}
              commands (run <code class="bg-gray-800 text-primary-300 px-1 rounded">mg --help</code>{" "}
              for full usage):
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-gray-300">
                <thead>
                  <tr class="border-b border-primary-400/20 text-left">
                    <th class="py-2 pr-4 text-primary-300">Command</th>
                    <th class="py-2 text-primary-300">Description</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-700/50">
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">
                      mg setup
                    </td>
                    <td class="py-2">
                      Interactive first-run setup: device name, music location,
                      login and library scan.
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">
                      mg login
                    </td>
                    <td class="py-2">
                      Log in via the device-code flow. Prints a URL to authorize
                      on any device; saves the token locally.
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">
                      mg logout
                    </td>
                    <td class="py-2">Remove the saved token.</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">
                      mg scan [path] [--reset]
                    </td>
                    <td class="py-2">
                      Scan the music library into the database. Defaults to the
                      configured path; <code class="bg-gray-800 text-primary-300 px-1 rounded">--reset</code>{" "}
                      rebuilds from scratch.
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">
                      mg config
                    </td>
                    <td class="py-2">
                      Show config, or set it with{" "}
                      <code class="bg-gray-800 text-primary-300 px-1 rounded">
                        --device-name
                      </code>{" "}
                      /{" "}
                      <code class="bg-gray-800 text-primary-300 px-1 rounded">
                        --music-path
                      </code>.
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-4 font-mono text-primary-400 whitespace-nowrap">
                      Microgamma [--headless]
                    </td>
                    <td class="py-2">
                      Launch the app. <code class="bg-gray-800 text-primary-300 px-1 rounded">--headless</code>{" "}
                      runs it without a visible window.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-400 text-sm mt-4">
              Config lives in{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">
                ~/.microgamma
              </code>{" "}
              (override with the{" "}
              <code class="bg-gray-800 text-primary-300 px-1 rounded">
                MG_BASE_PATH
              </code>{" "}
              environment variable). In Docker, mount a volume there to keep it
              across runs.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
