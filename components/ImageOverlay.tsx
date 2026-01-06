export default function ImageOverlay(
  { src, onClose }: { src: string; onClose: () => void },
) {
  return (
    <div
      class="fixed inset-0 bg-primary bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div class="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          class="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <img src={src} alt="Large screenshot" class="max-w-full max-h-full" />
      </div>
    </div>
  );
}
