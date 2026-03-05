import { Head } from "fresh/runtime";
import { PageProps } from "fresh";

interface SongMetadata {
  title?: string;
  artist?: string;
  image?: string;
  spotifyUrl?: string;
  description?: string;
}

function parseSongParams(url: URL): SongMetadata {
  return {
    title: url.searchParams.get("title") || "Unknown Song",
    artist: url.searchParams.get("artist") || "Unknown Artist",
    image: url.searchParams.get("image") || "",
    spotifyUrl: url.searchParams.get("url") || "",
    description: url.searchParams.get("description") || "",
  };
}

export default function SongPreviewPage({ url }: PageProps) {
  const song = parseSongParams(url);

  const ogImage = song.image
    ? encodeURIComponent(song.image)
    : "https://via.placeholder.com/1200x630?text=Now+Listening";
  const pageUrl = url.toString();

  return (
    <>
      <Head>
        <title>
          {song.title} by {song.artist} - Now Listening on Microgamma
        </title>
        <meta
          name="description"
          content={
            song.description ||
            `Check out what ${song.artist} is listening to on Microgamma`
          }
        />
        {/* Open Graph tags for social media preview */}
        <meta property="og:title" content={`${song.title} by ${song.artist}`} />
        <meta
          property="og:description"
          content={
            song.description ||
            `${song.artist} is listening to "${song.title}" on Microgamma`
          }
        />
        <meta property="og:image" content={song.image || ""} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="music.song" />
        <meta property="og:url" content={pageUrl} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${song.title} by ${song.artist}`} />
        <meta
          name="twitter:description"
          content={
            song.description ||
            `${song.artist} is listening to "${song.title}" on Microgamma`
          }
        />
        <meta name="twitter:image" content={song.image || ""} />
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

                {song.description && (
                  <p class="text-gray-300 mb-6 leading-relaxed">{song.description}</p>
                )}

                {/* Action buttons */}
                <div class="flex flex-col sm:flex-row gap-4">
                  {song.spotifyUrl && (
                    <a
                      href={song.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <span>🎵 Listen on Spotify</span>
                    </a>
                  )}

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Preview link copied!");
                    }}
                    class="inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <span>📋 Copy Preview Link</span>
                  </button>

                  <a
                    href="/"
                    class="inline-flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    <span>← Back to Microgamma</span>
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
