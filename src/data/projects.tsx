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
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer motion"],
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
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
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
    tags: ["React", "Redux", "TypeScript", "Firebase", "OpenWeatherMap API"],
    links: {
      projectInfo: "/inspirational-page",
      livePreview: "https://inspirational-page.alexefimenko.com/",
      github: "https://github.com/aleksandr-efimenko/inspirational-homepage",
    },
    image: inspirationalImg,
  },
  {
    title: "Dropdomains",
    tags: [
      "C#",
      "MVC",
      ".Net core",
      "Razor pages",
      "RabbitMQ",
      "MS SQL Server",
    ],
    links: {
      projectInfo: "/dropdomains",
      livePreview: "",
      github: "",
    },
    image: dropdomainImg,
  },
];

export const tagsWithCount = projectsData
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
