# What's Microgamma CTA + Section Rework

## TL;DR

> **Quick Summary**: Add a secondary "What's Microgamma?" CTA button in the hero section that smooth-scrolls to the existing explanation section, and rework that section from paragraph-heavy text into punchy, short sentences.
> 
> **Deliverables**:
> - Secondary CTA button in hero next to "Download Free"
> - Reworked "What is Microgamma?" section with short, punchy copy
> 
> **Estimated Effort**: Quick
> **Parallel Execution**: NO — single file, single task
> **Critical Path**: Edit → Commit

---

## Context

### Original Request
User wants a "What's Microgamma?" CTA on the landing page that links to a section explaining what Microgamma is in simple, short sentences.

### Interview Summary
- A "What is Microgamma?" section already exists at lines 61-79 of `routes/index.tsx`
- User chose to: add the CTA button AND rework the existing section into punchy short sentences
- No new section needed — reuse and improve what's there

---

## Work Objectives

### Core Objective
Add a hero CTA that scrolls to an improved, punchy "What is Microgamma?" section.

### Concrete Deliverables
- `routes/index.tsx` updated with both changes

### Must Have
- Secondary CTA button in hero area alongside "Download Free"
- CTA links to `#what-is-microgamma` anchor
- Existing "What is Microgamma?" section reworked into short, punchy sentences
- Section has `id="what-is-microgamma"` for anchor linking
- Smooth scroll behavior

### Must NOT Have (Guardrails)
- Do NOT create a new section — rework the existing one (lines 61-79)
- Do NOT add JavaScript for scroll — use CSS `scroll-behavior: smooth` or rely on existing browser behavior with `#` anchors
- Do NOT change any other section on the page
- Do NOT over-explain — keep sentences ultra-short (think tagline-length)

---

## Verification Strategy

### Test Decision
- **Automated tests**: None needed (text-only change)

### QA Policy
- Agent-executed QA via LSP diagnostics + visual check

---

## Execution Strategy

Single task, no parallelism needed.

---

## TODOs

- [ ] 1. Add "What's Microgamma?" CTA and rework section

  **What to do**:

  **Part A — Hero CTA Button** (lines 52-57 of `routes/index.tsx`):
  
  Replace the single `<a href="/downloads">` button with a flex container holding two buttons side by side:
  
  ```tsx
  <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <a
      href="/downloads"
      class="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition inline-block btn-glow"
    >
      Download Free
    </a>
    <a
      href="#what-is-microgamma"
      class="border border-primary-400/50 text-primary-300 px-6 py-3 rounded-full font-semibold hover:bg-primary-400/10 transition inline-block"
    >
      What's Microgamma?
    </a>
  </div>
  ```

  - First button: keep existing "Download Free" (primary, solid)
  - Second button: "What's Microgamma?" (ghost/outline style — border only, no fill)
  - Stacks vertically on mobile (`flex-col`), side-by-side on `sm:` and up

  **Part B — Rework "What is Microgamma?" section** (lines 61-79):

  Add `id="what-is-microgamma"` to the `<section>` tag, and also add `scroll-mt-4` to offset for smooth scroll:

  ```tsx
  <section id="what-is-microgamma" class="bg-gray-900 text-white py-20 px-4 scroll-mt-4">
  ```

  Replace the two long paragraphs with short, punchy sentences. Use a clean list-like layout. Here's the direction:

  ```tsx
  <section id="what-is-microgamma" class="bg-gray-900 text-white py-20 px-4 scroll-mt-4">
    <div class="container mx-auto text-center max-w-4xl">
      <h2 class="text-3xl font-bold mb-12 text-primary-400">
        What is Microgamma?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg text-left max-w-3xl mx-auto">
        <p>🎵 A music player you own.</p>
        <p>🏠 Runs on your hardware.</p>
        <p>📱 Stream to any device.</p>
        <p>🎨 Customize everything — covers, metadata, playlists.</p>
        <p>🌐 Remote control from anywhere.</p>
        <p>💰 Free. Forever. No subscriptions.</p>
      </div>
      <p class="text-primary-300 text-xl mt-12">
        Like curating a vinyl collection — with the convenience of modern streaming.
      </p>
    </div>
  </section>
  ```

  The exact wording can be adjusted, but the key constraint is: **short sentences, one idea per line**, grid layout. Keep the vinyl metaphor as the closing one-liner.

  **Must NOT do**:
  - Do not touch any other section
  - Do not add JavaScript scroll handlers
  - Do not write paragraph-length descriptions

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file, clear instructions, ~20 lines of changes
  - **Skills**: []
    - No special skills needed — straightforward TSX edit

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: N/A — single task
  - **Blocks**: Nothing
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `routes/index.tsx:42-59` — Hero section with existing CTA button (modify this)
  - `routes/index.tsx:61-79` — Existing "What is Microgamma?" section (rework this)

  **Acceptance Criteria**:

  - [ ] `lsp_diagnostics` on `routes/index.tsx` returns zero errors
  - [ ] Hero section contains two CTA buttons side by side
  - [ ] Second CTA links to `#what-is-microgamma`
  - [ ] "What is Microgamma?" section has `id="what-is-microgamma"`
  - [ ] Section uses short punchy sentences (no sentence longer than ~10 words)
  - [ ] Grid layout renders on the section

  **QA Scenarios**:

  ```
  Scenario: Hero shows two CTA buttons
    Tool: Bash (grep)
    Steps:
      1. grep for 'what-is-microgamma' in routes/index.tsx
      2. grep for 'Download Free' in routes/index.tsx
      3. Verify both strings exist in the hero section
    Expected Result: Both CTAs present in the file
    Evidence: .sisyphus/evidence/task-1-hero-cta.txt

  Scenario: Anchor link target exists
    Tool: Bash (grep)
    Steps:
      1. grep for 'id="what-is-microgamma"' in routes/index.tsx
    Expected Result: Section has the correct id attribute
    Evidence: .sisyphus/evidence/task-1-anchor-target.txt

  Scenario: Section uses short sentences
    Tool: Bash (read file)
    Steps:
      1. Read the "What is Microgamma?" section
      2. Verify no paragraph tags contain more than ~15 words
    Expected Result: All content lines are short, punchy statements
    Evidence: .sisyphus/evidence/task-1-short-sentences.txt
  ```

  **Commit**: YES
  - Message: `feat(www): add What's Microgamma CTA and rework explainer section ✨`
  - Files: `routes/index.tsx`

---

## Final Verification Wave

> Not needed for this single-task plan. Agent self-verifies via QA scenarios above.

---

## Commit Strategy

- **1**: `feat(www): add What's Microgamma CTA and rework explainer section ✨` — routes/index.tsx

---

## Success Criteria

### Verification Commands
```bash
deno check routes/index.tsx  # Expected: no errors
```

### Final Checklist
- [ ] Hero has two CTAs: "Download Free" + "What's Microgamma?"
- [ ] "What's Microgamma?" scrolls to the section
- [ ] Section uses short, punchy sentences — no walls of text
- [ ] No other sections modified
