import { ComponentChildren } from "preact";
import Header from "../islands/Header.tsx";

interface LayoutProps {
  children?: ComponentChildren;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div class="min-h-screen">
      <Header />
      {children}
      {/* Footer */}
      <footer class="bg-purple-800 text-white py-12 border-t border-pink-400">
        <div class="container mx-auto text-center">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-pink-400 mb-4">Microgamma</h3>
            <p class="text-gray-300">A Brave New Audio Player</p>
          </div>
          <div class="flex justify-center space-x-8 mb-6">
            <a
              href="mailto:dcavaliere@microgamma.io"
              target="_blank"
              class="text-pink-400 hover:text-pink-300 transition"
            >
              📧 Contact
            </a>
            <a
              href="https://x.com/microgamma_io"
              target="_blank"
              class="text-cyan-400 hover:text-cyan-300 transition"
            >
              🐦 Twitter
            </a>
            <a
              href="https://github.com/microgamma"
              target="_blank"
              class="text-gray-400 hover:text-white transition"
            >
              💻 GitHub
            </a>
          </div>
          <p class="text-gray-400 text-sm">
            © 2025 Microgamma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
