import Link from "next/link";
import { title } from "process";

export function ProjectCardDescription({
  projectInfoLink,
  title,
  tags,
}: {
  projectInfoLink: string;
  title: string;
  tags: string[];
}) {
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
          <Link
            href={"/"}
            key={tag}
            className="text-body font-medium uppercase text-dark-gray transition-all
            duration-200 hover:text-light-green dark:text-light-gray"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
