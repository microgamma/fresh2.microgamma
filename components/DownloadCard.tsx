export type Platform =
  | "linux/arm64"
  | "linux/x64"
  | "darwin/arm64"
  | "win32/x64";

export interface Release {
  // this is the path starting from the root of the s3 bucket
  // aka s3 key
  key: string;
  filename: string;
  lastModified: string; // ISO encoded date string
  size: number;
  // full url
  url: string;
}

type withPlatform<T> = T & { platform: Platform };

export function DownloadCard({ release }: { release: withPlatform<Release> }) {
  const labels: Record<
    Platform,
    { name: string; description: string; notice?: string }
  > = {
    "linux/arm64": {
      name: "🐧 Linux Arm64",
      description: "Supports Linux on arm64 such as Raspberry PI 64 bit.",
    },
    "linux/x64": {
      name: "🐧 Linux x86",
      description: "Supports Linux 64 bit.",
    },
    "darwin/arm64": {
      name: "🍎 macOS",
      description: "Apple Silicon (M1/M2/M3). Code signed and notarized.",
    },
    "win32/x64": {
      name: "🪟 Windows x64",
      description:
        "Windows 10/11 64 bit. Not code signed — SmartScreen may warn.",
      notice:
        "Windows builds are not code signed. You may see a SmartScreen warning when running for the first time.",
    },
  };

  const data = labels[release.platform];

  const extractVersion = (filename: string): string => {
    const match = filename.match(/-(\d+\.\d+\.\d+)\.zip$/);
    return match ? match[1] : "unknown";
  };

  const version = extractVersion(release.filename);

  const colorVariants = {
    "linux/arm64": {
      border: "border-green-400",
      text: "text-green-400",
      bg: "bg-green-500",
      hover: "hover:bg-green-400",
    },
    "linux/x64": {
      border: "border-blue-400",
      text: "text-blue-400",
      bg: "bg-blue-500",
      hover: "hover:bg-blue-400",
    },
    "darwin/arm64": {
      border: "border-gray-400",
      text: "text-gray-300",
      bg: "bg-gray-600",
      hover: "hover:bg-gray-500",
    },
    "win32/x64": {
      border: "border-cyan-400",
      text: "text-cyan-400",
      bg: "bg-cyan-600",
      hover: "hover:bg-cyan-500",
    },
  };

  const colors = colorVariants[release.platform];

  const releaseDate = new Date(release.lastModified).toLocaleDateString();

  return (
    <div class="hud-card rounded-sm p-8 flex flex-col justify-between">
      <h3 class={`font-head text-xl mb-4 ${colors.text}`}>
        {data.name}
      </h3>
      <p class="text-accent-300 mb-4">{data.description}</p>
      {data.notice && (
        <div class="mb-4 p-3 bg-sun/10 border border-sun/40 rounded-sm text-sm text-sun font-mono-tech">
          ⚠️ {data.notice}
        </div>
      )}
      <p class="text-xs text-accent-300/60 font-mono-tech uppercase tracking-widest mb-6">
        Released {releaseDate}
      </p>
      <a
        href={release.url}
        class={`${colors.bg} text-white px-6 py-3 rounded-sm font-head text-sm uppercase tracking-widest ${colors.hover} transition inline-block text-center`}
      >
        ▸ Download v{version}
      </a>
    </div>
  );
}
