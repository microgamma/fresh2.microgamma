/**
 * Search links to the streaming services for "<artist> <title>". Pure outbound
 * URLs — no API, no scraping. Mirrors `buildProviderLinks` in the app
 * (apps/musicbox-web/src/app/external-providers/providers.ts) so a shared
 * page offers the same "Find on…" row the app's Song Info sheet does. Keep the
 * two lists in step.
 */
export interface ProviderLink {
  name: string;
  emoji: string;
  url: string;
}

export function buildProviderLinks(query: string): ProviderLink[] {
  const q = encodeURIComponent(query);
  return [
    { name: "YouTube Music", emoji: "▶️", url: `https://music.youtube.com/search?q=${q}` },
    { name: "Spotify", emoji: "🟢", url: `https://open.spotify.com/search/${q}` },
    { name: "Bandcamp", emoji: "🎵", url: `https://bandcamp.com/search?q=${q}` },
    { name: "Amazon Music", emoji: "🛒", url: `https://music.amazon.com/search/${q}` },
  ];
}
