import { Head } from "fresh/runtime";
import MainLayout from "../../components/MainLayout.tsx";
import { newsService } from "../../utils/newsService.ts";

export default async function NewsArticlePage(
  { params }: { params: { slug: string } },
) {
  const newsItems = await newsService.getNews();
  const article = newsItems.find((item) => item.slug === params.slug);

  if (!article) {
    return (
      <>
        <Head>
          <title>Article Not Found - Microgamma</title>
          <meta name="description" content="The requested news article could not be found." />
        </Head>
        <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
          {/* Background overlay for better text readability */}
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="relative z-10">
            <div class="max-w-4xl mx-auto">
              <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-8 text-primary-400">
                  Article Not Found
                </h1>
                <p class="text-xl mb-8 text-gray-300">
                  The requested news article could not be found.
                </p>
                <a
                  href="/news"
                  class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                >
                  <span>← Back to News</span>
                  <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} - Microgamma</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto py-20">
            <article class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-primary-400/30">
              <div class="flex justify-between items-start mb-6">
                <div class="flex-1">
                  <h1 class="text-3xl md:text-4xl font-bold text-primary-400 mb-4 leading-tight">
                    {article.title}
                  </h1>
                  <div class="flex flex-wrap items-center gap-4 mb-4">
                    <span class={`px-3 py-1 rounded-full text-sm font-medium ${
                      article.type === "GitHub Release"
                        ? "text-green-400 bg-green-900/50"
                        : article.type === "Pre-release"
                        ? "text-yellow-400 bg-yellow-900/50"
                        : "text-gray-400 bg-gray-900/50"
                    }`}>
                      {article.type}
                    </span>
                    {article.tagName && (
                      <span class="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {article.tagName}
                      </span>
                    )}
                    <span class="flex items-center text-gray-400 text-sm">
                      📅 {article.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Release Content */}
              <div class="prose prose-invert max-w-none mb-8">
                <div class="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {article.content}
                </div>
              </div>

              {/* GitHub Link */}
              {article.sourceUrl && (
                <div class="mb-8 p-4 bg-primary-900/20 rounded-lg border border-primary-400/20">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                  >
                    <span>🐙</span>
                    <span>View on GitHub</span>
                    <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              )}

              {/* Navigation */}
              <div class="pt-6 border-t border-primary-400/20">
                <a
                  href="/news"
                  class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                >
                  <span>← Back to News</span>
                  <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
