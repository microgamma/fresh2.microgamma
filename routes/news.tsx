import { Head } from "fresh/runtime";
import MainLayout from "../components/MainLayout.tsx";

export default function NewsPage() {
  const newsItems = [
    {
      slug: "microgamma-v2-40-3-released",
      date: "2025-09-20",
      title: "Microgamma v2.40.3 Released",
      type: "Release Notes",
      excerpt:
        "New version with improved audio streaming and bug fixes. Download now from the downloads page.",
      content:
        "We are excited to announce the release of Microgamma v2.40.3! This update includes significant improvements to audio streaming performance, several bug fixes, and enhanced stability. Key features include better WebRTC connection handling and optimized memory usage. Download the latest version from our downloads page.",
    },
    {
      slug: "technical-webrtc-audio-streaming",
      date: "2025-09-15",
      title: "Technical Deep Dive: WebRTC Audio Streaming",
      type: "Technical Article",
      excerpt:
        "Learn how Microgamma uses WebRTC for peer-to-peer audio streaming without server overhead.",
      content:
        "WebRTC (Web Real-Time Communication) is the backbone of Microgamma's audio streaming technology. Unlike traditional streaming services that route audio through centralized servers, Microgamma establishes direct peer-to-peer connections between your device and the player. This approach eliminates latency, reduces bandwidth costs, and ensures your music stays private. In this article, we explore the technical implementation and benefits of this innovative approach.",
    },
    {
      slug: "important-update-code-signing",
      date: "2025-09-10",
      title: "Important Update: Code Signing",
      type: "News Update",
      excerpt:
        "Windows and macOS executables are not code signed. Please allow them in your security settings.",
      content:
        "Due to our commitment to open-source development and avoiding proprietary code signing certificates, Microgamma executables for Windows and macOS are not digitally signed. This may trigger security warnings on your system. Rest assured, Microgamma is safe to use - simply allow the application in your security settings when prompted. We are exploring options for code signing in future releases.",
    },
  ];

  return (
    <>
      <Head>
        <title>News & Updates - Microgamma</title>
        <meta name="description" content="Stay updated with the latest Microgamma developments, technical insights, and announcements from the music ownership revolution." />
      </Head>

      {/* News Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              News & <span class="gradient-text">Updates</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow">
              Stay connected with the latest developments, technical insights,
              and announcements from the <span class="text-primary-300">ownership revolution</span>.
            </p>
            <div class="w-24 h-1 bg-primary-400 mx-auto mb-12 rounded-full"></div>
          </div>

          {/* News Articles Grid */}
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {newsItems.map((item, idx) => (
                <article
                  key={idx}
                  class="card-glow p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                >
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex-1">
                      <h2 class="text-2xl font-bold text-primary-300 mb-2 leading-tight">
                        {item.title}
                      </h2>
                      <div class="flex items-center space-x-4 text-sm text-gray-400">
                        <span class="flex items-center">
                          📅 {item.date}
                        </span>
                        <span class="text-primary-400 bg-primary-900/50 px-3 py-1 rounded-full text-xs font-medium">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="text-gray-300 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div class="flex items-center justify-between">
                    <a
                      href={`/news/${item.slug}`}
                      class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-all duration-200 font-medium group"
                    >
                      <span>Read More</span>
                      <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>

                    <div class="flex items-center space-x-1 text-gray-500 text-sm">
                      <span>💡</span>
                      <span>Technical</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to Action */}
            <div class="text-center">
              <div class="card-glow p-8 rounded-xl bg-accent-900/80 backdrop-blur-sm border border-primary-400/50 max-w-2xl mx-auto">
                <h3 class="text-2xl font-bold mb-4 text-primary-300">
                  Stay in the Loop
                </h3>
                <p class="text-gray-300 mb-6">
                  Follow our journey as we build the future of music ownership.
                  Every update brings us closer to a world where your music truly belongs to you.
                </p>
                <div class="flex justify-center space-x-2 text-primary-400">
                  <span class="text-2xl">📰</span>
                  <span class="text-lg font-semibold">Latest from the Revolution</span>
                  <span class="text-2xl">📰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
