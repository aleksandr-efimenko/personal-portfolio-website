import { ContactForm } from "./contact-form";
import Image, { type StaticImageData } from "next/image";
import patternDots from "~/pattern-dots.svg";

const blockDescription = `I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.`;

export function ContactBlock() {
  return (
    <div className="container relative flex flex-col justify-between gap-16 md:flex-row md:gap-24 lg:gap-48">
      <Image
        src={patternDots as StaticImageData}
        alt="abstract pattern dots"
        className="absolute -left-16 z-10 opacity-20 invert "
        height={300}
      />

      <div className="flex  flex-1 flex-col gap-9">
        <h3 className="text-heading-xl">Contact</h3>
        <p className="text-body">{blockDescription}</p>
      </div>
      <div className="flex-1">
        <ContactForm />
      </div>
    </div>
  );
}
