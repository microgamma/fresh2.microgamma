import { define } from "../utils.ts";
import  kindeClient  from "../utils/auth.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const url = new URL(ctx.req.url);
    await kindeClient.handleRedirectToApp(url);
    return ctx.redirect("/");
  },
});
