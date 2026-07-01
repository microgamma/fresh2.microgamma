import { define } from "../../utils.ts";

interface LinkItem {
  link: string;
  text: string;
  type?: string;
}

interface SharePayload {
  title: string;
  artist: string;
  image?: string;
  info?: string;
  links?: LinkItem[];
}

interface ShareRecord {
  title: string;
  artist: string;
  image: string;
  info: string;
  links: LinkItem[];
  createdAt: number;
}

async function generateShortId(artist: string, title: string): Promise<string> {
  const input = `${artist.toLowerCase().trim()}::${title.toLowerCase().trim()}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = new Uint8Array(hashBuffer);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += chars[hashArray[i] % chars.length];
  }
  return id;
}

export const handler = define.handlers({
  async POST(ctx) {
    try {
      const body: SharePayload = await ctx.req.json();

      if (!body.title || !body.artist) {
        return new Response(
          JSON.stringify({ error: "title and artist are required" }),
          { status: 400, headers: { "Content-Type": "application/json" } },
        );
      }

      const id = await generateShortId(body.artist, body.title);
      const kv = await Deno.openKv();

      const existing = await kv.get<ShareRecord>(["share", id]);

      if (!existing.value) {
        const record: ShareRecord = {
          title: body.title,
          artist: body.artist,
          image: body.image || "",
          info: body.info || "",
          links: body.links || [],
          createdAt: Date.now(),
        };

        await kv.set(["share", id], record, {
          expireIn: 2 * 24 * 60 * 60 * 1000,
        });
      }

      return new Response(
        JSON.stringify({ id }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    } catch (_error) {
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
  },
});
