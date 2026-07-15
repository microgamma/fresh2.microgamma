import { ComponentChildren } from "preact";
import Header from "../islands/Header.tsx";
import Kicker from "./Kicker.tsx";
import { State } from "../utils.ts";

interface LayoutProps {
  children?: ComponentChildren;
  user?: State["user"];
  roles?: string[];
}

export default function MainLayout({ children, user, roles }: LayoutProps) {
  return (
    <div class="min-h-screen">
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <Header user={user} roles={roles} />
      <main id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer class="relative bg-accent-900 text-white pt-16 pb-10 border-t border-primary-500/30 grid-bg overflow-hidden">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber to-transparent">
        </div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <Kicker class="justify-center mb-4" label="// END_OF_TRANSMISSION" />
          <h3 class="font-display text-3xl md:text-4xl text-primary-400 mb-3 [text-shadow:0_0_18px_rgba(255,45,149,0.6)]">
            Microgamma
          </h3>
          <p class="font-head tracking-widest text-cyber-300 text-sm md:text-base mb-2">
            OWN YOUR MUSIC · OWN YOUR SOUND
          </p>
          <p class="text-accent-300 text-xs font-mono-tech uppercase tracking-[0.3em] mb-8">
            Part of the music-ownership resistance
          </p>

          <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 font-mono-tech uppercase tracking-widest text-sm">
            <a
              href="mailto:dcavaliere@microgamma.io"
              class="text-accent-300 hover:text-primary-400 transition"
            >
              ▸ Contact
            </a>
            <a
              href="https://x.com/microgamma_io"
              target="_blank"
              class="text-accent-300 hover:text-cyber transition"
            >
              ▸ Twitter
            </a>
          </div>

          <hr class="hr-neon max-w-md mx-auto mb-6" />
          <p class="text-accent-300/70 text-xs font-mono-tech tracking-widest">
            © 2026 MICROGAMMA — ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
