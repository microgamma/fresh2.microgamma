import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";
import { blogService } from "../../utils/blogService.ts";

export default define.page(async function BlogManagementPage(ctx) {
  const user = ctx.state.user;
  const roles = ctx.state.roles || [];

  // Check if user has admin role
  if (!roles.includes("admin")) {
    return new Response("Access denied", { status: 403 });
  }

  const userPosts = await blogService.getUserPosts(user.id);
  const userDrafts = userPosts.filter((p) => p.status === "draft");

  const allPosts = userPosts.sort(
    (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime(),
  );

  return (
    <>
      <Head>
        <title>Blog Management - Microgamma</title>
        <meta
          name="description"
          content="Manage your blog posts, create new content, and publish articles."
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
                    Blog Management
                  </h1>
                  <p class="text-gray-300">
                    Create, edit, and manage your blog posts
                  </p>
                </div>
                <div class="flex space-x-4">
                  <a
                    href="/private/blog/posts"
                    class="text-primary-400 hover:text-primary-300 transition"
                  >
                    View Posts
                  </a>
                  <a
                    href="/private/blog/new"
                    class="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-400 transition flex items-center space-x-2"
                  >
                    <span>✏️</span>
                    <span>New Post</span>
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-primary-300">
                    {allPosts.length}
                  </div>
                  <div class="text-gray-400 text-sm">Total Posts</div>
                </div>
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-green-400">
                    {userPosts.filter((p) => p.status === "published").length}
                  </div>
                  <div class="text-gray-400 text-sm">Published</div>
                </div>
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-yellow-400">
                    {userDrafts.length}
                  </div>
                  <div class="text-gray-400 text-sm">Drafts</div>
                </div>
                <div class="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div class="text-2xl font-bold text-blue-400">
                    {allPosts.reduce(
                      (sum, post) => sum + (post.readingTime || 0),
                      0,
                    )}
                  </div>
                  <div class="text-gray-400 text-sm">Total Read Time</div>
                </div>
              </div>
            </div>

            {/* Posts List */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
              <h2 class="text-xl font-semibold text-primary-400 mb-6">
                Your Posts
              </h2>

              {allPosts.length === 0
                ? (
                  <div class="text-center py-12">
                    <div class="text-6xl mb-4">📝</div>
                    <h3 class="text-xl font-semibold text-gray-300 mb-2">
                      No posts yet
                    </h3>
                    <p class="text-gray-400 mb-6">
                      Create your first blog post to get started
                    </p>
                    <a
                      href="/private/blog/new"
                      class="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-400 transition inline-flex items-center space-x-2"
                    >
                      <span>✏️</span>
                      <span>Write Your First Post</span>
                    </a>
                  </div>
                )
                : (
                  <div class="space-y-4">
                    {allPosts.map((post) => (
                      <div
                        key={post.id}
                        class="bg-gray-800/30 p-6 rounded-lg border border-gray-600/30 hover:border-primary-400/50 transition"
                      >
                        <div class="flex justify-between items-start mb-4">
                          <div class="flex-1">
                            <h3 class="text-lg font-semibold text-white mb-2">
                              {post.title}
                            </h3>
                            <div class="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                              <span class="flex items-center">
                                📅 {post.updatedAt.toISOString().split("T")[0]}
                              </span>
                              <span
                                class={`px-2 py-1 rounded text-xs font-medium ${
                                  post.status === "published"
                                    ? "text-green-400 bg-green-900/50"
                                    : "text-yellow-400 bg-yellow-900/50"
                                }`}
                              >
                                {post.status}
                              </span>
                              {post.readingTime && (
                                <span>📖 {post.readingTime}min read</span>
                              )}
                            </div>
                            <p class="text-gray-300 text-sm mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            {post.tags.length > 0 && (
                              <div class="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    class="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-xs"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div class="flex space-x-2 ml-4">
                            <a
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              class="text-primary-400 hover:text-primary-300 p-2 rounded hover:bg-gray-700/50 transition"
                              title="Preview"
                            >
                              👁️
                            </a>
                            <a
                              href={`/private/blog/${post.id}/edit`}
                              class="text-blue-400 hover:text-blue-300 p-2 rounded hover:bg-gray-700/50 transition"
                              title="Edit"
                            >
                              ✏️
                            </a>
                            <form
                              method="post"
                              action={`/private/blog/${post.id}/delete`}
                              class="inline"
                            >
                              <button
                                type="submit"
                                class="text-red-400 hover:text-red-300 p-2 rounded hover:bg-gray-700/50 transition"
                                title="Delete"
                              >
                                🗑️
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
