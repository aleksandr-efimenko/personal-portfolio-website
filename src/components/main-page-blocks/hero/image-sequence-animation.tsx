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
  const scrollRatio = 100;

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
    if (latest > 0) {
      setCurrentImageIndex(1);
    } else {
      setCurrentImageIndex(0);
    }
  });

  return (
    <div
      className="dark:bg- flex h-[45rem] w-[27rem] flex-col justify-end
    overflow-hidden rounded-3xl bg-light-gray dark:bg-dark-gray
    "
    >
      {imagesArray.map((item, i) => (
        <Image
          quality={100}
          height={1000}
          width={1000}
          src={item.src}
          key={i}
          alt="my photo"
          className=" -translate-y-16  scale-150"
          style={{
            display: i !== currentImageIndex ? "none" : "block",
          }}
        />
      ))}
    </div>
  );
}
