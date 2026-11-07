import DocPage from "../../components/DocPage.tsx";

export default function PlaybackAndAlbumsPage() {
  return (
    <DocPage slug="playback-and-albums">
      <p>
        Microgamma is built for listening to whole albums, not just shuffling
        singles. Playback flows track-to-track without gaps, loudness stays
        even, and every album page doubles as a place to explore the record —
        its artwork, the exact pressing you own, and other releases worth a
        listen.
      </p>

      <h2>Gapless playback &amp; crossfade</h2>
      <p>
        When you play from the desktop app (or any device acting as the
        streamer), Microgamma preloads the next track and hands audio over the
        instant the current one ends — no silence, no stutter between songs. On
        continuous records — live sets, DJ mixes, concept albums that bleed one
        track into the next — the transition is seamless, exactly as the artist
        intended.
      </p>
      <p>
        Gapless playback needs no switch of its own. A{" "}
        <strong>crossfade</strong>{" "}
        toggle on the queue's playback toolbar overlaps the end of one track
        with the start of the next when a song advances on its own. Skipping by
        hand cuts straight to the next track. Clients connected to a streamer
        hear the same output the streamer produces.
      </p>

      <h2>Consistent volume: track vs album gain</h2>
      <p>
        Microgamma measures each track's loudness (EBU R128 / ReplayGain) and
        can level playback so nothing jumps out or disappears. Turn it on under
        {" "}
        <strong>Settings → Playback → Normalize volume</strong>.
      </p>
      <p>
        Loudness is measured when a track plays, and for files a library scan
        has just brought in, so new music can level itself without a separate
        pass. Untagged files are measured with the ffmpeg installed on that
        machine. Tracks that already carry ReplayGain or R128 tags use those.
      </p>
      <p>
        Underneath it you'll find{" "}
        <strong>Album mode</strong>. With it off, every track is levelled
        independently (<em>track gain</em>) — best for a shuffle of unrelated
        songs. With it on, Microgamma uses{" "}
        <em>album gain</em>: the whole album is levelled as a unit, so the quiet
        intro and the loud finale keep their intended relationship to each
        other. Leave it on when you listen to albums front-to-back.
      </p>

      <h2>Stations</h2>
      <p>
        A station keeps picking what to play next. Start one from a song, or
        with the wand. Themed stations take a prompt you type, or a preset.
        Songs you had already queued stay in place when the station starts.
      </p>
      <p>
        Stations use the same AI features as the{" "}
        <a href="/docs/deepseek-token">DeepSeek token</a>. Recommendations
        remember earlier turns on your account.
      </p>

      <h2>Full-screen artwork</h2>
      <p>
        Click an album's cover to open it full-screen. If the release has more
        than one image, a thumbnail rail lets you flip between them; the arrow
        keys move through the set, a swipe does the same on a touch screen, and
        {" "}
        <strong>Esc</strong>{" "}
        closes it. Great for reading liner notes on a scanned booklet or just
        admiring a cover at full size.
      </p>

      <h2>Release details &amp; alternate covers</h2>
      <p>
        Every album page carries a <strong>Release info</strong>{" "}
        chip. Open it for a bottom sheet describing the specific pressing —
        format, label, year and the rest of the details Microgamma looks up from
        {" "}
        <a href="https://www.discogs.com" target="_blank" rel="noopener">
          Discogs
        </a>{" "}
        (see the <a href="/docs/discogs-token">Discogs token</a>{" "}
        page to enable lookups with the basic features).
      </p>
      <p>
        Not happy with the cover Microgamma picked? Hit <strong>Covers</strong>
        {" "}
        to browse candidate artwork from other pressings of the same record and
        set the one you like as the album's cover. Genres on the release can be
        edited. If a suggested song is one you already own,{" "}
        <strong>I have this</strong> links the suggestion to your copy.
      </p>

      <h2>Similar albums &amp; artists</h2>
      <p>
        Each album page suggests related listening — similar albums already in
        your own library, plus related records surfaced from Discogs. It's an
        easy way to fall back into your collection instead of reaching for a
        streaming service's recommendations. You can switch similar-song
        suggestions off; the choice is remembered.
      </p>
      <p>
        Song info also includes <strong>Find on</strong>{" "}
        links that open the same recording on other streaming services in your
        browser.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          Gapless transitions, crossfade, and loudness normalization are applied
          by the streamer, so they behave the same on every device you connect
          to it.
        </li>
        <li>
          Album gain is read from ReplayGain / R128 tags when present, and
          derived from the album's tracks when it isn't — so it works even on
          untagged rips.
        </li>
        <li>
          Release details, alternate covers and similar records all rely on
          Discogs lookups. With the basic features, add your own{" "}
          <a href="/docs/discogs-token">Discogs token</a> to turn them on.
        </li>
      </ul>
    </DocPage>
  );
}
