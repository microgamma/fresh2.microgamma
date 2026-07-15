import { useSignal } from "@preact/signals";

interface CopyCommandProps {
  command: string;
  /** Optional machine-style label shown above the command, e.g. "APPLE SILICON / ARM". */
  label?: string;
}

/**
 * A copy-pasteable terminal line: a neon-framed row with a `$` prompt, the
 * command in monospace, and a copy button that confirms on click.
 */
export default function CopyCommand({ command, label }: CopyCommandProps) {
  const copied = useSignal(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      copied.value = true;
      setTimeout(() => (copied.value = false), 1800);
    } catch {
      copied.value = false;
    }
  };

  return (
    <div>
      {label && (
        <div class="kicker mb-2 !text-primary-400 before:!bg-primary-400 before:!shadow-[0_0_8px_var(--color-primary)]">
          {label}
        </div>
      )}
      <div class="flex items-stretch rounded-sm border border-cyber/30 bg-black/60 overflow-hidden group focus-within:border-cyber/70">
        <span class="hidden sm:flex items-center pl-4 pr-2 text-cyber font-mono-tech select-none">
          $
        </span>
        <code class="flex-1 min-w-0 overflow-x-auto whitespace-nowrap px-3 sm:px-1 py-3 font-mono-tech text-sm text-accent-300">
          {command}
        </code>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy: ${command}`}
          class="flex-shrink-0 px-4 font-mono-tech text-xs uppercase tracking-widest border-l border-cyber/30 transition-colors hover:bg-cyber/10 hover:text-cyber text-accent-300"
        >
          {copied.value ? "✓ Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
