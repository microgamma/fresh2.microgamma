import { define } from "../../utils.ts";
import { newsService } from "../../utils/newsService.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    try {
      const posts = await newsService.getBlogPosts();
      return new Response(JSON.stringify(posts), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      return new Response(JSON.stringify([]), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});
