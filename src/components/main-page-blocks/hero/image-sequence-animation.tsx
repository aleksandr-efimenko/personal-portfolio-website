import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { type StaticImageData } from "next/image";
import Image from "next/image";
import firstSlideImg from "~/main-block-images/1.png";
import secondSlideImg from "~/main-block-images/2.png";

//This function is used to calculate the current image index based on the scrollYProgress
// export const calculateCurrentImageIndex = (
//   scrollYProgress: number,
//   imgArray: StaticImageData[]
// ) => {
//   //amplifies
//   const scrollRatio = 100;

//   const imageIndex = Math.floor(
//     scrollYProgress * (imgArray.length - 1) * scrollRatio
//   );
//   return imageIndex;
// };

export function ImageSequenceAnimation() {
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
      className="flex h-96 w-56 flex-col justify-end overflow-hidden rounded-3xl
    bg-light-gray dark:bg-dark-gray md:h-[30rem] md:w-72 lg:h-[45rem] lg:w-[27rem]
    "
    >
      {currentImageIndex === 0 ? (
        <Image
          quality={100}
          height={1000}
          width={1000}
          src={firstSlideImg}
          alt="my photo"
          placeholder="blur"
          priority
          className="-translate-y-12 scale-150  md:-translate-y-16"
        />
      ) : (
        <Image
          quality={100}
          height={1000}
          width={1000}
          src={secondSlideImg}
          alt="my photo"
          placeholder="blur"
          priority
          className="-translate-y-12 scale-150  md:-translate-y-16"
        />
      )}
    </div>
  );
}
