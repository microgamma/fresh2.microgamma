import { useState } from "preact/hooks";
import { generateSongShareUrl, copyToClipboard, generateShareText } from "../utils/shareUtils.ts";

export interface SongShareButtonProps {
  title: string;
  artist: string;
  image?: string;
}

export default function SongShareButton({
  title,
  artist,
  image,
}: SongShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const shareUrl = generateSongShareUrl({
    title,
    artist,
    image,
  });

  const shareTexts = generateShareText(
    { title, artist, image },
    shareUrl,
  );

  const handleCopy = async () => {
    try {
      await copyToClipboard(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (platform: "whatsapp" | "telegram" | "twitter") => {
    const text = encodeURIComponent(shareTexts[platform]);
    let url = "";

    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${text}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTexts.telegram)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${text}`;
        break;
    }

    window.open(url, "_blank");
    setShowMenu(false);
  };

  return (
    <div class="relative">
      {/* Main share button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        class="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
        title="Share this song"
      >
        <span>📤</span>
        <span>Share</span>
      </button>

      {/* Share menu */}
      {showMenu && (
        <div class="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-sm border border-primary-400/30 rounded-lg shadow-2xl z-[9999] overflow-hidden" style={{ pointerEvents: "auto" }}>
          <div class="p-4 border-b border-primary-400/20">
            <p class="text-sm text-gray-300 mb-3">Share "{title}" by {artist}</p>

            {/* Social share buttons */}
            <div class="flex flex-col gap-2 mb-4">
              <button
                onClick={() => handleShare("whatsapp")}
                class="w-full inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => handleShare("telegram")}
                class="w-full inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
              >
                <span>✈️</span>
                <span>Telegram</span>
              </button>

              <button
                onClick={() => handleShare("twitter")}
                class="w-full inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
              >
                <span>𝕏</span>
                <span>Twitter</span>
              </button>
            </div>

            <div class="border-t border-primary-400/20 pt-4">
              {/* Copy link button */}
              <button
                onClick={handleCopy}
                class="w-full inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
              >
                <span>📋</span>
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>

            {/* Share link preview */}
            <div class="mt-4 p-3 bg-gray-900/50 rounded border border-gray-700/50 max-h-20 overflow-auto">
              <p class="text-xs text-gray-400 break-all font-mono leading-tight">
                {shareUrl}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
