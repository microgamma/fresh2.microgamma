import { define } from "../../utils.ts";

export default define.middleware((ctx) => {
  // Check if user is authenticated
  if (!ctx.state.user) {
    // Redirect to login if not authenticated
    return ctx.redirect("/login");
  }

  return ctx.next();
});
