import { Head } from "fresh/runtime";
import SongShareButton from "../../islands/SongShareButton.tsx";
import { generateSongShareUrl } from "../../utils/shareUtils.ts";

export default function SongShareDemo() {
  // Example songs for demonstration
  const exampleSongs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=630&fit=crop",
      spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMwbk",
      description:
        "Experience the energy and nostalgia of this synthwave-inspired hit from The Weeknd's album 'After Hours'",
    },
    {
      title: "Tainted Love",
      artist: "Soft Cell",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=630&fit=crop",
      spotifyUrl: "https://open.spotify.com/track/3xFT1T0eRvY3NfxjlMFQdR",
      description:
        "A classic synthpop masterpiece that defined the 1980s electronic music scene",
    },
    {
      title: "Retrograde",
      artist: "James Blake",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=630&fit=crop",
      spotifyUrl: "https://open.spotify.com/track/3NvJd2t4DwABVWc82mwPWE",
      description:
        "A hauntingly beautiful track that showcases James Blake's atmospheric production style",
    },
  ];

  return (
    <>
      <Head>
        <title>Song Share Demo - Microgamma</title>
        <meta
          name="description"
          content="Demo page showing how to share songs on WhatsApp, Telegram, and other social media with beautiful preview cards"
        />
      </Head>

      <div class="min-h-screen text-white px-4 py-8 relative overflow-hidden vaporwave-bg">
        {/* Background overlay */}
        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative z-10">
          <div class="max-w-6xl mx-auto">
            {/* Header */}
            <div class="text-center mb-12">
              <h1 class="text-5xl font-bold text-primary-400 mb-4">🎵 Song Share Demo</h1>
              <p class="text-xl text-gray-300">
                Click the share button on any song to generate a shareable preview link
              </p>
              <p class="text-sm text-gray-400 mt-2">
                Share on WhatsApp, Telegram, Twitter, or copy the link directly
              </p>
            </div>

            {/* Song cards grid */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {exampleSongs.map((song) => (
                <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 shadow-2xl hover:shadow-primary-400/50 transition-shadow overflow-visible">
                  {/* Album art */}
                  <div class="overflow-hidden rounded-t-lg">
                    <img
                      src={song.image}
                      alt={song.title}
                      class="w-full aspect-video object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-1">{song.title}</h3>
                    <p class="text-primary-400 font-semibold mb-3">{song.artist}</p>
                    <p class="text-sm text-gray-400 mb-4">{song.description}</p>

                    {/* Share button */}
                    <div class="flex gap-2">
                      <SongShareButton
                        title={song.title}
                        artist={song.artist}
                        image={song.image}
                        spotifyUrl={song.spotifyUrl}
                        description={song.description}
                      />

                      {song.spotifyUrl && (
                        <a
                          href={song.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                          <span>🎵</span>
                          <span>Listen</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Documentation section */}
            <div class="card-glow bg-black/60 backdrop-blur-sm rounded-lg border border-primary-400/30 p-8 mb-12">
              <h2 class="text-3xl font-bold text-primary-400 mb-6">📚 Usage Guide</h2>

              <div class="space-y-8">
                {/* URL Format */}
                <div>
                  <h3 class="text-xl font-semibold text-white mb-3">URL Format</h3>
                  <p class="text-gray-300 mb-4">
                    Song preview URLs are generated using the following format:
                  </p>
                  <div class="bg-gray-900/50 rounded p-4 border border-primary-400/20 overflow-auto">
                    <code class="text-primary-300 text-sm">
                      /share/song?title=TITLE&artist=ARTIST&image=IMAGE_URL&url=SPOTIFY_URL&description=DESCRIPTION
                    </code>
                  </div>
                </div>

                {/* Query Parameters */}
                <div>
                  <h3 class="text-xl font-semibold text-white mb-3">Query Parameters</h3>
                  <div class="space-y-3">
                    <div class="border-l-2 border-primary-400 pl-4">
                      <p class="font-mono text-primary-300">title</p>
                      <p class="text-sm text-gray-400">Song title (required)</p>
                    </div>
                    <div class="border-l-2 border-primary-400 pl-4">
                      <p class="font-mono text-primary-300">artist</p>
                      <p class="text-sm text-gray-400">Artist name (required)</p>
                    </div>
                    <div class="border-l-2 border-primary-400 pl-4">
                      <p class="font-mono text-primary-300">image</p>
                      <p class="text-sm text-gray-400">
                        Album art URL (optional) - Used for OG tags and preview
                      </p>
                    </div>
                    <div class="border-l-2 border-primary-400 pl-4">
                      <p class="font-mono text-primary-300">url</p>
                      <p class="text-sm text-gray-400">
                        Spotify or music player URL (optional) - Shown as listen button
                      </p>
                    </div>
                    <div class="border-l-2 border-primary-400 pl-4">
                      <p class="font-mono text-primary-300">description</p>
                      <p class="text-sm text-gray-400">Custom description (optional)</p>
                    </div>
                  </div>
                </div>

                {/* Example */}
                <div>
                  <h3 class="text-xl font-semibold text-white mb-3">TypeScript Example</h3>
                  <div class="bg-gray-900/50 rounded p-4 border border-primary-400/20 overflow-auto">
                    <pre class="text-primary-300 text-sm">
{`import { generateSongShareUrl } from '../utils/shareUtils';

const song = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  image: 'https://example.com/image.jpg',
  spotifyUrl: 'https://spotify.com/track/...',
  description: 'Amazing synthwave track'
};

// Generate share URL
const shareUrl = generateSongShareUrl(song);

// The URL will look like:
// /share/song?title=Blinding%20Lights&artist=The%20Weeknd&image=...`}
                    </pre>
                  </div>
                </div>

                {/* Using in Components */}
                <div>
                  <h3 class="text-xl font-semibold text-white mb-3">Using SongShareButton Component</h3>
                  <div class="bg-gray-900/50 rounded p-4 border border-primary-400/20 overflow-auto">
                    <pre class="text-primary-300 text-sm">
{`import SongShareButton from '../islands/SongShareButton';

export default function MyComponent() {
  return (
    <SongShareButton
      title="Song Title"
      artist="Artist Name"
      image="https://example.com/image.jpg"
      spotifyUrl="https://spotify.com/track/..."
      description="Beautiful song"
    />
  );
}`}
                    </pre>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 class="text-xl font-semibold text-white mb-3">✨ Features</h3>
                  <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start space-x-3">
                      <span class="text-primary-400 font-bold">✓</span>
                      <span>Beautiful OG tags for rich previews on WhatsApp, Telegram, and Twitter</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-primary-400 font-bold">✓</span>
                      <span>One-click sharing to WhatsApp, Telegram, and Twitter</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-primary-400 font-bold">✓</span>
                      <span>Copy link to clipboard functionality</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-primary-400 font-bold">✓</span>
                      <span>Responsive design works on mobile and desktop</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="text-primary-400 font-bold">✓</span>
                      <span>Optional Spotify listen button</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div class="text-center">
              <a
                href="/"
                class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
              >
                <span>← Back to Microgamma</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
