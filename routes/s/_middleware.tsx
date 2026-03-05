import { FreshContext } from "fresh";
import { State } from "../../utils.ts";

export async function handler(ctx: FreshContext<State>) {
  ctx.state.useShareLayout = true;
  return ctx.next();
}
