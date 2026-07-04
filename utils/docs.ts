import { parseMarkdown } from "./markdown.ts";

export interface DocMeta {
  slug: string;
  title: string;
  description: string;
}

// Ordered list — drives the sidebar navigation and prev/next links.
export const docsNav: DocMeta[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Run Microgamma anywhere — the mg CLI, the two executables, and a quick start.",
  },
  {
    slug: "desktop",
    title: "Desktop App",
    description:
      "Install and run Microgamma as a normal desktop app on macOS, Windows, and Linux.",
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
      "Run Microgamma headless in a container: ECR login, setup, and multi-arch images.",
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    description: "Every mg command and how configuration is stored.",
  },
];

/** Canonical URL for a doc page. The first page lives at /docs. */
export function docHref(slug: string): string {
  return slug === docsNav[0].slug ? "/docs" : `/docs/${slug}`;
}

export interface RenderedDoc extends DocMeta {
  html: string;
  prev?: DocMeta;
  next?: DocMeta;
}

// Rendered HTML is cached after the first read so each doc is parsed once.
const htmlCache = new Map<string, string>();

// Markdown lives in content/docs/*.md, read relative to the project root at
// render time. Both `vite` (dev) and `deno serve _fresh/server.js` (prod) run
// from the project root, so a CWD-relative path resolves in both.
function loadHtml(slug: string): string | null {
  const cached = htmlCache.get(slug);
  if (cached !== undefined) return cached;

  try {
    const raw = Deno.readTextFileSync(`${Deno.cwd()}/content/docs/${slug}.md`);
    const html = parseMarkdown(raw);
    htmlCache.set(slug, html);
    return html;
  } catch (err) {
    console.error(`Failed to load doc "${slug}":`, err);
    return null;
  }
}

/** Look up a doc by slug and render its markdown to HTML. */
export function getDoc(slug: string): RenderedDoc | null {
  // Guard first: only slugs in the manifest are ever read from disk.
  const idx = docsNav.findIndex((d) => d.slug === slug);
  if (idx === -1) return null;

  const html = loadHtml(slug);
  if (html === null) return null;

  return {
    ...docsNav[idx],
    html,
    prev: docsNav[idx - 1],
    next: docsNav[idx + 1],
  };
}
