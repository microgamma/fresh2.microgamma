import { useState } from "preact/hooks";
import ImageOverlay from "../components/ImageOverlay.tsx";

export default function Thumbnail({screenshot}: {
  screenshot: {image: string; title: string}
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
        <button type="button" onClick={() => openOverlay(screenshot.image)}>
          <img
            src={screenshot.image}
            alt={screenshot.title}
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </button>
      </div>

      {isOverlayOpen && (
        <ImageOverlay src={selectedImage} onClose={closeOverlay} />
      )}
    </>
  );
}
