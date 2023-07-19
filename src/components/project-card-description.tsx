import Link from "next/link";
import { useContext } from "react";
import { TagsFilterContext } from "./main-page-blocks/projects-block";

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
  const { dispatch } = useContext(TagsFilterContext);
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
        {tags.map((tag) => (
          <button
            onClick={() => handleTagFilter(tag)}
            key={tag}
            className="text-body font-medium uppercase text-dark-gray 
            transition-all
            duration-200 hover:text-light-green dark:text-light-gray hover:dark:text-light-green"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
