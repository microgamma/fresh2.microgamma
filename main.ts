import { App, cors, staticFiles } from "fresh";
import { type State } from "./utils.ts";

export const app = new App<State>();


app.use(cors({
    origin: "*",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  }));

app.use(staticFiles());

// Pass a shared value from a middleware
app.use(async (ctx) => {
  ctx.state.shared = "hello";
  return await ctx.next();
});


// Include file-system based routes here
app.fsRoutes();
