import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Header() {
  const scrolled = useSignal(false);
  const currentPath = useSignal(globalThis.location?.pathname);

  useEffect(() => {
    const handleScroll = () => {
      scrolled.value = globalThis.scrollY > 200;
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => currentPath.value === path;

  return (
    <nav
      class={`fixed top-0 left-0 w-full text-white p-4 transition-all duration-1000 overflow-hidden z-50 md:py-4 ${
        scrolled.value ? "bg-black/60" : "bg-transparent"
      }`}
    >
      <div class="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <h1 class="text-xl font-bold">Microgamma</h1>
        <ul class="flex flex-row space-x-3">
          <li>
            <a
              href="/"
              class={`hover:text-pink-400 transition ${
                isActive("/") ? "text-pink-400 border-b-2 border-pink-400" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/downloads"
              class={`hover:text-pink-400 transition ${
                isActive("/downloads")
                  ? "text-pink-400 border-b-2 border-pink-400"
                  : ""
              }`}
            >
              Downloads
            </a>
          </li>
          <li>
            <a
              href="/news"
              class={`hover:text-pink-400 transition ${
                isActive("/news")
                  ? "text-pink-400 border-b-2 border-pink-400"
                  : ""
              }`}
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/screenshots"
              class={`hover:text-pink-400 transition ${
                isActive("/screenshots")
                  ? "text-pink-400 border-b-2 border-pink-400"
                  : ""
              }`}
            >
              Screenshots
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
