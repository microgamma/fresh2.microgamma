import DocPage from "../../components/DocPage.tsx";

export default function GettingStartedPage() {
  return (
    <DocPage slug="getting-started">
      <p>
        Microgamma is first and foremost a music player you own. This guide
        walks through the basic setup: install the desktop app, play your local
        library, then reach that same library from anywhere through{" "}
        <a href="https://play.microgamma.io" target="_blank" rel="noopener">
          play.microgamma.io
        </a>.
      </p>

      <h2>1. Download &amp; launch</h2>
      <p>
        Grab the build for your operating system from the{" "}
        <a href="/downloads">Downloads</a>{" "}
        page — macOS (Apple Silicon), Windows, or Linux (x64 / arm64). Unzip it
        and launch Microgamma like any other desktop app.
      </p>

      <h2>2. Log in</h2>
      <p>
        On first launch, Microgamma asks you to log in. It shows a URL and a
        short code — open the URL in any browser, enter the code, and approve.
        That links this desktop instance to your account, which is how your
        devices find each other later.
      </p>

      <h2>3. Configure</h2>
      <p>
        Two things to set, once:
      </p>
      <ul>
        <li>
          <strong>Device name</strong> — e.g.{" "}
          <code>Living Room</code>. This is the label you'll pick when you
          connect from another device.
        </li>
        <li>
          <strong>Music folder</strong>{" "}
          — point Microgamma at the folder where your music lives. It scans the
          folder and builds your library.
        </li>
      </ul>
      <p>
        Both are remembered, so every future launch comes straight up ready to
        play.
      </p>

      <h2>4. Play locally</h2>
      <p>
        Your library now appears in the app. Browse, search, build playlists,
        and play — it all runs on your own machine, no internet connection
        required. At this point Microgamma is a complete local music player.
      </p>

      <h2>5. Play from anywhere</h2>
      <p>
        The same desktop instance doubles as your personal streaming server.
        Open{" "}
        <a href="https://play.microgamma.io" target="_blank" rel="noopener">
          play.microgamma.io
        </a>{" "}
        on your phone, laptop, or any browser and log in with the same account.
        Your desktop device shows up in the list, and from there you can:
      </p>
      <ul>
        <li>
          <strong>Remote-control the desktop</strong>{" "}
          — steer playback on the machine at home, like a remote for your home
          stereo.
        </li>
        <li>
          <strong>Stream to the current device</strong>{" "}
          — pull the audio down to whatever you're holding and listen on the go.
        </li>
      </ul>
      <p>
        While Microgamma is in beta, we provide free TURN/STUN relays so remote
        streaming works even through home routers and firewalls — no network
        setup on your end.
      </p>

      <hr />
      <p>
        Want to run Microgamma without a GUI — on a server, NAS, or Raspberry
        Pi? See <a href="/docs/headless">Headless Mode</a>{" "}
        for the full command-line workflow, or the{" "}
        <a href="/docs/docker">Docker</a> guide to run it in a container.
      </p>
    </DocPage>
  );
}
