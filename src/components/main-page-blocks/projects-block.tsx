import { type StaticImageData } from "next/image";
import { StyledLink } from "../ui/styled-link";
import { ProjectCard } from "../project-card";
import { projectsData } from "@/data/projects";

export type ProjectData = {
  title: string;
  tags: string[];
  links: {
    projectInfo: string;
    livePreview: string;
    github: string;
  };
  image: StaticImageData;
};

export function ProjectsBlock() {
  return (
    <div className="container">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-heading-xl">Projects</h2>
        <StyledLink href={"/"}>Contact me</StyledLink>
      </div>
      <div
        className="mt-20 grid w-full auto-cols-fr grid-cols-1 gap-6 gap-y-16
       md:grid-cols-2 lg:grid-cols-3"
      >
        {projectsData.map((projectData) => (
          <ProjectCard key={projectData.title} {...projectData} />
        ))}
      </div>
    </div>
  );
}
