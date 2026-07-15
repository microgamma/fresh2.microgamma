import { ComponentChildren } from "preact";
import { Head } from "fresh/runtime";
import DocsLayout from "./DocsLayout.tsx";
import { docsNav } from "../utils/docs.ts";

/**
 * Chrome for a single documentation page: <Head> metadata plus the shared
 * sidebar/prev-next layout. Each route under routes/docs/ supplies its own
 * content as children; `slug` must match an entry in `docsNav`.
 */
export default function DocPage(
  { slug, children }: { slug: string; children: ComponentChildren },
) {
  const idx = docsNav.findIndex((d) => d.slug === slug);
  const meta = docsNav[idx];

  return (
    <>
      <Head>
        <title>{meta.title} — Microgamma Docs</title>
        <meta name="description" content={meta.description} />
      </Head>
      <DocsLayout
        current={meta.slug}
        title={meta.title}
        prev={docsNav[idx - 1]}
        next={docsNav[idx + 1]}
      >
        {children}
      </DocsLayout>
    </>
  );
}
