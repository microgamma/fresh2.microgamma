import { define } from "../../utils.ts";
import { newsService } from "../../utils/newsService.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    try {
      const news = await newsService.getNews();
      return new Response(JSON.stringify(news), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Failed to fetch news:", error);
      return new Response(JSON.stringify([]), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});
