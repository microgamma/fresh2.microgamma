import { Head } from "fresh/runtime";
import MainLayout from "../../components/MainLayout.tsx";
import { newsService } from "../../utils/newsService.ts";
import { parseMarkdown } from "../../utils/markdown.ts";

export default async function BlogPostPage(
  { params }: { params: { slug: string } },
) {
  const blogPosts = await newsService.getBlogPosts();
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found - Microgamma</title>
          <meta
            name="description"
            content="The requested blog post could not be found."
          />
        </Head>
        <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="relative z-10">
            <div class="max-w-4xl mx-auto">
              <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-8 text-primary-400">
                  Blog Post Not Found
                </h1>
                <p class="text-xl mb-8 text-gray-300">
                  The requested blog post could not be found.
                </p>
                <a
                  href="/blog"
                  class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                >
                  <span>← Back to Blog</span>
                  <span class="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
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
        <title>{post.title} - Microgamma Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto py-20">
            <article class="card-glow bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-primary-400/30">
              <div class="flex justify-between items-start mb-6">
                <div class="flex-1">
                  <h1 class="text-3xl md:text-4xl font-bold text-primary-400 mb-4 leading-tight">
                    {post.title}
                  </h1>
                  <div class="flex flex-wrap items-center gap-4 mb-4">
                    {post.readingTime && (
                      <span class="text-sm text-primary-400 bg-primary-900/50 px-3 py-1 rounded-full">
                        {post.readingTime}min read
                      </span>
                    )}
                    <span class="flex items-center text-gray-400 text-sm">
                      📅{" "}
                      {(post.publishedAt || post.createdAt).toISOString().split(
                        "T",
                      )[0]}
                    </span>
                  </div>
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div class="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span class="px-3 py-1 bg-primary-900/30 text-primary-300 rounded text-sm border border-primary-400/20">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div
                class="prose prose-invert prose-headings:text-primary-300 prose-a:text-primary-400 hover:prose-a:text-primary-300 prose-strong:text-white prose-code:bg-gray-800 prose-code:text-primary-300 prose-code:px-1 prose-code:rounded max-w-none mb-8"
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(post.content),
                }}
              />

              <div class="pt-6 border-t border-primary-400/20">
                <a
                  href="/blog"
                  class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                >
                  <span>← Back to Blog</span>
                  <span class="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
