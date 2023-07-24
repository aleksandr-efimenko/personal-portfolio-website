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

export function HeroDescription() {
  return (
    <>
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
    </>
  );
}
