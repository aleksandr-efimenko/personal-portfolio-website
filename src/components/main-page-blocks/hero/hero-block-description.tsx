import { motion } from "framer-motion";
import { StyledLink } from "../../ui/styled-link";

const pageData = {
  title: "Nice to meet you!",
  subtitle: "I'm ",
  subtitleHighlight: "Alex Efimenko",
  subtitleEnd: ".",
  description:
    "I'm a full-stack developer passionate about building accessible web apps that users love.",
  links: [
    {
      label: "Contact me",
      href: "#contact",
    },
    {
      label: "Book a call with me on Calendly",
      href: "https://calendly.com/alexefimenko/introductory-call",
    },
  ],
};

const animationVariants = {
  initial: {
    opacity: 0,
    filter: "blur(50px)",
    scale: 1.5,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
};

export function HeroDescription() {
  return (
    <>
      <div className="mt-96 flex h-full flex-col gap-5 pt-16 md:mt-0 lg:gap-10">
        <div>
          <motion.h1
            initial={animationVariants.initial}
            animate={animationVariants.animate}
            transition={{ duration: 0.5 }}
            className="responsive-heading-xl text-center md:text-left"
          >
            {pageData.title}
          </motion.h1>
          <motion.h2
            initial={animationVariants.initial}
            animate={animationVariants.animate}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="responsive-heading-xl text-center md:text-left"
          >
            {pageData.subtitle}
            <span
              className="border-b-[0.375rem] border-light-green transition-all
        duration-200 hover:border-b-[0.75rem]"
            >
              {pageData.subtitleHighlight}
            </span>
            {pageData.subtitleEnd}
          </motion.h2>
        </div>
        <motion.p
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full text-center text-body md:max-w-md md:text-left"
        >
          {pageData.description}
        </motion.p>
      </div>
      <motion.div
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex flex-col items-center gap-3 md:items-start"
      >
        {pageData.links.map((link) => (
          <StyledLink href={link.href} key={link.href}>
            {link.label}
          </StyledLink>
        ))}

        <p className="flex w-fit gap-5 text-base uppercase tracking-widest text-foreground md:text-body lg:text-xl">
          {"Download CV:"}
          <StyledLink href="/CV_Aleksadr_Efimenko.pdf">{".PDF"}</StyledLink>
          <StyledLink href="/CV_Aleksadr_Efimenko.docx">{".DOCX"}</StyledLink>
        </p>
      </motion.div>
    </>
  );
}
