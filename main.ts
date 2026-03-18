import { App, cors, staticFiles } from "fresh";
import { type State } from "./utils.ts";
import kindeClient from "./utils/auth.ts";
import { getDebugger } from "@microphi/debug";

const d = getDebugger("microgamma:www");

export const app = new App<State>();

app.use(cors({
  origin: "*",
  allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests", "Content-Type"],
  allowMethods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
  maxAge: 600,
}));

app.use(staticFiles());

// Pass a shared value from a middleware
app.use(async (ctx) => {
  ctx.state.shared = "hello";

  try {
    const user = await kindeClient.getUser();
    console.log("User is authenticated", user);

    ctx.state.user = user;
  } catch (e) {
    console.log("User is not authenticated");
    d(e);
  }

  return await ctx.next();
});

// Include file-system based routes here
app.fsRoutes();
