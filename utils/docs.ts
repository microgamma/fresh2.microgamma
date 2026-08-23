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
      "Install the desktop app, play your local library, and reach it from anywhere with play.microgamma.io.",
  },
  {
    slug: "playback-and-albums",
    title: "Playback & Album Pages",
    description:
      "Gapless and overlapping playback, track vs album loudness levelling, full-screen artwork, release details, and similar records.",
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
      "Get a free Discogs token so the free tier can fetch album and artist cover art.",
  },
  {
    slug: "deepseek-token",
    title: "DeepSeek AI Token",
    description:
      "Add your own DeepSeek API key to unlock Musicbox's AI features on the free tier.",
  },
  {
    slug: "ice-servers",
    title: "STUN / TURN Servers",
    description:
      "Bring your own STUN/TURN (ICE) servers so your devices can connect on the free tier.",
  },
];

/** Canonical URL for a doc page. The first page lives at /docs. */
export function docHref(slug: string): string {
  return slug === docsNav[0].slug ? "/docs" : `/docs/${slug}`;
}
