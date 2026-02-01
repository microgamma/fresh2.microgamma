import { define } from "../../../utils.ts";
import { Head } from "fresh/runtime";
import BlogEditor from "../../../islands/BlogEditor.tsx";
import { blogService } from "../../../utils/blogService.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const user = ctx.state.user;
    const roles = ctx.state.roles || [];

    // Check if user has admin role
    if (!roles.includes("admin")) {
      return new Response("Access denied", { status: 403 });
    }

    const formData = await ctx.req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = JSON.parse(formData.get("tags") as string || "[]");
    const status = formData.get("status") as "draft" | "published";

    if (!title?.trim() || !content?.trim()) {
      return new Response("Title and content are required", { status: 400 });
    }

    try {
      await blogService.createPost(user.id, user.given_name ? `${user.given_name} ${user.family_name || ''}`.trim() : user.email || "Unknown", {
        title,
        content,
        tags,
        status,
      });

      // Redirect to blog management
      return new Response(null, {
        status: 302,
        headers: { Location: "/private/blog" },
      });
    } catch (error) {
      console.error("Error creating post:", error);
      return new Response("Internal server error", { status: 500 });
    }
  },
});

export default define.page(function NewBlogPostPage(ctx) {
  const user = ctx.state.user;
  const roles = ctx.state.roles || [];

  // Check if user has admin role
  if (!roles.includes("admin")) {
    return (
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10 flex items-center justify-center min-h-screen">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-red-400 mb-4">Access Denied</h1>
            <p class="text-gray-300">You don't have permission to access this page.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>New Blog Post - Microgamma</title>
        <meta
          name="description"
          content="Create a new blog post for your Microgamma blog."
        />
      </Head>
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto">
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-8">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h1 class="text-2xl md-3xl font-bold text-primary-400 mb-2">
                    New Blog Post
                  </h1>
                  <p class="text-gray-300">
                    Write and publish your next blog post
                  </p>
                </div>
                <a
                  href="/private/blog"
                  class="text-primary-400 hover:text-primary-300 transition"
                >
                  ← Back to Blog Management
                </a>
              </div>
            </div>

            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8">
              <form method="post">
                <BlogEditor
                  onSave={(data) => {
                    // Create hidden inputs for form submission
                    const form = document.querySelector('form');
                    if (form) {
                      // Clear existing hidden inputs
                      form.querySelectorAll('input[type="hidden"]').forEach(el => el.remove());

                      // Add new hidden inputs
                      const titleInput = document.createElement('input');
                      titleInput.type = 'hidden';
                      titleInput.name = 'title';
                      titleInput.value = data.title;
                      form.appendChild(titleInput);

                      const contentInput = document.createElement('input');
                      contentInput.type = 'hidden';
                      contentInput.name = 'content';
                      contentInput.value = data.content;
                      form.appendChild(contentInput);

                      const tagsInput = document.createElement('input');
                      tagsInput.type = 'hidden';
                      tagsInput.name = 'tags';
                      tagsInput.value = JSON.stringify(data.tags);
                      form.appendChild(tagsInput);

                      const statusInput = document.createElement('input');
                      statusInput.type = 'hidden';
                      statusInput.name = 'status';
                      statusInput.value = data.status;
                      form.appendChild(statusInput);

                      // Submit the form
                      form.submit();
                    }
                  }}
                  onCancel={() => {
                    window.location.href = '/private/blog';
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});