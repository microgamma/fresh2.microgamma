import DocPage from "../../components/DocPage.tsx";

export default function DeepSeekTokenPage() {
  return (
    <DocPage slug="deepseek-token">
      <p>
        <a href="https://www.deepseek.com" target="_blank" rel="noopener">
          DeepSeek
        </a>{" "}
        is one of the AI providers you can bring to Microgamma with the basic
        features (see <a href="/docs/ai-provider">Choosing an AI provider</a>
        {" "}
        for the others). It's cheap, and it's the only one that grounds artist,
        album and song write-ups with a web search. Premium accounts don't need
        a key at all.
      </p>

      <h2>1. Create a DeepSeek account</h2>
      <p>
        Sign up on the{" "}
        <a
          href="https://platform.deepseek.com"
          target="_blank"
          rel="noopener"
        >
          DeepSeek platform
        </a>. This is the developer console, separate from the chat app.
      </p>

      <h2>2. Add a little credit</h2>
      <p>
        DeepSeek's API is pay-as-you-go rather than free, but it's among the
        cheapest available — a small top-up covers a long time of normal
        Microgamma use. Add credit under <strong>Billing</strong>{" "}
        in the console.
      </p>

      <h2>3. Create an API key</h2>
      <p>
        Go to <strong>API keys</strong>, click{" "}
        <strong>Create new API key</strong>, and copy the value. You only see
        the full key once, so copy it before closing the dialog.
      </p>

      <h2>4. Paste it into Microgamma</h2>
      <p>
        In Microgamma, open <strong>Settings → Integrations</strong>, set{" "}
        <strong>Provider</strong> to <strong>DeepSeek</strong>{" "}
        in the AI section, and paste the key into{" "}
        <strong>API key</strong>. The Base URL and Model are filled in for you.
        Microgamma's AI features now run against your own DeepSeek key:
        stations, similar-song suggestions and write-ups.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          The key spends your DeepSeek balance, so keep it private — treat it
          like a password.
        </li>
        <li>
          You can set spending limits and revoke or rotate the key any time from
          the DeepSeek console.
        </li>
        <li>
          The <strong>Similar songs</strong>{" "}
          section on the queue asks the AI for suggestions every time the track
          changes. If you'd rather not spend on that, switch it off with the
          toggle beside its title — the choice is remembered per device.
        </li>
        <li>
          The web search that grounds artist, album and song write-ups runs on
          the same key, so one DeepSeek balance covers the whole request.
        </li>
        <li>
          What the AI remembers about your taste is kept on your own machine.
          Each request carries a copy, and nothing of it is stored on our side.
        </li>
        <li>
          A DeepSeek key only works with the DeepSeek provider. For a key from
          another service, pick that provider instead — see{" "}
          <a href="/docs/ai-provider">Choosing an AI provider</a>.
        </li>
      </ul>
    </DocPage>
  );
}
