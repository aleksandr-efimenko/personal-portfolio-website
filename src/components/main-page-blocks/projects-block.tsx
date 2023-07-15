import { StyledLink } from "../ui/styled-link";

const projectsData = [
  {
    title: "Kanban Desk",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
    ],
    href: "https://kanban-desk.alexefimenko.com/.vercel.app/",
    projectPage: "/projects/kanban-board",
    link: "https://kanban-board.alexefimenko.com/",
    github: "https://github.com/aleksandr-efimenko/kanban-task-management",
    image: "/images/kanban-board.png",
  },
  {
    title: "Portfolio",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    href: "https://alexefimenko.com/",
    projectPage: "/projects/portfolio",
    link: "https://alexefimenko.com/",
    github: "",
    image: "/images/portfolio.png",
  },
  {
    title: "Weather App",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "OpenWeatherMap API",
    ],
    href: "https://weather-app.alexefimenko.com/",
    projectPage: "/projects/weather-app",
    link: "https://weather-app.alexefimenko.com/",
    github: "",
  },
];

export function ProjectsBlock() {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-heading-l">Projects</h2>
        <StyledLink href={"/"}>Contact me</StyledLink>
      </div>
      <div className="grid-cols-2"></div>
    </div>
  );
}
