import DocPage from "../../components/DocPage.tsx";

export default function PlaybackAndAlbumsPage() {
  return (
    <DocPage slug="playback-and-albums">
      <p>
        Musicbox is built for listening to whole albums, not just shuffling
        singles. Playback flows track-to-track without gaps, loudness stays
        even, and every album page doubles as a place to explore the record —
        its artwork, the exact pressing you own, and other releases worth a
        listen.
      </p>

      <h2>Gapless & overlapping playback</h2>
      <p>
        When you play from the desktop app (or any device acting as the
        streamer), Musicbox preloads the next track and hands audio over the
        instant the current one ends — no silence, no stutter between songs. On
        continuous records — live sets, DJ mixes, concept albums that bleed one
        track into the next — the transition is seamless, exactly as the artist
        intended.
      </p>
      <p>
        It just works: there's no setting to enable. Clients connected to a
        streamer hear the same gapless output the streamer produces.
      </p>

      <h2>Consistent volume: track vs album gain</h2>
      <p>
        Musicbox measures each track's loudness (EBU R128 / ReplayGain) and can
        level playback so nothing jumps out or disappears. Turn it on under{" "}
        <strong>Settings → Playback → Normalize volume</strong>.
      </p>
      <p>
        Underneath it you'll find{" "}
        <strong>Album mode</strong>. With it off, every track is levelled
        independently (<em>track gain</em>) — best for a shuffle of unrelated
        songs. With it on, Musicbox uses{" "}
        <em>album gain</em>: the whole album is levelled as a unit, so the quiet
        intro and the loud finale keep their intended relationship to each
        other. Leave it on when you listen to albums front-to-back.
      </p>

      <h2>Full-screen artwork</h2>
      <p>
        Click an album's cover to open it full-screen. If the release has more
        than one image, a thumbnail rail lets you flip between them; the arrow
        keys move through the set and <strong>Esc</strong>{" "}
        closes it. Great for reading liner notes on a scanned booklet or just
        admiring a cover at full size.
      </p>

      <h2>Release details & alternate covers</h2>
      <p>
        Every album page carries a <strong>Release info</strong>{" "}
        chip. Open it for a bottom sheet describing the specific pressing —
        format, label, year and the rest of the details Musicbox looks up from
        {" "}
        <a href="https://www.discogs.com" target="_blank" rel="noopener">
          Discogs
        </a>{" "}
        (see the <a href="/docs/discogs-token">Discogs token</a>{" "}
        page to enable lookups on the free tier).
      </p>
      <p>
        Not happy with the cover Musicbox picked? Hit <strong>Covers</strong>
        {" "}
        to browse candidate artwork from other pressings of the same record and
        set the one you like as the album's cover.
      </p>

      <h2>Similar albums & artists</h2>
      <p>
        Each album page suggests related listening — similar albums already in
        your own library, plus related records surfaced from Discogs. It's an
        easy way to fall back into your collection instead of reaching for a
        streaming service's recommendations.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          Gapless transitions and loudness normalization are applied by the
          streamer, so they behave the same on every device you connect to it.
        </li>
        <li>
          Album gain is read from ReplayGain / R128 tags when present, and
          derived from the album's tracks when it isn't — so it works even on
          untagged rips.
        </li>
        <li>
          Release details, alternate covers and similar records all rely on
          Discogs lookups. On the free tier, add your own{" "}
          <a href="/docs/discogs-token">Discogs token</a> to turn them on.
        </li>
      </ul>
    </DocPage>
  );
}
