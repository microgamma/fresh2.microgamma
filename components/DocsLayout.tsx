import { ComponentChildren } from "preact";
import { DocMeta, docHref, docsNav } from "../utils/docs.ts";

interface DocsLayoutProps {
  current: string;
  title: string;
  prev?: DocMeta;
  next?: DocMeta;
  children?: ComponentChildren;
}

function SidebarLinks({ current }: { current: string }) {
  return (
    <ul class="space-y-1">
      {docsNav.map((item) => {
        const active = item.slug === current;
        return (
          <li>
            <a
              href={docHref(item.slug)}
              aria-current={active ? "page" : undefined}
              class={`block px-3 py-2 rounded-lg text-sm transition ${
                active
                  ? "bg-primary-400/15 text-primary-400 font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function DocsLayout(
  { current, title, prev, next, children }: DocsLayoutProps,
) {
  return (
    <div class="relative min-h-screen text-white bg-gray-900">
      <div class="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>

      <div class="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <header class="mb-10">
          <p class="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Documentation
          </p>
          <h1 class="text-4xl md:text-5xl font-bold">
            <span class="gradient-text">{title}</span>
          </h1>
        </header>

        <div class="flex flex-col md:flex-row gap-8 lg:gap-12">
          <aside class="md:w-60 md:flex-shrink-0">
            {/* Mobile: collapsible menu */}
            <details class="md:hidden mb-6 card-glow bg-black/40 backdrop-blur-sm rounded-lg p-2">
              <summary class="px-2 py-1 cursor-pointer text-primary-400 font-semibold">
                Documentation menu
              </summary>
              <div class="mt-2">
                <SidebarLinks current={current} />
              </div>
            </details>

            {/* Desktop: sticky sidebar */}
            <nav
              aria-label="Documentation"
              class="hidden md:block md:sticky md:top-28 card-glow bg-black/40 backdrop-blur-sm rounded-lg p-3"
            >
              <SidebarLinks current={current} />
            </nav>
          </aside>

          <div class="min-w-0 flex-1">
            <article
              class="prose prose-invert max-w-none
                prose-headings:text-primary-400 prose-headings:font-bold
                prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-code:text-primary-400 prose-code:font-normal
                prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-primary-400/20 prose-pre:rounded-lg
                prose-table:text-sm prose-th:text-primary-400
                prose-hr:border-white/10"
            >
              {children}
            </article>

            {(prev || next) && (
              <nav class="mt-14 pt-8 border-t border-white/10 flex items-stretch gap-4 text-sm">
                {prev
                  ? (
                    <a
                      href={docHref(prev.slug)}
                      class="group flex-1 card-glow bg-black/40 rounded-lg p-4 hover:bg-black/60 transition"
                    >
                      <span class="block text-gray-500 text-xs mb-1">
                        ← Previous
                      </span>
                      <span class="text-primary-400 group-hover:text-primary-400 font-semibold">
                        {prev.title}
                      </span>
                    </a>
                  )
                  : <span class="flex-1"></span>}
                {next
                  ? (
                    <a
                      href={docHref(next.slug)}
                      class="group flex-1 card-glow bg-black/40 rounded-lg p-4 text-right hover:bg-black/60 transition"
                    >
                      <span class="block text-gray-500 text-xs mb-1">
                        Next →
                      </span>
                      <span class="text-primary-400 font-semibold">
                        {next.title}
                      </span>
                    </a>
                  )
                  : <span class="flex-1"></span>}
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
