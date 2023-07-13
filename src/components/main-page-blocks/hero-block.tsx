import { useRef } from "react";
import { ImageSequenceAnimation } from "../image-sequence-animation";
import { heroBlockImages } from "./hero-block-images";

export function HeroBlock() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex h-72 w-full items-center justify-between overflow-auto"
    >
      <ImageSequenceAnimation
        containerRef={containerRef}
        imagesArray={heroBlockImages}
      />
    </div>
  );
}
