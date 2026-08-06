import { define } from "../../utils.ts";
import { getReleases } from "../../utils/releases.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    try {
      const releases = await getReleases();
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
