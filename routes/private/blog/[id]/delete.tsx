import { define } from "../../../../utils.ts";
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

    try {
      const success = await blogService.deletePost(postId, user.id);
      if (!success) {
        return new Response("Post not found or access denied", { status: 404 });
      }

      // Redirect back to blog management
      return new Response(null, {
        status: 302,
        headers: { Location: "/private/blog" },
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      return new Response("Internal server error", { status: 500 });
    }
  },
});
