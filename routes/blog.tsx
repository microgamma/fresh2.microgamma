import { Head } from "fresh/runtime";
import { newsService } from "../utils/newsService.ts";

export default async function BlogPage() {
  const blogPosts = await newsService.getBlogPosts();

  return (
    <>
      <Head>
        <title>Blog - Microgamma</title>
        <meta
          name="description"
          content="Read insightful articles and deep dives into the world of music ownership technology, blockchain innovation, and the future of digital rights."
        />
      </Head>

      {/* Blog Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span class="gradient-text">Blog</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              Read insightful articles and deep dives into the world of music ownership technology,
              blockchain innovation, and the future of{" "}
              <span class="text-primary-300">digital rights</span>.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full">
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.map((post, idx) => (
                <article
                  key={idx}
                  class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                >
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex-1">
                      <h2 class="text-2xl font-bold text-primary-300 mb-2 leading-tight">
                        {post.title}
                      </h2>
                      <div class="flex items-center space-x-4 text-sm text-gray-400">
                        <span class="flex items-center">
                          📅 {post.date}
                        </span>
                        <span
                          class={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.type === "Blog Post"
                              ? "text-purple-400 bg-purple-900/50"
                              : "text-gray-400 bg-gray-900/50"
                          }`}
                        >
                          {post.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Article tags for blog posts */}
                  {post.articleTags && post.articleTags.length > 0 && (
                    <div class="flex flex-wrap gap-2 mb-6">
                      {post.articleTags.map((tag) => (
                        <span class="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-xs border border-primary-400/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div class="flex items-center justify-between">
                    <a
                      href={`/blog/${post.slug}`}
                      class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                    >
                      <span>Read More</span>
                      <span class="group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </a>

                    <div class="flex items-center space-x-1 text-gray-500 text-sm">
                      <span>📝</span>
                      <span>Dev.to • {post.readingTime}min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {blogPosts.length === 0 && (
              <div class="text-center py-16">
                <div class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 max-w-2xl mx-auto">
                  <h3 class="text-2xl font-bold mb-4 text-primary-300">
                    No Blog Posts Yet
                  </h3>
                  <p class="text-gray-300 mb-6">
                    We're working on our first blog posts. Check back soon for insights
                    into music ownership technology and blockchain innovation.
                  </p>
                  <div class="flex justify-center space-x-2 text-primary-400">
                    <span class="text-2xl">📝</span>
                    <span class="text-lg font-semibold">
                      Coming Soon
                    </span>
                    <span class="text-2xl">📝</span>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            {blogPosts.length > 0 && (
              <div class="text-center">
                <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
                  <h3 class="text-2xl font-bold mb-4 text-primary-300">
                    Stay Informed
                  </h3>
                  <p class="text-gray-300 mb-6">
                    Follow our blog for the latest insights on music ownership,
                    digital rights, and the future of creative economy.
                  </p>
                  <div class="flex justify-center space-x-2 text-primary-400">
                    <span class="text-2xl">📰</span>
                    <span class="text-lg font-semibold">
                      Latest from the Blog
                    </span>
                    <span class="text-2xl">📰</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}