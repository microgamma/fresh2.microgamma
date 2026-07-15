import DocPage from "../../components/DocPage.tsx";

export default function DockerPage() {
  return (
    <DocPage slug="docker">
      <p>
        Microgamma ships as a public, multi-architecture Docker image on GitHub
        Container Registry, so you can run it headless in a container on any
        host. Inside the container, prefix any CLI command with{" "}
        <code>mg</code>; running with no command launches the app headless.
      </p>
      <p>
        Keep your configuration in a named volume so it survives restarts, and
        mount your music library at <code>/music</code>.
      </p>

      <div class="not-prose flex items-start gap-3 rounded-sm border border-sun/40 bg-sun/10 px-4 py-3 my-6 text-sm text-sun font-mono-tech">
        <span aria-hidden="true">⚠</span>
        <span>
          The image goes live after the next release, once the GHCR package is
          switched to public. Until then these commands will return a 404.
        </span>
      </div>

      <h2>1. Pull the image</h2>
      <p>
        The image is public, so no registry login is needed. Pull the plain{" "}
        <code>:latest</code>{" "}
        tag and Docker automatically selects the right build for your
        architecture (Intel or Apple Silicon / ARM):
      </p>
      <pre><code>{`docker pull ghcr.io/microgamma/microgamma-desktop:latest`}</code></pre>
      <p>
        Pin a specific version with a versioned tag instead:
      </p>
      <pre><code>{`docker pull ghcr.io/microgamma/microgamma-desktop:v2.94.3`}</code></pre>
      <p>
        Per-architecture tags (<code>latest-x64</code>,{" "}
        <code>latest-arm64</code>,{" "}
        <code>v2.94.3-x64</code>, …) also exist if you need to pin a specific
        build, but the plain tag is what most people want.
      </p>

      <h2>2. First-run setup</h2>
      <p>
        Run the interactive wizard once — device name, music location, login,
        and scan. It needs an interactive terminal, so pass <code>-it</code>:
      </p>
      <pre><code>{`docker run -it --rm \\
  -v mg-config:/home/node/.microgamma \\
  -v /path/to/music:/music \\
  ghcr.io/microgamma/microgamma-desktop:latest \\
  mg setup`}</code></pre>

      <h2>3. Run headless</h2>
      <p>
        Start the app in the background, reusing the <code>mg-config</code>{" "}
        volume from setup:
      </p>
      <pre><code>{`docker run -d \\
  --name microgamma \\
  -v mg-config:/home/node/.microgamma \\
  -v /path/to/music:/music \\
  ghcr.io/microgamma/microgamma-desktop:latest`}</code></pre>

      <h2>Running other commands</h2>
      <p>
        You can run any <code>mg</code>{" "}
        command the same way. For example, to rebuild the library index:
      </p>
      <pre><code>{`docker run --rm \\
  -v mg-config:/home/node/.microgamma \\
  -v /path/to/music:/music \\
  ghcr.io/microgamma/microgamma-desktop:latest \\
  mg scan --reset`}</code></pre>

      <h2>Ports</h2>
      <p>
        The image doesn't publish any ports, and it usually doesn't need to —
        remote access through{" "}
        <a href="https://play.microgamma.io" target="_blank" rel="noopener">
          play.microgamma.io
        </a>{" "}
        is brokered by Microgamma's signaling service. If you want to reach the
        container directly on your LAN, publish the song server on{" "}
        <code>3333</code> and peer connections on <code>9998</code>{" "}
        yourself (<code>-p 3333:3333 -p 9998:9998</code>).
      </p>
    </DocPage>
  );
}
