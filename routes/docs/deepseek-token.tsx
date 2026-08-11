import DocPage from "../../components/DocPage.tsx";

export default function DeepSeekTokenPage() {
  return (
    <DocPage slug="deepseek-token">
      <p>
        Musicbox's AI features are powered by{" "}
        <a href="https://www.deepseek.com" target="_blank" rel="noopener">
          DeepSeek
        </a>. Premium accounts get this out of the box. On the free tier you can
        unlock the same features by bringing your own DeepSeek API key.
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
        Musicbox use. Add credit under <strong>Billing</strong> in the console.
      </p>

      <h2>3. Create an API key</h2>
      <p>
        Go to <strong>API keys</strong>, click{" "}
        <strong>Create new API key</strong>, and copy the value. You only see
        the full key once, so copy it before closing the dialog.
      </p>

      <h2>4. Paste it into Musicbox</h2>
      <p>
        In Musicbox, open <strong>Settings → Integrations</strong> and paste the
        key into the <strong>AI token</strong>{" "}
        field. Musicbox's AI features now run against your own DeepSeek key.
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
          The token must be a DeepSeek key specifically — keys from other AI
          providers won't work here.
        </li>
      </ul>
    </DocPage>
  );
}
