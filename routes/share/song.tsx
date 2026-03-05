import { Head } from "fresh/runtime";
import { PageProps } from "fresh";

interface LinkItem {
  link: string;
  text: string;
}

interface SongMetadata {
  title?: string;
  artist?: string;
  image?: string;
  links?: LinkItem[];
}

function parseSongParams(url: URL): SongMetadata {
  const linksParam = url.searchParams.get("links") || "";
  let links: LinkItem[] = [];

  if (linksParam) {
    try {
      links = JSON.parse(linksParam);
    } catch (error) {
      console.error("Failed to parse links JSON:", error);
      links = [];
    }
  }

  return {
    title: url.searchParams.get("title") || "Unknown Song",
    artist: url.searchParams.get("artist") || "Unknown Artist",
    image: url.searchParams.get("image") || "", // Comes from query params
    links: links, // Multiple music platform links with custom text
  };
}

export default function SongPreviewPage({ url }: PageProps) {
  const song = parseSongParams(url);

  // Placeholder image - will be replaced with generated image later
  const ogImage = song.image || "https://via.placeholder.com/1200x630?text=Now+Listening";
  const pageUrl = url.toString();
  const description = `${song.artist} is listening to "${song.title}" on Microgamma`;

  return (
    <>
      <Head>
        <title>
          {song.title} by {song.artist} - Now Listening on Microgamma
        </title>
        <meta
          name="description"
          content={description}
        />
        {/* Open Graph tags for social media preview */}
        <meta property="og:title" content={`${song.title} by ${song.artist}`} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="music.song" />
        <meta property="og:url" content={pageUrl} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${song.title} by ${song.artist}`} />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay */}
        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative z-10">
          <div class="max-w-2xl mx-auto">
            {/* Music player card */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 overflow-hidden shadow-2xl">
              {/* Album art */}
              {song.image && (
                <div class="relative">
                  <img
                    src={song.image}
                    alt={song.title}
                    class="w-full aspect-square object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                </div>
              )}

              {/* Content */}
              <div class="p-8 md:p-12">
                <div class="mb-6">
                  <span class="inline-block text-primary-400 text-sm font-semibold mb-2 bg-primary-900/50 px-3 py-1 rounded-full">
                    🎵 NOW LISTENING
                  </span>
                </div>

                <div class="mb-8">
                  <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {song.title}
                  </h1>
                  <p class="text-2xl text-primary-300 font-semibold">{song.artist}</p>
                </div>

                {/* Music and resource links */}
                {song.links && song.links.length > 0 && (
                  <div class="mb-8">
                    <p class="text-sm text-gray-400 mb-3">Find it on:</p>
                    <div class="flex flex-wrap gap-2">
                      {song.links.map((linkItem, idx) => {
                        // Get emoji based on link text or URL
                        let emoji = "🔗";
                        const text = linkItem.text.toLowerCase();
                        const url = linkItem.link.toLowerCase();

                        if (text.includes("spotify") || url.includes("spotify")) {
                          emoji = "🟢";
                        } else if (text.includes("youtube") || url.includes("youtube")) {
                          emoji = "▶️";
                        } else if (text.includes("apple") || url.includes("apple")) {
                          emoji = "🍎";
                        } else if (text.includes("shazam") || url.includes("shazam")) {
                          emoji = "📱";
                        } else if (text.includes("wikipedia")) {
                          emoji = "📖";
                        } else if (text.includes("rate")) {
                          emoji = "⭐";
                        } else if (text.includes("soundcloud")) {
                          emoji = "☁️";
                        } else if (text.includes("bandcamp")) {
                          emoji = "🎵";
                        }

                        return (
                          <a
                            key={idx}
                            href={linkItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center space-x-1 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                          >
                            <span>{emoji}</span>
                            <span>{linkItem.text}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Call to action section */}
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

            {/* Info section */}
            <div class="mt-8 text-center">
              <p class="text-gray-400 text-sm">
                Share this link on WhatsApp, Telegram, or any social media to show what you're
                listening to! 🎶
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
