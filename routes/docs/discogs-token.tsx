import DocPage from "../../components/DocPage.tsx";

export default function DiscogsTokenPage() {
  return (
    <DocPage slug="discogs-token">
      <p>
        Musicbox enriches your library with album and artist artwork it looks up
        from <a href="https://www.discogs.com" target="_blank" rel="noopener">
        Discogs</a>. On premium accounts this works out of the box. On the free
        tier you can unlock the exact same feature by bringing your own Discogs
        token — and getting one is free.
      </p>

      <h2>1. Create a Discogs account</h2>
      <p>
        Sign up at{" "}
        <a href="https://www.discogs.com" target="_blank" rel="noopener">
          discogs.com
        </a>{" "}
        if you don't already have an account. A regular free account is all you
        need.
      </p>

      <h2>2. Generate a personal token</h2>
      <p>
        Open your{" "}
        <a
          href="https://www.discogs.com/settings/developers"
          target="_blank"
          rel="noopener"
        >
          Developer settings
        </a>{" "}
        and click <strong>Generate new token</strong>. Discogs creates a
        personal access token — a long string of letters and numbers. This token
        is free and tied to your own account.
      </p>

      <h2>3. Paste it into Musicbox</h2>
      <p>
        In Musicbox, open{" "}
        <strong>Settings → Integrations</strong> and paste the token into the
        {" "}
        <strong>Discogs token</strong>{" "}
        field. That's it — cover-art lookups now run against your own Discogs
        allowance.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          The token acts on your behalf, so keep it private — treat it like a
          password.
        </li>
        <li>
          Discogs rate-limits requests per token. That's plenty for a personal
          library; very large first-time scans just fill in artwork a little
          more gradually.
        </li>
        <li>
          You can revoke and regenerate the token any time from the same
          Developer settings page.
        </li>
      </ul>
    </DocPage>
  );
}
