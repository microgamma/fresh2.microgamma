import { useSignal } from "@preact/signals";

interface CodeBlockProps {
  /** The exact command text to display and copy (newlines preserved). */
  code: string;
}

/**
 * A code block with the classic copy button in the top-right corner. Styled to
 * match the docs prose code blocks, but opts out of prose (`not-prose`) so the
 * button can be positioned and the padding reserved.
 */
export default function CodeBlock({ code }: CodeBlockProps) {
  const copied = useSignal(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      copied.value = true;
      setTimeout(() => (copied.value = false), 1800);
    } catch {
      copied.value = false;
    }
  };

  return (
    <div class="not-prose relative my-6">
      <pre class="overflow-x-auto rounded-lg border border-primary-400/20 bg-gray-900/80 py-4 pl-4 pr-16 font-mono-tech text-sm leading-relaxed text-accent-300"><code>{code}</code></pre>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy to clipboard"
        class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-sm border border-cyber/30 bg-black/50 font-mono-tech text-xs uppercase tracking-widest text-accent-300 transition-colors hover:text-cyber hover:border-cyber/60 hover:bg-cyber/10"
      >
        {copied.value ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}
