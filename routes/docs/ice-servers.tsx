import DocPage from "../../components/DocPage.tsx";
import CodeBlock from "../../islands/CodeBlock.tsx";

export default function IceServersPage() {
  return (
    <DocPage slug="ice-servers">
      <p>
        Musicbox streams between your devices over a direct peer-to-peer
        connection. To set that up, WebRTC needs <strong>ICE servers</strong>:
        {" "}
        a <strong>STUN</strong>{" "}
        server helps each device discover how it looks from the public internet,
        and a <strong>TURN</strong>{" "}
        server relays the audio in the rarer case where a direct link can't be
        made. Premium accounts get these out of the box; on the free tier you
        can supply your own.
      </p>

      <h2>STUN — free and enough for most setups</h2>
      <p>
        STUN servers are lightweight and there are well-known free ones you can
        use immediately. For most home and mobile networks, STUN alone is all
        Musicbox needs to connect. Paste a list like this into{" "}
        <strong>Settings → Integrations → ICE servers</strong>{" "}
        as JSON:
      </p>
      <CodeBlock
        code={`[
  { "urls": "stun:stun.l.google.com:19302" }
]`}
      />

      <h2>TURN — only when a direct link fails</h2>
      <p>
        Some strict or corporate networks block direct connections, and then a
        TURN relay is required. TURN uses more bandwidth, so it's used only as a
        fallback. You have free options here too:
      </p>
      <ul>
        <li>
          <strong>Free TURN providers</strong>{" "}
          — several services offer a free TURN tier that's fine for personal
          use. They give you a host, username, and credential to drop into the
          list below.
        </li>
        <li>
          <strong>Self-host</strong>{" "}
          — running{" "}
          <a href="https://github.com/coturn/coturn" target="_blank" rel="noopener">
            coturn
          </a>{" "}
          on a small VPS gives you your own TURN server for the cost of the
          server.
        </li>
      </ul>
      <p>
        A list with both STUN and a TURN server looks like this:
      </p>
      <CodeBlock
        code={`[
  { "urls": "stun:stun.l.google.com:19302" },
  {
    "urls": "turn:your-turn-host:3478",
    "username": "your-username",
    "credential": "your-credential"
  }
]`}
      />

      <h2>Good to know</h2>
      <ul>
        <li>
          The field takes a JSON array of{" "}
          <code>RTCIceServer</code>{" "}
          objects — the same shape shown above. If the JSON is invalid, Musicbox
          falls back to a public STUN server so playback still works.
        </li>
        <li>
          Start with just STUN. Only add TURN if two of your devices refuse to
          connect on the network you're using.
        </li>
        <li>
          TURN credentials let others relay through your server, so keep them
          private.
        </li>
      </ul>
    </DocPage>
  );
}
