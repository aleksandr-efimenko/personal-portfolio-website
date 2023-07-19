import { type ProjectData } from "./projects-block";
import { StyledLink } from "../../ui/styled-link";
import Image from "next/image";
import { ProjectCardDescription } from "./project-card-description";

export function ProjectCard(props: ProjectData) {
  const { title, tags, links, image } = props;

  return (
    <div key={title}>
      <div className="group relative w-full transition-all duration-200">
        <Image
          src={image}
          placeholder="blur"
          alt={title}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />

        <div className="absolute inset-0 hidden bg-black opacity-75  group-hover:flex"></div>
        <div className="absolute inset-0 hidden flex-col items-center justify-evenly py-4 group-hover:flex">
          {links.projectInfo && (
            <StyledLink
              className="text-white"
              href={`/projects${links.projectInfo}`}
            >
              Description
            </StyledLink>
          )}
          {links.livePreview && (
            <StyledLink className="text-white" href={links.livePreview}>
              Visit site
            </StyledLink>
          )}
          {links.github && (
            <StyledLink className="text-white" href={links.github}>
              Source code
            </StyledLink>
          )}
        </div>
      </div>
      <ProjectCardDescription
        projectInfoLink={links.projectInfo}
        title={title}
        tags={tags}
      />
    </div>
  );
}
