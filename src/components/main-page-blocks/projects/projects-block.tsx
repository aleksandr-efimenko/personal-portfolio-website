import Image, { type StaticImageData } from "next/image";
import { ProjectCard } from "./project-card";
import { projectsData } from "@/data/projects";
import { createContext, useReducer } from "react";
import { StyledButton } from "../../ui/styled-button";
import { TagCloud } from "./tag-cloud";
import {
  type TagsReducerActionType,
  tagsReducer,
  tagsReducerInitialState,
} from "@/reducers/tags-reducer";
import figuresPattern from "~/pattern-figures.svg";

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

export const TagsFilterContext = createContext({
  tagsFilter: [] as string[],
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  dispatch: (action: TagsReducerActionType) => {},
});

export function ProjectsBlock() {
  const [tags, dispatch] = useReducer(tagsReducer, tagsReducerInitialState);

  const projectsDataFiltered = projectsData.filter((projectData) => {
    if (tags.tagsFilter.length === 0) return true;
    return projectData.tags.some((tag) =>
      tags.tagsFilter
        .map((tag) => tag.toLowerCase())
        .includes(tag.toLowerCase())
    );
  });
  const isFiltered = tags.tagsFilter.length > 0;
  const resetTagsFilter = () => dispatch({ type: "RESET_TAGS", payload: "" });
  return (
    <TagsFilterContext.Provider
      value={{ tagsFilter: tags.tagsFilter, dispatch }}
    >
      <div className="relative flex flex-col gap-10">
        <Image
          src={figuresPattern as StaticImageData}
          alt="abstract pattern dots"
          className="absolute -left-96 top-32 -z-10 w-full  opacity-10"
        />
        <div className="flex w-full items-center justify-between">
          <h2 className="responsive-heading-xl">Technologies and Projects</h2>
          {isFiltered && (
            <StyledButton onClick={resetTagsFilter}>Reset</StyledButton>
          )}
        </div>
        <TagCloud />

        <div
          className="grid w-full auto-cols-fr grid-cols-1 gap-6 gap-y-16
       md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsDataFiltered.map((projectData) => (
            <ProjectCard key={projectData.title} {...projectData} />
          ))}
        </div>
      </div>
    </TagsFilterContext.Provider>
  );
}
