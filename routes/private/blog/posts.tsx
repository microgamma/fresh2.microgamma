import { define } from "../../../utils.ts";
import { Head } from "fresh/runtime";
import { blogService } from "../../../utils/blogService.ts";

export default define.page(async function BlogPostsPage(ctx) {
  const user = ctx.state.user;
  const roles = ctx.state.roles || [];

  // Check if user has admin role
  if (!roles.includes("admin")) {
    return new Response("Access denied", { status: 403 });
  }

  // Get published posts for preview
  const publishedPosts = await blogService.getPublishedPosts();

  return (
    <>
      <Head>
        <title>Blog Posts - Microgamma</title>
        <meta
          name="description"
          content="Preview all published blog posts from your Microgamma blog."
        />
      </Head>
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-6xl mx-auto">
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
              <div class="flex justify-between items-center mb-6">
                <div>
                  <h1 class="text-2xl md-3xl font-bold text-primary-400 mb-2">
                    Blog Posts
                  </h1>
                  <p class="text-gray-300">
                    Preview all published blog posts from your Microgamma blog
                  </p>
                </div>
                <div class="flex space-x-4">
                  <a
                    href="/private/blog"
                    class="text-primary-400 hover:text-primary-300 transition"
                  >
                    Manage Posts
                  </a>
                  <a
                    href="/blog"
                    target="_blank"
                    class="text-primary-400 hover:text-primary-300 transition"
                  >
                    View Public Blog →
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-primary-300">{publishedPosts.length}</div>
                  <div class="text-gray-400 text-sm">Published Posts</div>
                </div>
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-blue-400">
                    {publishedPosts.reduce((sum, post) => sum + (post.readingTime || 0), 0)}
                  </div>
                  <div class="text-gray-400 text-sm">Total Read Time</div>
                </div>
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-green-400">
                    {new Set(publishedPosts.flatMap(post => post.tags)).size}
                  </div>
                  <div class="text-gray-400 text-sm">Unique Tags</div>
                </div>
              </div>
            </div>

            {/* Posts List */}
            {publishedPosts.length === 0 ? (
              <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
                <div class="text-center py-12">
                  <div class="text-6xl mb-4">📝</div>
                  <h3 class="text-xl font-semibold text-gray-300 mb-2">No published posts yet</h3>
                  <p class="text-gray-400 mb-6">
                    Publish some blog posts to see them listed here
                  </p>
                  <a
                    href="/private/blog/new"
                    class="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-400 transition inline-flex items-center space-x-2"
                  >
                    <span>✏️</span>
                    <span>Create Your First Post</span>
                  </a>
                </div>
              </div>
            ) : (
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {publishedPosts.map((post) => (
                  <article
                    key={post.id}
                    class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                  >
                    <div class="flex justify-between items-start mb-6">
                      <div class="flex-1">
                        <h2 class="text-2xl font-bold text-primary-300 mb-2 leading-tight">
                          {post.title}
                        </h2>
                        <div class="flex items-center space-x-4 text-sm text-gray-400">
                          <span class="flex items-center">
                            📅 {post.publishedAt?.toISOString().split('T')[0]}
                          </span>
                          <span
                            class={`px-3 py-1 rounded-full text-xs font-medium text-green-400 bg-green-900/50`}
                          >
                            Published
                          </span>
                        </div>
                      </div>
                    </div>

                    <p class="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Article tags */}
                    {post.tags.length > 0 && (
                      <div class="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            class="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-xs border border-primary-400/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-2 text-gray-500 text-sm">
                        <span>👤</span>
                        <span>{post.authorName}</span>
                        <span>•</span>
                        <span>📖 {post.readingTime}min read</span>
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                      >
                        <span>Read Post</span>
                        <span class="group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});