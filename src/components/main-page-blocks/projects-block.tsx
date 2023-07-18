import { type StaticImageData } from "next/image";
import { ProjectCard } from "../project-card";
import { projectsData } from "@/data/projects";
import { useState } from "react";
import { StyledButton } from "../ui/styled-button";
import { TagCloud } from "../tag-cloud";

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
  const [tagsFilter, setTagsFilter] = useState<string[]>([]);
  const projectsDataFiltered = projectsData.filter((projectData) => {
    if (tagsFilter.length === 0) return true;
    return projectData.tags.some((tag) =>
      tagsFilter.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())
    );
  });
  console.log(tagsFilter);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-heading-xl">Technologies</h2>
        <StyledButton onClick={() => setTagsFilter([])}>Reset</StyledButton>
      </div>
      <TagCloud setTagsFilter={setTagsFilter} tagsFilter={tagsFilter} />
      <h2 className="text-heading-xl">Projects</h2>
      <div
        className="grid w-full auto-cols-fr grid-cols-1 gap-6 gap-y-16
       md:grid-cols-2 lg:grid-cols-3"
      >
        {projectsDataFiltered.map((projectData) => (
          <ProjectCard key={projectData.title} {...projectData} />
        ))}
      </div>
    </div>
  );
}
