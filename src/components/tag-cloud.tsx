import { tagsWithCount } from "@/data/projects";
import { cn } from "@/utils/utils";
import { useContext } from "react";
import { TagsFilterContext } from "./main-page-blocks/projects-block";

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
        Object.entries(tagsWithCount).map(([tag, count]) => (
          <li key={tag}>
            <button
              onClick={() => handleTagFilter(tag)}
              className={cn(
                `rounded-full border border-foreground px-3 
            text-xl transition-all 
            duration-200 hover:border-light-green
            hover:text-light-green hover:shadow-sm hover:shadow-foreground
            `,
                tagColor(tagsFilter, tag)
              )}
            >
              {tag} ({count}) {tagsFilter.includes(tag) ? "✓" : ""}
            </button>
          </li>
        ))}
    </ul>
  );
}
