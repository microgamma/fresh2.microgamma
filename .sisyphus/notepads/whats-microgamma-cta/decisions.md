# Decisions

- Chose to keep `scroll-behavior: smooth` implicit (native) rather than forcing it globally, to avoid side effects on other pages.
- Used `card-glow` class for the new grid items to match existing design language.
- Simplified the explainer from 4 card-glow blocks to 6 individual paragraphs with emojis for visual impact.
- Removed `card-glow`, borders, hover effects, and `md:grid-cols-2` layout—replaced with clean `space-y-4` flow.
- Kept emoji prefixes for each line (same emojis as original cards) to maintain visual continuity.
- Closed with the vinyl metaphor as the 4th line ("Like vinyl for the digital age") as requested in the original brief.
- Used `max-w-2xl mx-auto` to constrain width and center the one-liner list, improving focus on the text.
