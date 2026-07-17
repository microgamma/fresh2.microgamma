import DocPage from "../../components/DocPage.tsx";
import CodeBlock from "../../islands/CodeBlock.tsx";

export default function HeadlessPage() {
  return (
    <DocPage slug="headless">
      <p>
        Microgamma can run without a graphical window — ideal for a home server,
        a NAS, or a Raspberry Pi. In headless mode the app runs hidden but its
        streaming servers stay up, so you can still reach your library from any
        device. You handle setup, login, and scanning from the command line —
        every command is listed in the{" "}
        <a href="/docs/cli-reference">
          CLI Reference
        </a>.
      </p>

      <h2>Two executables</h2>
      <p>
        Microgamma ships as two programs that live side by side:
      </p>
      <ul>
        <li>
          <code>Microgamma</code> — the app itself. Launch it with{" "}
          <code>--headless</code>{" "}
          to run without a window. It takes no other options.
        </li>
        <li>
          <code>mg</code>{" "}
          — the command-line tool. Everything else — logging in, setting the
          device name and music folder, and scanning your library — happens
          through <code>mg</code>.
        </li>
      </ul>

      <h2>1. First-run setup</h2>
      <p>
        The quickest path is the interactive setup, which walks through device
        name, music folder, login, and an initial scan in one go:
      </p>
      <CodeBlock code={`mg setup`} />
      <p>
        Prefer to do it step by step? The individual commands are below.
      </p>

      <h3>Log in</h3>
      <CodeBlock code={`mg login`} />
      <p>
        This starts a device-code login: it prints a URL and a short code. Open
        the URL in any browser, enter the code, and approve. The access token is
        saved to your config directory and reused on every launch.{" "}
        <code>mg logout</code> removes it.
      </p>

      <h3>Configure</h3>
      <CodeBlock
        code={`mg config --device-name "Living Room" --music-path /home/user/Music`}
      />
      <p>
        The device name is how this machine shows up when you connect from
        another device; the music path is the folder Microgamma reads your music
        from. Short flags <code>-n</code> and <code>-m</code> work too. Run{" "}
        <code>mg config</code>{" "}
        with no options to print the current device name, device ID, and music
        path.
      </p>

      <h3>Scan your library</h3>
      <CodeBlock code={`mg scan`} />
      <p>
        Scans the configured music folder into the library. Pass a path to scan
        somewhere else, or <code>--reset</code> (<code>-r</code>){" "}
        to rebuild the database from scratch. While the app is running it also
        watches the folder and picks up added or removed tracks automatically (
        {" "}
        <code>mp3</code>, <code>flac</code>, <code>ogg</code>,{" "}
        <code>wav</code>).
      </p>

      <h2>2. Run headless</h2>
      <CodeBlock code={`Microgamma --headless`} />
      <p>
        Same application, window hidden — the streaming servers start as usual.
        On Linux (and inside containers) Chromium still needs a display even
        when the window is hidden, so run it under a virtual framebuffer and
        disable the sandbox:
      </p>
      <CodeBlock code={`xvfb-run -a Microgamma --no-sandbox --headless`} />
      <p>
        On a server without a GPU, also pass{" "}
        <code>--disable-gpu --disable-dev-shm-usage</code>{" "}
        to avoid a Chromium GPU-process crash. (The Docker image already applies
        these for you.)
      </p>
      <p>
        Leave it running under whatever supervisor you like — a{" "}
        <code>systemd</code> service,{" "}
        <code>tmux</code>, or a container. For the container route, see the{" "}
        <a href="/docs/docker">Docker</a> guide.
      </p>

      <h2>3. Reach it from anywhere</h2>
      <p>
        Open{" "}
        <a href="https://play.microgamma.io" target="_blank" rel="noopener">
          play.microgamma.io
        </a>{" "}
        and log in with the same account. Your headless device appears in the
        list, and from there you can remote-control it or stream to the device
        you're on. Connections are brokered through Microgamma's signaling
        service, so this works across networks without port-forwarding or
        opening ports on your router.
      </p>

      <h2>Where configuration lives</h2>
      <p>
        By default everything is stored in <code>~/.microgamma</code>{" "}
        — the device config, settings, and your auth token, each as a small JSON
        file. Point Microgamma somewhere else with the <code>MG_BASE_PATH</code>
        {" "}
        environment variable:
      </p>
      <CodeBlock code={`MG_BASE_PATH=/srv/microgamma mg config`} />
      <p>
        An absolute path is used as-is; a relative value is treated as a folder
        name under your home directory. Set the same value for both{" "}
        <code>mg</code> and <code>Microgamma</code>{" "}
        so they share one configuration.
      </p>

      <h2>Ports</h2>
      <p>
        Headless Microgamma listens on <code>3333</code>{" "}
        (the song file server). On a machine behind a home router you generally
        don't need to open it — peer and remote access are brokered by the
        signaling service over WebRTC, with no fixed inbound port — but keep{" "}
        <code>3333</code> free if you run other services on the same host.
      </p>
    </DocPage>
  );
}
