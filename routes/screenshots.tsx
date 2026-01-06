import { Head } from "fresh/runtime";
import MainLayout from "../components/MainLayout.tsx";
import Thumbnail from "../islands/Thumbnail.tsx";

export default function ScreenshotsPage() {
  const screenshots = [
    {
      title: "Main Interface",
      description:
        "The clean, intuitive main interface showing your music library and playback controls.",
      image: "/screenshots/main_wide.webp",
      fallback: "/screenshots/main_wide.png",
    },
    {
      title: "Music Library",
      description:
        "Browse your extensive music collection with smart search and filtering options.",
      image: "/screenshots/music_library_wide.webp",
      fallback: "/screenshots/music_library_wide.png",
    },
    {
      title: "Streaming Setup",
      description:
        "Easy setup process to start streaming your music to any device instantly.",
      image: "/screenshot-setup.png",
    },
    {
      title: "Mobile Player",
      description:
        "Seamless playback on mobile devices with WebRTC streaming technology.",
      image: "/screenshot-mobile.png",
    },
    {
      title: "Settings Panel",
      description:
        "Comprehensive settings to customize your audio experience and preferences.",
      image: "/screenshot-settings.png",
    },
    {
      title: "Search & Discovery",
      description:
        "Powerful fuzzy search to find any song, artist, or album in seconds.",
      image: "/screenshot-search.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Screenshots & Interface - Microgamma</title>
        <meta
          name="description"
          content="Explore the Microgamma interface and features through screenshots. See how the underground music player puts you in control of your music collection."
        />
      </Head>

      {/* Screenshots Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Screenshots & <span class="gradient-text">Interface</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              See the underground music player that puts you in control. Explore
              every pixel of the ownership revolution.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full">
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {screenshots.map((screenshot, idx) => (
                <div
                  key={idx}
                  class="card-glow bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300 group"
                >
                  <div class="relative overflow-hidden">
                    <Thumbnail screenshot={screenshot}></Thumbnail>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                      <h3 class="text-xl font-bold text-primary-300 group-hover:text-primary-200 transition-colors">
                        {screenshot.title}
                      </h3>
                      <div class="flex items-center text-primary-400 text-sm">
                        <span class="text-lg mr-1">🖼️</span>
                        <span>Preview</span>
                      </div>
                    </div>
                    <p class="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div class="text-center mt-16">
            <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold mb-4 text-primary-300">
                Experience the Revolution
              </h3>
              <p class="text-gray-300 mb-6">
                Ready to see your music truly belong to you? Download Microgamma
                and take control of your digital music destiny.
              </p>
              <div class="flex justify-center space-x-2 text-primary-400">
                <span class="text-2xl">🎵</span>
                <span class="text-lg font-semibold">Download Now</span>
                <span class="text-2xl">🎵</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
