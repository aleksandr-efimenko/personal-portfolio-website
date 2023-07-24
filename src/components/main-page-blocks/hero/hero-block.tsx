import { ImageSequenceAnimation } from "./image-sequence-animation";
import { heroBlockImages } from "./hero-block-images";
import patternCircle from "~/pattern-circle.svg";
import patternRings from "~/pattern-rings.svg";
import Image, { type StaticImageData } from "next/image";
import { StyledLink } from "../../ui/styled-link";

const pageData = {
  title: "Nice to meet you!",
  subtitle: "I'm ",
  subtitleHighlight: "Alex Efimenko",
  subtitleEnd: ".",
  description:
    "I'm a front-end developer passionate about building accessible web apps that users love.",
  links: [
    {
      label: "Contact me",
      href: "#contact",
    },
    {
      label: "Download CV.pdf",
      href: "/CV.pdf",
    },
  ],
};

export function HeroBlock() {
  return (
    <div className=" container relative flex h-[45rem] w-full items-center justify-between ">
      <Image
        src={patternRings as StaticImageData}
        alt="pattern circle"
        className=" absolute -left-32 top-28 z-10"
      />
      <div className="flex w-full flex-col justify-center gap-10">
        <div className="mt-96 flex h-full flex-col gap-10 md:mt-0">
          <div>
            <h1 className="responsive-heading-xl text-center md:text-left">
              {pageData.title}
            </h1>
            <h2 className="responsive-heading-xl text-center md:text-left">
              {pageData.subtitle}
              <span
                className="border-b-[0.375rem] border-light-green transition-all
          duration-200 hover:border-b-[0.75rem]"
              >
                {pageData.subtitleHighlight}
              </span>
              {pageData.subtitleEnd}
            </h2>
          </div>
          <p className="w-full text-center text-body md:max-w-md md:text-left">
            {pageData.description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-start">
          {pageData.links.map((link) => (
            <StyledLink href={link.href} key={link.href}>
              {link.label}
            </StyledLink>
          ))}
        </div>
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
        <ImageSequenceAnimation imagesArray={heroBlockImages} />
      </div>
    </div>
  );
}
