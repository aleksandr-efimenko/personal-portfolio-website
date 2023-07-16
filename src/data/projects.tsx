import kanbanImage from "~/project-screenshots/kanban-desk.png";
import spaceImage from "~/project-screenshots/space-tourism.png";
import passwordGenImage from "~/project-screenshots/password-generator.png";
import inspirationalImg from "~/project-screenshots/inspirational-page.png";
import { type ProjectData } from "@/components/main-page-blocks/projects-block";

export const projectsData: ProjectData[] = [
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
    links: {
      projectInfo: "/projects/kanban-desk",
      livePreview: "https://kanban-desk.alexefimenko.com/",
      github: "https://github.com/aleksandr-efimenko/kanban-task-management/",
    },
    image: kanbanImage,
  },
  {
    title: "Space tourism",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      projectInfo: "/projects/space-tourism",
      livePreview: "https://space-tourism.alexefimenko.com/",
      github:
        "https://github.com/aleksandr-efimenko/space-tourism-website-frontendmentor",
    },
    image: spaceImage,
  },
  {
    title: "Password generator",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "OpenWeatherMap API",
    ],
    links: {
      projectInfo: "/projects/password-generator",
      livePreview: "https://password-generator.alexefimenko.com/",
      github:
        "https://github.com/aleksandr-efimenko/password-generator-frontendmentor",
    },
    image: passwordGenImage,
  },
];
