import { ImageSequenceAnimation } from "../image-sequence-animation";
import { heroBlockImages } from "./hero-block-images";

export function HeroBlock() {
  return (
    <div className=" flex h-96 w-full items-center justify-between ">
      <div className="">
        <h1 className="text-heading-xl text-foreground">Nice to meet you!</h1>
        <h2 className="text-heading-xl text-foreground">
          I&apos;m Aleksandr Efimenko.
        </h2>
        <p className="text-base">
          I&rsquo;m a front-end developer passionate about building accessible
          web apps that users love.
        </p>
      </div>
      <ImageSequenceAnimation imagesArray={heroBlockImages} />
    </div>
  );
}
