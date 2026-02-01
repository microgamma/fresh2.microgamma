import { define } from "../../../../utils.ts";
import { Head } from "fresh/runtime";
import BlogEditor from "../../../../islands/BlogEditor.tsx";
import { blogService } from "../../../../utils/blogService.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const user = ctx.state.user;
    const roles = ctx.state.roles || [];

    // Check if user has admin role
    if (!roles.includes("admin")) {
      return new Response("Access denied", { status: 403 });
    }

    const postId = ctx.params.id;
    const formData = await ctx.req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = JSON.parse(formData.get("tags") as string || "[]");
    const action = formData.get("action") as "draft" | "publish";
    const status = action === "publish" ? "published" : "draft";

    if (!title?.trim() || !content?.trim()) {
      return new Response("Title and content are required", { status: 400 });
    }

    try {
      const updatedPost = await blogService.updatePost(postId, user.id, {
        title,
        content,
        tags,
        status,
      });

      if (!updatedPost) {
        return new Response("Post not found or access denied", { status: 404 });
      }

      // Redirect to blog management
      return new Response(null, {
        status: 302,
        headers: { Location: "/private/blog" },
      });
    } catch (error) {
      console.error("Error updating post:", error);
      return new Response("Internal server error", { status: 500 });
    }
  },
});

export default define.page(async function EditBlogPostPage(ctx) {
  const user = ctx.state.user;
  const roles = ctx.state.roles || [];
  const postId = ctx.params.id;

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

  // Get the post to edit
  const post = await blogService.getPost(postId);

  if (!post || post.authorId !== user.id) {
    return (
      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10 flex items-center justify-center min-h-screen">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-red-400 mb-4">Post Not Found</h1>
            <p class="text-gray-300">The requested post could not be found or you don't have permission to edit it.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Edit Blog Post - Microgamma</title>
        <meta
          name="description"
          content="Edit your blog post content, tags, and publishing status."
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
                    Edit Blog Post
                  </h1>
                  <p class="text-gray-300">
                    Make changes to your blog post
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
                   initialTitle={post.title}
                   initialContent={post.content}
                   initialTags={post.tags}
                   initialStatus={post.status}
                 />
               </form>
             </div>
          </div>
        </div>
      </div>
    </>
  );
});