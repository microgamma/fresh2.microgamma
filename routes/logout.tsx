import { define } from "../utils.ts";
import { kindeClient } from "../utils/auth.ts";
import { sessionManager } from "../utils/SessionManager.ts";

export const handler = define.handlers({
  async GET(ctx) {
    await kindeClient.logout(sessionManager);
    return ctx.redirect("/");
  },
});