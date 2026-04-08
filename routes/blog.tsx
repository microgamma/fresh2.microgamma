import { Head } from "fresh/runtime";
import BlogContent from "../islands/BlogContent.tsx";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Microgamma</title>
        <meta
          name="description"
          content="Follow our blog for the latest insights on music ownership, digital rights, and the future of creative economy."
        />
      </Head>

      {/* Blog Section */}
      <section class="relative text-white min-h-[60vh] md:min-h-screen overflow-hidden vaporwave-bg">
        {/* Background overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span class="gradient-text">Blog</span>
            </h1>
          </div>

          {/* Blog Posts - Client-side fetched */}
          <div class="max-w-6xl mx-auto">
            <BlogContent />
          </div>
        </div>
      </section>
    </>
  );
}
