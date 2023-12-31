import Link from "next/link";
import { useContext } from "react";
import { TagsFilterContext } from "./projects-block";
import { cn } from "@/utils/utils";
import { getTechnologyLogo } from "@/data/tags-logo-matcher";

export type ProjectCardDescriptionProps = {
  projectInfoLink: string;
  title: string;
  tags: string[];
};

const tagColorOnFilter = (tagsFilter: string[], tag: string) => {
  if (tagsFilter.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())) {
    return "border-light-green text-light-green";
  } else {
    return "text-foreground";
  }
};

export function ProjectCardDescription({
  projectInfoLink,
  title,
  tags,
}: ProjectCardDescriptionProps) {
  const { tagsFilter, dispatch } = useContext(TagsFilterContext);
  const handleTagFilter = (tag: string) => {
    if (tag) {
      dispatch({ type: "ADD_OR_REMOVE_TAG", payload: tag });
    }
  };
  return (
    <div className="mt-4">
      <Link
        href={projectInfoLink}
        className={cn(
          "text-heading-m uppercase transition-all duration-200  ",
          projectInfoLink ? " hover:text-light-green" : "cursor-not-allowed"
        )}
      >
        {title}
      </Link>
      <div className=" flex flex-wrap gap-x-4">
        {tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag) => (
            <button
              onClick={() => handleTagFilter(tag)}
              key={tag}
              className={cn(
                `flex items-center gap-1 
             text-body uppercase opacity-75
            transition-all duration-200 hover:text-light-green
            hover:dark:text-light-green`,
                tagColorOnFilter(tagsFilter, tag)
              )}
            >
              {getTechnologyLogo(tag)} {tag}
            </button>
          ))}
      </div>
    </div>
  );
}
