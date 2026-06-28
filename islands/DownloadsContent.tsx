import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { DownloadCard, Platform, Release } from "../components/DownloadCard.tsx";

interface DownloadItem extends Release {
  platform: Platform;
}

export default function DownloadsContent() {
  const downloads = useSignal<DownloadItem[] | null>(null);
  const error = useSignal(false);

  useEffect(() => {
    fetch("/api/releases")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((releases: Record<string, Release[]>) => {
        downloads.value = Object.entries(releases)
          .filter(([platform]) => platform !== "darwin/arm64" && platform !== "win32/x64")
          .map(([platform, data]) => ({
            platform: platform as Platform,
            ...data[0],
          }));
      })
      .catch(() => {
        error.value = true;
      });
  }, []);

  if (error.value) {
    return (
      <div class="text-center py-12">
        <p class="text-gray-400">Failed to load downloads. Please try again later.</p>
      </div>
    );
  }

  if (!downloads.value) {
    return (
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-300">
          Choose Your Platform
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              class="p-8 bg-gray-900 border border-gray-700 rounded-lg animate-pulse"
            >
              <div class="h-8 bg-gray-700 rounded w-40 mb-4" />
              <div class="h-4 bg-gray-700 rounded w-64 mb-4" />
              <div class="h-4 bg-gray-700 rounded w-32 mb-6" />
              <div class="h-12 bg-gray-700 rounded-full w-40" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-300">
        Choose Your Platform
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {downloads.value.map((download, idx) => (
          <DownloadCard key={idx} release={download} />
        ))}
      </div>
    </div>
  );
}
