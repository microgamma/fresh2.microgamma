import { FreshContext } from "fresh";
import { State } from "../../utils.ts";

export async function handler(ctx: FreshContext<State>) {
  // Add a flag to use minimal layout
  ctx.state.useShareLayout = true;
  return ctx.next();
}
