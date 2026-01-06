import { ComponentChildren } from "preact";

interface LayoutProps {
  children?: ComponentChildren;
}

export default function PrivateLayout({ children }: LayoutProps) {
  return (
    <>
      <nav
        class={`w-full bg-gray-900 text-white p-4 transition-all duration-1000 overflow-hidden z-50 md:py-4`}
      >
        <div class="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <h1 class="text-xl font-bold">
            <a href="/" f-client-nav={false}>Microgamma</a>
          </h1>
          <ul class="flex flex-row space-x-3">
          </ul>
        </div>
      </nav>
      <div class="min-h-screen bg-purple-800">
        {children}
      </div>
    </>
  );
}
