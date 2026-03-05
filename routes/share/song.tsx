import { Head } from "fresh/runtime";
import { PageProps } from "fresh";

interface SongMetadata {
  title?: string;
  artist?: string;
  image?: string;
  playUrl?: string;
}

function parseSongParams(url: URL): SongMetadata {
  return {
    title: url.searchParams.get("title") || "Unknown Song",
    artist: url.searchParams.get("artist") || "Unknown Artist",
    image: "", // Will be generated later
    playUrl: "", // Will be generated from external service
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

                {/* Action buttons */}
                <div class="flex flex-col sm:flex-row gap-4">
                  {song.playUrl && (
                    <a
                      href={song.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <span>🎵 Play Now</span>
                    </a>
                  )}

                  {!song.playUrl && (
                    <div class="inline-flex items-center justify-center space-x-2 bg-gray-600 text-gray-300 font-bold py-3 px-6 rounded-lg opacity-50 cursor-not-allowed">
                      <span>🎵 Play Now</span>
                      <span class="text-xs">(loading...)</span>
                    </div>
                  )}

                  <a
                    href="/downloads"
                    class="inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
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
