import kanbanImage from "~/project-screenshots/kanban-desk.png";
import spaceImage from "~/project-screenshots/space-tourism.png";
import passwordGenImage from "~/project-screenshots/password-generator.png";
import inspirationalImg from "~/project-screenshots/inspirational-page.png";
import dropdomainImg from "~/project-screenshots/dropdomains.png";
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
      projectInfo: "/kanban-desk",
      livePreview: "https://kanban-desk.alexefimenko.com/",
      github: "https://github.com/aleksandr-efimenko/kanban-task-management/",
    },
    image: kanbanImage,
  },
  {
    title: "Space tourism",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      projectInfo: "/space-tourism",
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
      projectInfo: "/password-generator",
      livePreview: "https://password-generator.alexefimenko.com/",
      github:
        "https://github.com/aleksandr-efimenko/password-generator-frontendmentor",
    },
    image: passwordGenImage,
  },
  {
    title: "Inspirational page",
    tags: ["React", "TypeScript", "Firebase"],
    links: {
      projectInfo: "/inspirational-page",
      livePreview: "https://inspirational-page.alexefimenko.com/",
      github: "https://github.com/aleksandr-efimenko/inspirational-homepage",
    },
    image: inspirationalImg,
  },
  {
    title: "Dropdomains",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
    links: {
      projectInfo: "/dropdomains",
      livePreview: "https://dropdomains.alexefimenko.com/",
      github: "",
    },
    image: dropdomainImg,
  },
];
