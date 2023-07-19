import Link from "next/link";
import { useContext } from "react";
import { TagsFilterContext } from "./projects-block";
import { cn } from "@/utils/utils";
import { tagColor } from "./tag-cloud";

export type ProjectCardDescriptionProps = {
  projectInfoLink: string;
  title: string;
  tags: string[];
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
        className="text-heading-m uppercase transition-all duration-200 hover:text-light-green"
      >
        {title}
      </Link>
      <div className="flex flex-wrap gap-x-2">
        {tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag) => (
            <button
              onClick={() => handleTagFilter(tag)}
              key={tag}
              className={cn(
                `text-body uppercase opacity-75 
            transition-all
            duration-200 hover:text-light-green
            hover:dark:text-light-green`,
                tagColor(tagsFilter, tag)
              )}
            >
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
}
