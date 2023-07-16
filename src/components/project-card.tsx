import Link from "next/link";
import { type ProjectData } from "./main-page-blocks/projects-block";
import { StyledLink } from "./ui/styled-link";
import Image from "next/image";

export function ProjectCard(props: ProjectData) {
  const { title, tags, links, image } = props;

  return (
    <div className="min-h-[24rem]">
      <div className="group relative h-full w-full transition-all duration-200">
        <Image
          src={image}
          placeholder="blur"
          fill
          alt={title}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />

        <div
          className="absolute inset-0 hidden w-full flex-col 
      items-center justify-center gap-6 bg-black opacity-75  group-hover:flex"
        >
          <StyledLink href={`/projects${links.projectInfo}`}>
            Project page
          </StyledLink>
          <StyledLink href={links.livePreview}>Live preview</StyledLink>
          <StyledLink href={links.github}>Source code</StyledLink>
        </div>
      </div>
      <div className="">
        <Link
          href={links.projectInfo}
          className="text-heading-m uppercase transition-all duration-200 hover:text-light-green"
        >
          {title}
        </Link>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              href={"/"}
              key={tag}
              className="text-body font-medium uppercase text-light-gray transition-all duration-200 hover:text-light-green"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
