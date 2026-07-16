import DocPage from "../../components/DocPage.tsx";
import CodeBlock from "../../islands/CodeBlock.tsx";

export default function CliReferencePage() {
  return (
    <DocPage slug="cli-reference">
      <p>
        Microgamma ships two executables: the <code>Microgamma</code>{" "}
        desktop app, and{" "}
        <code>mg</code>, a companion CLI that handles configuration, login, and
        library scanning. This page lists every <code>mg</code>{" "}
        command and flag. Add <code>--help</code>{" "}
        to any command to print its usage.
      </p>

      <h2>mg setup</h2>
      <p>
        Interactive first-run wizard — walks through device name, music folder,
        login, and an initial scan in a single pass. The fastest way to get a
        new install running.
      </p>
      <CodeBlock code={`mg setup`} />

      <h2>mg login</h2>
      <p>
        Starts a device-code login. Prints a URL and a short code — open the URL
        in any browser, enter the code, and approve. The access token is saved
        to your config directory and reused on every launch.
      </p>
      <CodeBlock code={`mg login`} />

      <h2>mg logout</h2>
      <p>Removes the stored access token.</p>
      <CodeBlock code={`mg logout`} />

      <h2>mg config</h2>
      <p>
        With no options, prints the current device name, device ID, and music
        path. Pass options to set them:
      </p>
      <CodeBlock
        code={`mg config --device-name "Living Room" --music-path /home/user/Music`}
      />
      <ul>
        <li>
          <code>-n</code>, <code>--device-name &lt;name&gt;</code>{" "}
          — set the device name (how this machine shows up when you connect from
          another device).
        </li>
        <li>
          <code>-m</code>, <code>--music-path &lt;path&gt;</code>{" "}
          — set the folder Microgamma reads your music from.
        </li>
      </ul>

      <h2>mg scan [path]</h2>
      <p>
        Scans your music folder into the library. Uses the configured music path
        unless you pass a <code>path</code>{" "}
        argument. While the app is running it also watches the folder and picks
        up added or removed tracks automatically.
      </p>
      <CodeBlock code={`mg scan`} />
      <ul>
        <li>
          <code>[path]</code>{" "}
          — optional folder to scan instead of the configured music path.
        </li>
        <li>
          <code>-r</code>, <code>--reset</code>{" "}
          — rebuild the library database from scratch.
        </li>
      </ul>
      <CodeBlock code={`mg scan --reset`} />

      <h2>The app binary</h2>
      <p>
        The <code>Microgamma</code>{" "}
        executable only launches the app — all configuration, login, and
        scanning live in <code>mg</code>. Its one flag is{" "}
        <code>--headless</code>{" "}
        (run without a window). On Linux and inside containers, also pass{" "}
        <code>--no-sandbox</code> and run under a virtual framebuffer — see{" "}
        <a href="/docs/headless">Headless Mode</a>.
      </p>
      <CodeBlock code={`Microgamma --headless`} />

      <h2>Configuration &amp; storage</h2>
      <p>
        Configuration lives in <code>~/.microgamma</code>{" "}
        by default — the device config, settings, and your auth token, each
        stored as a small JSON file. Override the location with the{" "}
        <code>MG_BASE_PATH</code> environment variable:
      </p>
      <CodeBlock code={`MG_BASE_PATH=/srv/microgamma mg config`} />
      <p>
        An absolute path is used as-is; a relative value is treated as a folder
        name under your home directory. Set the same value for both{" "}
        <code>mg</code> and <code>Microgamma</code>{" "}
        so they share one configuration.
      </p>

      <h2>Environment variables</h2>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>MG_BASE_PATH</code>
            </td>
            <td>
              Config directory. Default <code>~/.microgamma</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>SIGNALING_HTTP_URL</code>
            </td>
            <td>
              Advanced — signaling server for remote connections. Default{" "}
              <code>https://signaling.microgamma.io</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>WEB_APP_URL</code>
            </td>
            <td>
              Advanced — remote web app. Default{" "}
              <code>https://play.microgamma.io</code>.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        There is no <code>--version</code> flag; use <code>--help</code>{" "}
        on any command for its usage.
      </p>
    </DocPage>
  );
}
