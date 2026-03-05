import { Head } from "fresh/runtime";
import { define } from "../../utils.ts";

interface LinkItem {
  link: string;
  text: string;
  type?: string;
}

interface ShareRecord {
  title: string;
  artist: string;
  image: string;
  info: string;
  links: LinkItem[];
  createdAt: number;
}

function getLinkEmoji(text: string, url: string): string {
  const t = text.toLowerCase();
  const u = url.toLowerCase();

  if (t.includes("spotify") || u.includes("spotify")) return "🟢";
  if (t.includes("youtube") || u.includes("youtube")) return "▶️";
  if (t.includes("apple") || u.includes("apple")) return "🍎";
  if (t.includes("shazam") || u.includes("shazam")) return "📱";
  if (t.includes("wikipedia")) return "📖";
  if (t.includes("rate")) return "⭐";
  if (t.includes("soundcloud")) return "☁️";
  if (t.includes("bandcamp")) return "🎵";
  return "🔗";
}

export default define.page(async function SharePage(ctx) {
  const id = ctx.params.id;
  const kv = await Deno.openKv();
  const result = await kv.get<ShareRecord>(["share", id]);

  if (!result.value) {
    return (
      <div class="min-h-screen text-white flex items-center justify-center vaporwave-bg">
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10 text-center">
          <h1 class="text-4xl font-bold text-primary-400 mb-4">Not Found</h1>
          <p class="text-gray-300 mb-8">This share link doesn't exist or has expired.</p>
          <a
            href="/"
            class="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
          >
            <span>← Back to Microgamma</span>
          </a>
        </div>
      </div>
    );
  }

  const { title, artist, image, info, links } = result.value;

  const ogImage = image || "https://via.placeholder.com/1200x630?text=Now+Listening";
  const pageUrl = ctx.url.toString();
  const ogDescription = info || `Listen to "${title}" by ${artist} on Microgamma`;

  return (
    <>
      <Head>
        <title>{title} by {artist} - Now Listening on Microgamma</title>
        <meta name="description" content={ogDescription} />
        <meta property="og:title" content={`${title} by ${artist}`} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="music.song" />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} by ${artist}`} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative z-10">
          <div class="max-w-2xl mx-auto">
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 overflow-hidden shadow-2xl">
              {image && (
                <div class="relative">
                  <img
                    src={image}
                    alt={title}
                    class="w-full aspect-square object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                </div>
              )}

              <div class="p-8 md:p-12">
                <div class="mb-6">
                  <span class="inline-block text-primary-400 text-sm font-semibold mb-2 bg-primary-900/50 px-3 py-1 rounded-full">
                    🎵 NOW LISTENING
                  </span>
                </div>

                <div class="mb-8">
                  <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {title}
                  </h1>
                  <p class="text-2xl text-primary-300 font-semibold">{artist}</p>
                </div>

                {info && (
                  <div class="mb-8">
                    <p class="text-gray-300 text-sm leading-relaxed">{info}</p>
                  </div>
                )}

                {links && links.length > 0 && (
                  <div class="mb-8">
                    <p class="text-sm text-gray-400 mb-3">Find it on:</p>
                    <div class="flex flex-wrap gap-2">
                      {links.map((linkItem: LinkItem, idx: number) => (
                        <a
                          key={idx}
                          href={linkItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center space-x-1 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                        >
                          <span>{getLinkEmoji(linkItem.text, linkItem.link)}</span>
                          <span>{linkItem.text}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div class="mt-12 pt-8 border-t border-primary-400/30 text-center">
                  <p class="text-gray-300 mb-6 text-lg">
                    Or download Microgamma and start building your music library
                  </p>
                  <a
                    href="/downloads"
                    class="inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <span>📥 Download Microgamma</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-8 text-center">
              <p class="text-gray-400 text-sm">
                Share this link on WhatsApp, Telegram, or any social media to show what you're listening to! 🎶
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
