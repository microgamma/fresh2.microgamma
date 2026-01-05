import { ComponentChildren } from "preact";
import Header from "../islands/Header.tsx";
import { State } from "../utils.ts";

interface LayoutProps {
  children?: ComponentChildren;
  user?: State["user"];
}

export default function MainLayout({ children, user }: LayoutProps) {
  return (
    <div class="min-h-screen bg-gray-900">
      <Header user={user} />
      {children}
      {/* Footer */}
      <footer class="bg-accent-800 text-white py-12 border-t border-primary-400">
        <div class="container mx-auto text-center">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-primary-400 mb-4">Microgamma</h3>
            <p class="text-gray-300">A Brave New Audio Player</p>
          </div>
          <div class="flex justify-center space-x-8 mb-6">
            <a
              href="mailto:dcavaliere@microgamma.io"
              target="_blank"
              class="text-primary-400 hover:text-primary-300 transition"
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
              href="https://discord.gg/AbmKZ6QU"
              target="_blank"
              class="text-gray-400 hover:text-white transition"
            >
              💻 Discord
            </a>
          </div>
          <p class="text-gray-400 text-sm">
            © 2026 Microgamma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
