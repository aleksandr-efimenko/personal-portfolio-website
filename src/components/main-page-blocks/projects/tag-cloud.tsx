import { tagsWithCount } from "@/data/projects";
import { cn } from "@/utils/utils";
import { useContext } from "react";
import { TagsFilterContext } from "./projects-block";
import { getTechnologyLogo } from "@/data/tags-logo-matcher";
import { AnimatePresence, motion } from "framer-motion";

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
              <motion.button
                whileHover={{ scale: 1.5 }}
                transition={{
                  duration: 0.1,
                  delay: 0,
                }}
                onClick={() => handleTagFilter(tag)}
                className={cn(
                  `flex items-center justify-center gap-2 overflow-hidden
            whitespace-nowrap rounded-full border border-foreground px-3 text-body transition-all
            duration-200 hover:border-light-green hover:bg-background
            hover:text-light-green hover:shadow-md hover:shadow-light-green md:text-xl
            `,
                  tagColor(tagsFilter, tag)
                )}
              >
                {getTechnologyLogo(tag)} {tag} ({count}){" "}
                <AnimatePresence>
                  {tagsFilter.includes(tag) && (
                    <motion.p
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      exit={{ x: 100 }}
                    >
                      {"✓"}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            </li>
          ))}
    </ul>
  );
}
