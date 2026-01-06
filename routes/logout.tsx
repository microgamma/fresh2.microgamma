import { define } from "../utils.ts";
import kindeClient from "../utils/auth.ts";

export const handler = define.handlers({
  async GET(ctx) {
    await kindeClient.logout();
    return ctx.redirect("/");
  },
});
