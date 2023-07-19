import { type StaticImageData } from "next/image";
import { ProjectCard } from "./project-card";
import { projectsData } from "@/data/projects";
import { createContext, useReducer, useState } from "react";
import { StyledButton } from "../../ui/styled-button";
import { TagCloud } from "./tag-cloud";
import {
  TagsReducerActionType,
  tagsReducer,
  tagsReducerInitialState,
} from "@/reducers/tags-reducer";

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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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
      <div className="flex flex-col gap-10">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-heading-xl">Technologies</h2>
          {isFiltered && (
            <StyledButton onClick={resetTagsFilter}>Reset</StyledButton>
          )}
        </div>
        <TagCloud />
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
    </TagsFilterContext.Provider>
  );
}
