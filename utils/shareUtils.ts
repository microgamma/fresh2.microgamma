/**
 * Share utilities for generating shareable preview URLs
 */

export interface SongShareParams {
  title: string;
  artist: string;
  image?: string;
}

/**
 * Generates a shareable preview URL for a song.
 * Only includes song identifiers — the share page fetches additional info (description, links) server-side.
 * @param params - Song metadata
 * @param baseUrl - Base URL (defaults to current domain or relative path on server)
 * @returns Complete shareable URL
 */
export function generateSongShareUrl(
  params: SongShareParams,
  baseUrl: string = typeof window !== "undefined" ? window.location.origin : "http://localhost",
): string {
  const url = new URL("/share/song", baseUrl);

  // Add required params (title and artist)
  url.searchParams.append("title", params.title);
  url.searchParams.append("artist", params.artist);

  // Add optional image from query params
  if (params.image) {
    url.searchParams.append("image", params.image);
  }

  // Return just the pathname and search on server, full URL on client
  if (typeof window === "undefined") {
    return url.pathname + url.search;
  }
  return url.toString();
}

/**
 * Copies a shareable URL to clipboard
 * @param url - URL to copy
 * @returns Promise that resolves when copy is complete
 */
export async function copyToClipboard(url: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(url);
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
    throw err;
  }
}

/**
 * Generates a shareable link text for different platforms
 */
export function generateShareText(
  song: SongShareParams,
  url: string,
): {
  whatsapp: string;
  telegram: string;
  twitter: string;
  generic: string;
} {
  return {
    whatsapp: `🎵 ${song.artist} - ${song.title}\n\nListen on Microgamma:\n${url}`,
    telegram: `🎵 ${song.artist} - ${song.title}\n\n👉 Listen on Microgamma:\n${url}`,
    twitter: `🎵 Now listening to "${song.title}" by ${song.artist} on Microgamma 🎧\n\n${url}`,
    generic: `Check out what I'm listening to: ${song.artist} - ${song.title}\n${url}`,
  };
}
