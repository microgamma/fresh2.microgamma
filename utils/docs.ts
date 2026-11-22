export interface DocMeta {
  slug: string;
  title: string;
  description: string;
}

// Ordered list — drives the sidebar navigation and prev/next links.
// Each entry has a matching route under routes/docs/ that renders its content.
export const docsNav: DocMeta[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Install the desktop app, play your local library, and reach it from a browser or the Android app.",
  },
  {
    slug: "playback-and-albums",
    title: "Playback & Album Pages",
    description:
      "Gapless playback and optional crossfade, track vs album loudness, full-screen artwork, release details, and similar records.",
  },
  {
    slug: "auto-queue",
    title: "Auto-Queue",
    description:
      "The weighted random queue: liked songs, recently added, and the whole library, the no-repeat window, and stations.",
  },
  {
    slug: "headless",
    title: "Headless Mode",
    description:
      "Run Microgamma without a GUI and keep your configuration across restarts.",
  },
  {
    slug: "docker",
    title: "Docker",
    description:
      "Run Microgamma headless in a container from the public GHCR image.",
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    description:
      "Every mg command and flag, plus configuration paths and environment variables.",
  },
  {
    slug: "discogs-token",
    title: "Discogs API Token",
    description:
      "Get a free Discogs token so the basic features can fetch album and artist cover art.",
  },
  {
    slug: "ai-provider",
    title: "Choosing an AI Provider",
    description:
      "Bring your own AI provider on the basic plan: DeepSeek, OpenAI, OpenRouter, or a model on your own network with Ollama.",
  },
  {
    slug: "deepseek-token",
    title: "DeepSeek AI Token",
    description:
      "Get a DeepSeek API key, the one provider that grounds write-ups with a web search.",
  },
  {
    slug: "ice-servers",
    title: "STUN / TURN Servers",
    description:
      "Bring your own STUN/TURN (ICE) servers so your devices can connect with the basic features.",
  },
];

/** Canonical URL for a doc page. The first page lives at /docs. */
export function docHref(slug: string): string {
  return slug === docsNav[0].slug ? "/docs" : `/docs/${slug}`;
}
