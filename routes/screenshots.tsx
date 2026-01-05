import { Head } from "fresh/runtime";
import MainLayout from "../components/MainLayout.tsx";
import Thumbnail from "../islands/Thumbnail.tsx";

export default function ScreenshotsPage() {
  const screenshots = [
    {
      title: "Main Interface",
      description:
        "The clean, intuitive main interface showing your music library and playback controls.",
      image: "/screenshots/main_wide.png",
    },
    {
      title: "Music Library",
      description:
        "Browse your extensive music collection with smart search and filtering options.",
      image: "/screenshots/music_library_wide.png",
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
        <title>Screenshots - Microgamma</title>
      </Head>

      <section class="bg-primary text-white py-20 px-4 min-h-screen">
        <div class="container mx-auto">
          <h1 class="text-5xl font-bold mb-8 text-pink-400 text-center">
            Screenshots
          </h1>
          <p class="text-xl mb-12 max-w-2xl mx-auto text-center">
            Explore Microgamma's interface and features through our screenshot
            gallery.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                class="bg-gray-900 rounded-lg overflow-hidden border border-pink-400"
              >
                <Thumbnail screenshot={screenshot}></Thumbnail>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-pink-400 mb-2">
                    {screenshot.title}
                  </h3>
                  <p class="text-gray-300">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
