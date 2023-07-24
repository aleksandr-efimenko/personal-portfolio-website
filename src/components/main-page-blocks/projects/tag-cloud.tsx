import { tagsWithCount } from "@/data/projects";
import { cn } from "@/utils/utils";
import { useContext } from "react";
import { TagsFilterContext } from "./projects-block";
import { getTechnologyLogo } from "@/data/tags-logo-matcher";

// Defines the color of the tag based on whether it is selected or not
export const tagColor = (tagsFilter: string[], tag: string) => {
  if (tagsFilter.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())) {
    return "border-light-green text-light-green";
  } else {
    return "text-foreground";
  }
};

export function TagCloud() {
  const { dispatch, tagsFilter } = useContext(TagsFilterContext);
  const handleTagFilter = (tag: string) => {
    if (tag) {
      dispatch({ type: "ADD_OR_REMOVE_TAG", payload: tag });
    }
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {tagsWithCount &&
        Object.entries(tagsWithCount)
          .sort((a, b) =>
            b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
          )
          .map(([tag, count]) => (
            <li key={tag}>
              <button
                onClick={() => handleTagFilter(tag)}
                className={cn(
                  `flex items-center justify-center gap-2 
            whitespace-nowrap rounded-full border border-foreground px-3 text-body transition-all
            duration-200 hover:border-light-green
            hover:text-light-green hover:shadow-md hover:shadow-light-green md:text-xl
            `,
                  tagColor(tagsFilter, tag)
                )}
              >
                {getTechnologyLogo(tag)} {tag} ({count}){" "}
                {tagsFilter.includes(tag) ? "✓" : ""}
              </button>
            </li>
          ))}
    </ul>
  );
}
