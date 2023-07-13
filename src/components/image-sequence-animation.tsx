import { type MutableRefObject, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { type StaticImageData } from "next/image";

//This function is used to calculate the current image index based on the scrollYProgress
export const calculateCurrentImageIndex = (
  scrollYProgress: number,
  imgArray: StaticImageData[]
) => {
  const imageIndex = Math.floor(scrollYProgress * (imgArray.length - 1));
  return imageIndex;
};

export function ImageSequenceAnimation({
  containerRef,
  imagesArray,
}: {
  containerRef: MutableRefObject<any>;
  imagesArray: StaticImageData[];
}) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    const imageIndex = calculateCurrentImageIndex(latest, imagesArray);
    if (imageIndex < 0 || imageIndex > imagesArray.length - 1) return;
    if (imageIndex !== currentImageIndex) {
      setCurrentImageIndex(imageIndex);
      console.log(imageIndex);
    }
  });

  return (
    <div
      ref={containerRef}
      className="absolute h-72 w-72 overflow-hidden rounded-full border-4 bg-emerald-400"
    >
      {imagesArray.map((item, i) => (
        <span
          key={i}
          style={{
            display: i !== currentImageIndex ? "none" : "block",
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundImage: `url(${item.src})`,
          }}
        />
      ))}
    </div>
  );
}
