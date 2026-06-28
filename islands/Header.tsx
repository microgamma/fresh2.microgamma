import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { State } from "../utils.ts";

interface HeaderProps {
  user?: State["user"];
  roles?: string[];
}

export default function Header({ user, roles }: HeaderProps) {
  const scrolled = useSignal(false);
  console.log({ user });

  useEffect(() => {
    const handleScroll = () => {
      scrolled.value = globalThis.scrollY > 200;
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

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
              class={`hover:text-primary-400 transition`}
            >
              Home
            </a>
          </li>
           <li>
             <a
               href="/downloads"
               class={`hover:text-primary-400 transition`}
             >
               Downloads
             </a>
           </li>
            <li>
              <a
                href="/news"
                class={`hover:text-primary-400 transition`}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="/docs"
                class={`hover:text-primary-400 transition`}
              >
                Docs
              </a>
            </li>
            <li>
             <a
               href="/blog"
               class={`hover:text-primary-400 transition`}
             >
               Blog
             </a>
           </li>
           {roles?.includes("admin") && (
             <li>
               <a
                 href="/private/dashboard"
                 class={`hover:text-primary-400 transition`}
               >
                 Dashboard
               </a>
             </li>
           )}
          <li>
            {user
              ? (
                // If user is logged in, show avatar
                <a
                  href="/private/profile"
                  f-client-nav={false}
                  class="hover:text-primary-400 transition flex items-center"
                >
                  {user.picture
                    ? (
                      <img
                        src={user.picture}
                        alt="User profile"
                        class="w-5 h-5 rounded-full object-cover border-2 border-primary-400"
                      />
                    )
                    : (
                      <span class="text-2xl" title={user.email || "User"}>
                        👤
                      </span>
                    )}
                </a>
              )
              : (
                // If user is not logged in, show login button
                <a
                  href="/login"
                  f-client-nav={false}
                  class="hover:text-primary-400 transition"
                >
                  Login
                </a>
              )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
