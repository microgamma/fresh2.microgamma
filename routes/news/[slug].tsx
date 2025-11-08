import { Head } from "$fresh/src/runtime/head.ts";
import Layout from "../../components/Layout.tsx";

const newsItems = [
  {
    slug: "microgamma-v2-40-3-released",
    date: "2025-09-20",
    title: "Microgamma v2.40.3 Released",
    type: "Release Notes",
    content:
      "We are excited to announce the release of Microgamma v2.40.3! This update includes significant improvements to audio streaming performance, several bug fixes, and enhanced stability. Key features include better WebRTC connection handling and optimized memory usage. Download the latest version from our downloads page.",
  },
  {
    slug: "technical-webrtc-audio-streaming",
    date: "2025-09-15",
    title: "Technical Deep Dive: WebRTC Audio Streaming",
    type: "Technical Article",
    content:
      "WebRTC (Web Real-Time Communication) is the backbone of Microgamma's audio streaming technology. Unlike traditional streaming services that route audio through centralized servers, Microgamma establishes direct peer-to-peer connections between your device and the player. This approach eliminates latency, reduces bandwidth costs, and ensures your music stays private. In this article, we explore the technical implementation and benefits of this innovative approach.",
  },
  {
    slug: "important-update-code-signing",
    date: "2025-09-10",
    title: "Important Update: Code Signing",
    type: "News Update",
    content:
      "Due to our commitment to open-source development and avoiding proprietary code signing certificates, Microgamma executables for Windows and macOS are not digitally signed. This may trigger security warnings on your system. Rest assured, Microgamma is safe to use - simply allow the application in your security settings when prompted. We are exploring options for code signing in future releases.",
  },
];

export default function NewsArticlePage(
  { params }: { params: { slug: string } },
) {
  const article = newsItems.find((item) => item.slug === params.slug);

  if (!article) {
    return (
      <>
        <Head>
          <title>Article Not Found - Microgamma</title>
        </Head>
        <Layout>
          <section class="bg-black text-white py-20 px-4 min-h-screen flex items-center">
            <div class="container mx-auto text-center">
              <h1 class="text-5xl font-bold mb-8 text-pink-400">
                Article Not Found
              </h1>
              <p class="text-xl mb-8">
                The requested article could not be found.
              </p>
              <a href="/news" class="text-pink-400 hover:text-pink-300">
                ← Back to News
              </a>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} - Microgamma</title>
      </Head>

      <Layout>
        <section class="bg-black text-white py-20 px-4 min-h-screen">
          <div class="container mx-auto max-w-4xl">
            <article class="bg-gray-900 p-8 rounded-lg border border-pink-400">
              <div class="flex justify-between items-start mb-6">
                <h1 class="text-4xl font-bold text-pink-400">
                  {article.title}
                </h1>
                <span class="text-sm text-cyan-400 bg-cyan-900 px-3 py-1 rounded">
                  {article.type}
                </span>
              </div>
              <p class="text-gray-300 mb-8 text-lg">{article.date}</p>
              <div class="prose prose-invert max-w-none">
                <p class="text-white text-lg leading-relaxed">
                  {article.content}
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-gray-700">
                <a
                  href="/news"
                  class="text-pink-400 hover:text-pink-300 transition"
                >
                  ← Back to News
                </a>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
