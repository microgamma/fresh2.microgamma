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
      <p>
        Under Crossfade, <strong>Keep albums intact</strong>{" "}
        — “Play straight through between tracks of the same album” — turns that
        overlap off between consecutive songs from the same album. Those tracks
        play gapless, the way the record was mastered. Crossfade still blends
        songs that are not part of that album.
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
      <p>
        With normalization on, you don't have to remember to analyse anything. A
        track that has never been measured is queued for measurement the first
        time it plays — or its whole album, in album mode — and is levelled from
        its next play on.
      </p>

      <h2>Auto-Queue</h2>
      <p>
        When you are not playing an album straight through,{" "}
        <a href="/docs/auto-queue">Auto-Queue</a>{" "}
        chooses what comes next from the music you own. Add a new album and it
        is shuffled into what you are already listening to. A no-repeat window
        means you hear each song once before anything repeats.
      </p>
      <p>
        Under <strong>Settings → Playback → Auto-Queue sources</strong>{" "}
        you set how much liked songs, recently added music, and the whole
        library each feed the queue. The weights are relative, and 0 turns a
        source off. The window slider, in days, defines “recently added” and how
        long a played song waits before it can play again. The{" "}
        <a href="/docs/auto-queue">Auto-Queue</a>{" "}
        page covers the sliders, what happens when a source runs out, and
        stations.
      </p>

      <h2>Stations</h2>
      <p>
        A station is the AI-guided mode of that same queue. Start one from a
        song, or with the wand. Themed stations take a prompt you type, or a
        preset. Songs you had already queued stay in place and play first.
      </p>
      <p>
        Stations use the same AI features as the{" "}
        <a href="/docs/deepseek-token">DeepSeek token</a>. Premium accounts get
        them out of the box; with the basic features, bring your own DeepSeek
        key. A theme you type in your own words needs that key. Recommendations
        remember earlier turns on your account. If the AI finds nothing you own,
        Microgamma turns the station off, tells you it is switching to your
        library mix, and falls back to the weighted sources.
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
