import { define } from "../../utils.ts";
import kindeClient from "../../utils/auth.ts";

export default define.middleware(async (ctx) => {
  // Check if user is authenticated
  if (!ctx.state.user) {
    // Redirect to login if not authenticated
    return ctx.redirect("/login");
  }

  // Fetch user roles and add to state
  const roles = await kindeClient.getPermissions();
  ctx.state.roles = roles.permissions;

  return ctx.next();
});
