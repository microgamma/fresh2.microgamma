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
];

/** Canonical URL for a doc page. The first page lives at /docs. */
export function docHref(slug: string): string {
  return slug === docsNav[0].slug ? "/docs" : `/docs/${slug}`;
}
