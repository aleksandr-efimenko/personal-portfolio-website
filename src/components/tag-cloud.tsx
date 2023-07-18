import { projectsData } from "@/data/projects";
import { cn } from "@/utils/utils";

export function TagCloud({
  tagsFilter,
  setTagsFilter,
}: {
  tagsFilter: string[];
  setTagsFilter: (tags: string[]) => void;
}) {
  const tagsWithCount = projectsData
    .map((project) => project.tags)
    .reduce((acc, tag) => {
      tag.forEach((tag) => {
        if (acc[tag]) {
          acc[tag] += 1;
        } else {
          acc[tag] = 1;
        }
      });
      return acc;
    }, {} as Record<string, number>);

  const handleTagFilter = (tag: string) => {
    if (tag) {
      console.log(tag);
      if (tagsFilter.includes(tag)) {
        setTagsFilter((tagsFilter) =>
          tagsFilter.filter((tagFilter) => tagFilter !== tag)
        );
      } else {
        setTagsFilter((tagsFilter) => [...tagsFilter, tag]);
      }
    }
  };
  const tagColor = (tag: string) => {
    if (tagsFilter.includes(tag)) {
      return "border-light-green text-light-green text-light-green";
    } else {
      return "bg-transparent text-foreground";
    }
  };
  return (
    <div className="flex flex-wrap gap-2">
      {tagsWithCount &&
        Object.entries(tagsWithCount).map(([tag, count]) => (
          <>
            <button
              onClick={() => handleTagFilter(tag)}
              key={tag}
              className={cn(
                `rounded-full border border-foreground px-3 
            text-xl transition-all duration-200 
            hover:border-light-green hover:text-light-green`,
                tagColor(tag)
              )}
            >
              {tag} ({count}) {tagsFilter.includes(tag) ? "✓" : ""}
            </button>
          </>
        ))}
    </div>
  );
}
