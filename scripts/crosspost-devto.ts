/**
 * Backfill: cross-post an already-published blog post to dev.to.
 *
 * The automatic path (utils/devtoService.ts, hooked into blogService) covers
 * posts published from now on. This script handles posts that were published
 * before the integration existed — it reads the live post by slug from the
 * blog API and cross-posts it.
 *
 * Usage:
 *   DEV_TO_API_KEY=xxx deno run -A scripts/crosspost-devto.ts <slug>
 *   deno run -A scripts/crosspost-devto.ts <slug> --dry-run   # inspect payload
 *
 * Env:
 *   DEV_TO_API_KEY  dev.to API key (Settings → Extensions → API Keys)
 *   SITE_URL        blog origin (default https://www.microgamma.io)
 */
import { devtoService } from "../utils/devtoService.ts";
import { BlogPost } from "../utils/blogTypes.ts";

const slug = Deno.args.find((a) => !a.startsWith("-"));
const dryRun = Deno.args.includes("--dry-run");
const site = Deno.env.get("SITE_URL") || "https://www.microgamma.io";

if (!slug) {
  console.error("usage: crosspost-devto.ts <slug> [--dry-run]");
  Deno.exit(1);
}

const res = await fetch(`${site}/api/blog`);
if (!res.ok) {
  console.error(`Failed to fetch ${site}/api/blog: ${res.status}`);
  Deno.exit(1);
}
const posts = (await res.json()) as BlogPost[];
const post = posts.find((p) => p.slug === slug);

if (!post) {
  console.error(`No published post found with slug "${slug}".`);
  console.error(`Available: ${posts.map((p) => p.slug).join(", ")}`);
  Deno.exit(1);
}

if (dryRun) {
  console.log(`Payload for "${post.title}":`);
  console.log(JSON.stringify(devtoService.buildPayload(post), null, 2));
  Deno.exit(0);
}

console.log(`Cross-posting "${post.title}" to dev.to…`);
const result = await devtoService.crossPost(post);
if (!result) {
  console.error("No result — is DEV_TO_API_KEY set?");
  Deno.exit(1);
}
console.log(`Done. Live on dev.to: ${result.url}`);
