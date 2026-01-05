import { useState } from "preact/hooks";
import ImageOverlay from "../components/ImageOverlay.tsx";

export default function Thumbnail({screenshot}: {
  screenshot: {image: string; title: string; fallback?: string}
}) {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openOverlay = (image: string) => {
    setSelectedImage(image);
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <>
      <div class="aspect-video bg-gray-800 flex items-center justify-center">
        <button type="button" onClick={() => openOverlay(screenshot.fallback || screenshot.image)}>
          <picture>
            <source srcset={screenshot.image} type="image/webp" />
            <img
              src={screenshot.fallback || screenshot.image}
              alt={screenshot.title}
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </button>
      </div>

      {isOverlayOpen && (
        <ImageOverlay src={selectedImage} onClose={closeOverlay} />
      )}
    </>
  );
}
