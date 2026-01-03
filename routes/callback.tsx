import { define } from "../utils.ts";
import { kindeClient } from "../utils/auth.ts";
import { sessionManager } from "../utils/SessionManager.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const url = new URL(ctx.req.url);
    await kindeClient.handleRedirectToApp(sessionManager, url);
    return ctx.redirect("/");
  },
});
