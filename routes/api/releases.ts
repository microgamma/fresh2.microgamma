import { define } from "../../utils.ts";
import { cachedFetch } from "../../utils.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    try {
      const releases = await cachedFetch(
        "https://signaling.microgamma.io/releases/list",
      );
      return new Response(JSON.stringify(releases), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Failed to fetch releases:", error);
      return new Response(JSON.stringify({}), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});
