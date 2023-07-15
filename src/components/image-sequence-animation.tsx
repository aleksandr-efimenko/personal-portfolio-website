import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { type StaticImageData } from "next/image";
import Image from "next/image";

//This function is used to calculate the current image index based on the scrollYProgress
export const calculateCurrentImageIndex = (
  scrollYProgress: number,
  imgArray: StaticImageData[]
) => {
  //amplifies
  const scrollRatio = 10;

  const imageIndex = Math.floor(
    scrollYProgress * (imgArray.length - 1) * scrollRatio
  );
  return imageIndex;
};

export type ImageSequenceAnimationProps = {
  imagesArray: StaticImageData[];
};

export function ImageSequenceAnimation({
  imagesArray,
}: ImageSequenceAnimationProps) {
  const { scrollYProgress } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const imageIndex = calculateCurrentImageIndex(latest, imagesArray);
    if (imageIndex < 0 || imageIndex > imagesArray.length - 1) return;
    if (imageIndex !== currentImageIndex) {
      setCurrentImageIndex(imageIndex);
    }
  });

  return (
    <div
      className="dark:bg-background-dark -top- absolute -top-[7.25rem] right-10
    -z-10 flex h-[45rem] w-[27rem] flex-col justify-end
    overflow-hidden rounded-3xl bg-light-green
    "
    >
      {imagesArray.map((item, i) => (
        <Image
          height={445}
          width={720}
          src={item.src}
          key={i}
          alt="my photo"
          className=" scale-150 "
          style={{
            display: i !== currentImageIndex ? "none" : "block",
          }}
        />
      ))}
    </div>
  );
}
