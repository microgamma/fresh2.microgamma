import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { State } from "../utils.ts";

interface HeaderProps {
  user?: State["user"];
  roles?: string[];
}

const NAV = [
  { href: "/", label: "Home" },
  { href: "/downloads", label: "Downloads" },
  { href: "/news", label: "News" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
];

export default function Header({ user, roles }: HeaderProps) {
  const scrolled = useSignal(false);
  const open = useSignal(false);

  useEffect(() => {
    const handleScroll = () => {
      scrolled.value = globalThis.scrollY > 80;
    };
    globalThis.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      class={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled.value
          ? "bg-[#0a0418]/85 border-primary-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(255,45,149,0.15)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div class="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <a href="/" class="group flex items-center gap-3">
          <span class="hidden sm:block h-2 w-2 rotate-45 bg-cyber shadow-[0_0_10px_var(--color-cyber)]">
          </span>
          <span class="font-head text-lg md:text-xl tracking-widest text-white group-hover:neon-cyan transition">
            MICRO<span class="text-primary-400">GAMMA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul class="hidden md:flex items-center gap-1 font-mono-tech text-sm uppercase tracking-widest">
          {NAV.map((item) => (
            <li>
              <a
                href={item.href}
                class="relative px-3 py-2 text-accent-300 hover:text-cyber transition after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-cyber after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </a>
            </li>
          ))}
          {roles?.includes("admin") && (
            <li>
              <a
                href="/private/dashboard"
                class="px-3 py-2 text-sun hover:text-white transition"
              >
                Dashboard
              </a>
            </li>
          )}
          <li class="ml-2">
            {user
              ? (
                <a
                  href="/private/profile"
                  f-client-nav={false}
                  class="flex items-center transition hover:opacity-80"
                >
                  {user.picture
                    ? (
                      <img
                        src={user.picture}
                        alt="User profile"
                        class="w-7 h-7 rounded-full object-cover border-2 border-cyber shadow-[0_0_10px_var(--color-cyber)]"
                      />
                    )
                    : (
                      <span class="text-xl" title={user.email || "User"}>
                        👤
                      </span>
                    )}
                </a>
              )
              : (
                <a
                  href="/login"
                  f-client-nav={false}
                  class="btn-ghost text-xs px-4 py-2 rounded-sm"
                >
                  Login
                </a>
              )}
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open.value}
          onClick={() => (open.value = !open.value)}
          class="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            class={`block h-0.5 w-6 bg-cyber transition-transform ${
              open.value ? "translate-y-2 rotate-45" : ""
            }`}
          >
          </span>
          <span
            class={`block h-0.5 w-6 bg-primary-400 transition-opacity ${
              open.value ? "opacity-0" : ""
            }`}
          >
          </span>
          <span
            class={`block h-0.5 w-6 bg-cyber transition-transform ${
              open.value ? "-translate-y-2 -rotate-45" : ""
            }`}
          >
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open.value && (
        <ul class="md:hidden bg-[#0a0418]/95 backdrop-blur-md border-t border-primary-500/20 px-4 py-4 space-y-1 font-mono-tech uppercase tracking-widest text-sm">
          {NAV.map((item) => (
            <li>
              <a
                href={item.href}
                onClick={() => (open.value = false)}
                class="block px-3 py-2 text-accent-300 hover:text-cyber hover:bg-white/5 rounded transition"
              >
                {item.label}
              </a>
            </li>
          ))}
          {roles?.includes("admin") && (
            <li>
              <a
                href="/private/dashboard"
                class="block px-3 py-2 text-sun hover:bg-white/5 rounded transition"
              >
                Dashboard
              </a>
            </li>
          )}
          <li>
            <a
              href={user ? "/private/profile" : "/login"}
              f-client-nav={false}
              class="block px-3 py-2 text-cyber hover:bg-white/5 rounded transition"
            >
              {user ? "Profile" : "Login"}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
