interface KickerProps {
  /** Machine-style label, e.g. "// SIGNAL.ACQUIRED" or "[ 01 ] // MANIFEST". */
  label: string;
  /** Extra utility classes (alignment, margins). */
  class?: string;
}

/**
 * The monospace section kicker used across the site — a neon dash followed by
 * an all-caps machine label. Taking the label as a prop keeps the `//` prefix
 * out of JSX text nodes (which the linter would flag as a stray comment).
 */
export default function Kicker({ label, class: cls = "" }: KickerProps) {
  return <p class={`kicker ${cls}`.trim()}>{label}</p>;
}
