import { define } from "../utils.ts";
import kindeClient from "../utils/auth.ts";

export const handler = define.handlers({
  async GET(ctx) {
    if (!ctx.state.user) {
      const loginUrl = await kindeClient.login();
      return ctx.redirect(loginUrl.toString());
    } else {
      return ctx.redirect("/");
    }
  },
});
