import { Head } from "fresh/runtime";
import DocsLayout from "./DocsLayout.tsx";
import { getDoc } from "../utils/docs.ts";

/** Renders a single documentation page by slug, or a not-found notice. */
export default function DocView({ slug }: { slug: string }) {
  const doc = getDoc(slug);

  if (!doc) {
    return (
      <>
        <Head>
          <title>Page not found — Microgamma Docs</title>
          <meta
            name="description"
            content="The requested documentation page could not be found."
          />
        </Head>
        <div class="relative min-h-screen text-white bg-gray-900">
          <div class="absolute inset-0 grid-bg opacity-40 pointer-events-none">
          </div>
          <div class="relative z-10 container mx-auto px-4 pt-28 pb-20 text-center">
            <h1 class="text-4xl font-bold mb-4">
              <span class="gradient-text">Page not found</span>
            </h1>
            <p class="text-gray-300 mb-8">
              That documentation page doesn't exist.
            </p>
            <a
              href="/docs"
              class="text-primary-400 hover:text-primary-300 transition font-medium"
            >
              ← Back to Docs
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{doc.title} — Microgamma Docs</title>
        <meta name="description" content={doc.description} />
      </Head>
      <DocsLayout
        current={doc.slug}
        title={doc.title}
        prev={doc.prev}
        next={doc.next}
      >
        <div dangerouslySetInnerHTML={{ __html: doc.html }} />
      </DocsLayout>
    </>
  );
}
