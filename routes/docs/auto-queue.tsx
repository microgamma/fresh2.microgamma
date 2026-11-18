import DocPage from "../../components/DocPage.tsx";

export default function AutoQueuePage() {
  return (
    <DocPage slug="auto-queue">
      <p>
        Auto-Queue keeps choosing what plays next from the music you own. Add a
        new album and it gets shuffled into whatever is already playing. The
        no-repeat window means you hear each song once before anything repeats —
        not the same ten songs on loop.
      </p>
      <p>
        The queue stays a few songs ahead. As each track finishes, Auto-Queue
        draws one more song to fill the gap. Songs you queue by hand are left
        untouched and play first.
      </p>

      <h2>Auto-Queue sources</h2>
      <p>
        Open{" "}
        <strong>Settings → Playback → Auto-Queue sources</strong>. Three sliders
        decide how much each source feeds the queue:
      </p>
      <ul>
        <li>
          <strong>Liked songs</strong> — tracks you have liked.
        </li>
        <li>
          <strong>Recently added</strong> — music added inside the window below.
        </li>
        <li>
          <strong>Whole library</strong> — the rest of what you own.
        </li>
      </ul>
      <p>
        The weights are relative, not percentages, so they do not have to add up
        to anything in particular. Out of the box they sit at liked songs 3,
        recently added 4, and whole library 3 — about that mix in every ten
        picks. Slide one up and that source shows up more often. Set a weight to
        {" "}
        <strong>0</strong> and that source is off.
      </p>
      <p>
        Auto-Queue rolls those weights to choose a source, then picks a song
        from inside it truly at random. Every eligible song in the source has
        the same chance. A disliked song never comes back. A song already
        waiting in the queue is left out, and so is anything you have played
        inside the no-repeat window.
      </p>

      <figure class="not-prose mx-auto my-10 w-full max-w-[360px]">
        <img
          src="/screenshots/auto-queue-settings.webp"
          alt="Phone screen of Settings, Playback. Auto-Queue sources shows Liked songs, Recently added, and Whole library weights, then the Recently-added / no-repeat window in days."
          width={720}
          height={1615}
          class="block w-full h-auto rounded-2xl border border-white/10 shadow-[0_0_32px_rgba(5,217,232,0.18)]"
        />
        <figcaption class="mt-3 text-center text-sm text-accent-300">
          Settings → Playback on a phone, with Auto-Queue sources at the top.
          The weights in the picture are one mix you might choose; they start at
          3, 4 and 3, and the window starts at 7 days.
        </figcaption>
      </figure>

      <h2>Recently-added / no-repeat window</h2>
      <p>
        The <strong>Recently-added / no-repeat window</strong>{" "}
        slider is a number of days, and it does both jobs in its name. It
        defines what counts as recently added, and it sets how long a song has
        to wait before Auto-Queue may play it again. It starts at 7 days. Drop
        it to 2, as in the picture, and a song will not replay until it ages out
        of those 2 days — the same span that “recently added” covers.
      </p>

      <h2>When a source runs out</h2>
      <p>
        If the source the roll landed on has nothing left that qualifies — no
        liked songs, nothing added inside the window, or every library song
        still inside the no-repeat window — that source is skipped. The roll is
        taken again among the sources that still have songs.
      </p>
      <p>
        If every source is used up, Auto-Queue makes one last pick from the
        whole library and ignores the window, so playback can continue. If even
        that finds nothing, the queue stops refilling.
      </p>

      <h2>Stations</h2>
      <p>
        A station is the AI-guided mode of the same queue. Start one from any
        song, or with the wand on whatever is playing. You can steer it with a
        theme in plain words — “same era”, “disco only”, anything you can say —
        or pick a preset. A theme you type needs your own DeepSeek key.
      </p>
      <p>
        Stations use the same AI features as the{" "}
        <a href="/docs/deepseek-token">DeepSeek token</a>. Premium accounts get
        them out of the box. With the basic features, bring your own DeepSeek
        key. Recommendations remember earlier turns on your account, and that
        memory stays on your machine.
      </p>
      <p>
        Songs you had already queued stay where they are and play first. While a
        station is running, the no-repeat window is set aside. Each refill looks
        at the last track you played, songs you have liked recently, and what is
        already in the queue, then picks at random among the matches you
        actually own.
      </p>
      <p>
        If the AI finds nothing, Microgamma turns the station off, tells you
        “switching to your library mix”, and falls back to the weighted sources
        above.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          Weights are relative. 0 turns a source off. They do not need to sum to
          100.
        </li>
        <li>
          One slider means two things: how new “recently added” is, and how long
          before a song may replay.
        </li>
        <li>
          Disliked songs stay out of the library mix. They do not cycle back in.
        </li>
        <li>
          A station that runs dry does not go silent. You get the notice, and
          the weighted library mix takes over.
        </li>
      </ul>
    </DocPage>
  );
}
