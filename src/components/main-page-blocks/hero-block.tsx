import { ImageSequenceAnimation } from "../image-sequence-animation";
import { Button } from "../ui/button";
import { heroBlockImages } from "./hero-block-images";

export function HeroBlock() {
  return (
    <div className="flex h-[45rem] w-full items-center justify-between">
      <div className="flex w-full flex-col gap-16">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-heading-xl">Nice to meet you!</h1>
            <h2 className="text-heading-xl">
              I&apos;m{" "}
              <span className="border-b-[6px] border-light-green">
                Alex Efimenko
              </span>
              .
            </h2>
          </div>
          <p className="w-2/3 text-body">
            I&rsquo;m a front-end developer passionate about building accessible
            web apps that users love.
          </p>
        </div>
        <Button
          variant={"link"}
          className="w-fit rounded-none border-b-2 
          border-light-green px-0 text-base uppercase hover:no-underline"
        >
          Contact me
        </Button>
      </div>

      <ImageSequenceAnimation imagesArray={heroBlockImages} />
    </div>
  );
}
