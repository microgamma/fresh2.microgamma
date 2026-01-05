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
        <title>News - Microgamma</title>
      </Head>

      <section class="bg-primary text-white py-20 px-4 min-h-screen">
        <div class="container mx-auto">
          <h1 class="text-5xl font-bold mb-8 text-pink-400 text-center">
            News & Updates
          </h1>
          <p class="text-xl mb-12 max-w-2xl mx-auto text-center">
            Stay updated with the latest news, technical articles, and release
            notes for Microgamma.
          </p>

          <div class="space-y-8">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                class="bg-gray-900 p-6 rounded-lg border border-pink-400"
              >
                <div class="flex justify-between items-start mb-4">
                  <h2 class="text-2xl font-semibold text-pink-400">
                    {item.title}
                  </h2>
                  <span class="text-sm text-cyan-400 bg-cyan-900 px-2 py-1 rounded">
                    {item.type}
                  </span>
                </div>
                <p class="text-gray-300 mb-4">{item.date}</p>
                <p class="text-white mb-4">{item.excerpt}</p>
                <a
                  href={`/news/${item.slug}`}
                  class="text-pink-400 hover:text-pink-300 transition"
                >
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
