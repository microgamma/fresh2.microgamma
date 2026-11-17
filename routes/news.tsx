import { define } from "../utils.ts";

// The news page mirrored @microgamma_io and is gone — the blog is the one
// feed now. Kept as a redirect because the page was linked for months and a
// 404 is a worse answer than the post list it was always a thinner copy of.
export const handler = define.handlers({
  GET(ctx) {
    return ctx.redirect("/blog", 301);
  },
});
