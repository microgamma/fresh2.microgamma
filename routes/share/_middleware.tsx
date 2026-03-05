import { FreshContext } from "fresh";
import { State } from "../../utils.ts";

export async function handler(ctx: FreshContext<State>) {
  // Add a flag to use minimal layout
  ctx.state.useShareLayout = true;

  // Get the response from the next handler
  const response = await ctx.next();

  // Add CORS headers to allow cross-origin requests
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}
