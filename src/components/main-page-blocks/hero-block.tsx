import { ImageSequenceAnimation } from "../image-sequence-animation";
import { heroBlockImages } from "./hero-block-images";
import patternCircle from "~/pattern-circle.svg";
import patternRings from "~/pattern-rings.svg";
import Image, { type StaticImageData } from "next/image";
import { StyledLink } from "../ui/styled-link";

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
      href: "/",
    },
  ],
};

export function HeroBlock() {
  return (
    <div className="flex h-[45rem] w-full items-center justify-between">
      <Image
        src={patternRings as StaticImageData}
        alt="pattern circle"
        className=" absolute -left-32 top-28 z-10"
      />
      <div className="flex w-full flex-col justify-center gap-10">
        <div className="flex h-full flex-col gap-10">
          <div>
            <h1 className="text-heading-xl">{pageData.title}</h1>
            <h2 className="text-heading-xl">
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
          <p className="max-w-md text-body">{pageData.description}</p>
        </div>
        <div className="flex flex-col gap-3">
          {pageData.links.map((link) => (
            <StyledLink href={link.href} key={link.href}>
              {link.label}
            </StyledLink>
          ))}
        </div>
      </div>
      <Image
        src={patternCircle as StaticImageData}
        alt="pattern circle"
        className=" absolute right-[25rem] z-10"
      />
      <div className="absolute -top-[7.25rem] right-10 -z-10">
        <ImageSequenceAnimation imagesArray={heroBlockImages} />
      </div>
    </div>
  );
}
