import { ImageSequenceAnimation } from "./image-sequence-animation";
import patternCircle from "~/pattern-circle.svg";
import patternRings from "~/pattern-rings.svg";
import Image, { type StaticImageData } from "next/image";
import { HeroDescription } from "./hero-block-description";

export function HeroBlock() {
  return (
    <div className=" container relative flex h-[40rem] w-full items-center justify-between lg:h-[45rem] ">
      <Image
        src={patternRings as StaticImageData}
        alt="pattern circle"
        className=" absolute -left-32 top-28 z-10"
      />
      <div className="flex w-full flex-col justify-center gap-5 lg:gap-10">
        <HeroDescription />
      </div>
      <div
        className="absolute right-1/2 top-0 z-10 translate-x-1/2 md:right-10
      md:-z-10 md:translate-x-0 lg:-top-[7.25rem]"
      >
        <Image
          src={patternCircle as StaticImageData}
          alt="pattern circle"
          className=" absolute -right-16 bottom-16 -z-10 md:-left-16 md:bottom-16 md:z-10 lg:bottom-32"
        />
        <ImageSequenceAnimation />
      </div>
    </div>
  );
}
