import { tagsWithCount } from "@/data/projects";
import { cn } from "@/utils/utils";
import { useContext } from "react";
import { TagsFilterContext } from "./projects-block";
import { getTechnologyLogo } from "@/data/tags-logo-matcher";
import { AnimatePresence, motion } from "framer-motion";

// Defines the color of the tag based on whether it is selected or not
export const tagStyleOnFilter = (tagsFilter: string[], tag: string) => {
  if (tagsFilter.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())) {
    return "border-light-green text-light-green pl-3 pr-7 bg-background";
  } else {
    return "text-foreground px-5";
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
                  `relative z-20 flex items-center justify-center gap-2 overflow-hidden
            whitespace-nowrap rounded-full border border-foreground text-body transition-all
            duration-200 hover:z-50 hover:border-light-green hover:bg-background
            hover:text-light-green hover:shadow-md hover:shadow-light-green md:text-xl
            `,
                  tagStyleOnFilter(tagsFilter, tag)
                )}
              >
                {getTechnologyLogo(tag)} {tag} ({count}){" "}
                <AnimatePresence>
                  {tagsFilter.includes(tag) && (
                    <motion.p
                      className="absolute right-2 z-20 bg-background"
                      initial={{ y: -25 }}
                      animate={{ y: 0 }}
                      exit={{ y: 25 }}
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
