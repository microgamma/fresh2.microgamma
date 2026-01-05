import { Head } from "fresh/runtime";
import {
  DownloadCard,
  Platform,
  Release,
} from "../components/DownloadCard.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { cachedFetch } from "../utils.ts";

export default async function DownloadsPage() {
  interface AppRealeases {
    [platform: string]: Release[];
  }

  const releases = await cachedFetch(
    "https://signaling.microgamma.io/releases/list",
  ) as AppRealeases;

  const downloads = Object.entries(releases).map(([platform, data]) => {
    const lastRelease = data[0];

    return {
      platform: platform as Platform,
      ...lastRelease,
    };
  });

  return (
    <>
      <Head>
        <title>Download Microgamma - Own Your Music, Own Your Sound</title>
      </Head>

      {/* Downloads Section */}
      <section class="bg-gray-900 text-white py-20 px-4 min-h-screen flex items-center">
        <div class="container mx-auto text-center">
          <h1 class="text-5xl font-bold mb-8 text-primary-400">
            Download Microgamma
          </h1>
          <p class="text-xl mb-12 max-w-2xl mx-auto">
            Take ownership of your music collection. Download Microgamma and start
            streaming your personal library with complete control - no subscriptions,
            no compromises, no platform decisions.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {downloads.map((download, idx) => {
              return <DownloadCard key={idx} release={download} />;
            })}
          </div>
          <div class="bg-accent-900 p-4 rounded-lg mb-8 border border-primary-400">
            <p class="text-primary-200">
              Note: Windows and macOS executables are not code signed. You may
              need to allow them in your security settings.
            </p>
          </div>
          <div class="bg-accent-800 p-8 rounded-lg border border-primary-400">
            <h3 class="text-2xl font-semibold mb-4 text-primary-400">
              🚀 Take Ownership - Quick Start
            </h3>
            <ol class="text-left max-w-md mx-auto space-y-2">
              <li>1. Download the executable for your platform</li>
              <li>2. Unzip and Launch Microgamma</li>
              <li>3. Select your music folder</li>
              <li>
                4. Open play.microgamma.io on your phone or any other device
              </li>
              <li>5. Start streaming!</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
