export type Platform =
  | "linux/arm64"
  | "linux/x64";

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
  const labels = {
    "linux/arm64": {
      name: "🐧 Linux Arm64",
      description: "Supports Linux on arm64 such as Raspberry PI 64 bit.",
    },
    "linux/x64": {
      name: "🐧 Linux x86",
      description: "Supports Linux 64 bit.",
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
  };

  const colors = colorVariants[release.platform];

  const releaseDate = new Date(release.lastModified).toLocaleDateString();

  return (
    <div
      class={`p-8 bg-gray-900 border ${colors.border} rounded-lg flex flex-col justify-between`}
    >
      <h3 class={`text-2xl font-semibold mb-4 ${colors.text}`}>{data.name}</h3>
      <p class="mb-4">{data.description}</p>
      <p class="text-sm text-gray-400 mb-6">Released on {releaseDate}</p>
      <a
        href={release.url}
        class={`${colors.bg} text-white px-6 py-3 rounded-full font-semibold ${colors.hover} transition inline-block`}
      >
        Download v{version}
      </a>
    </div>
  );
}
