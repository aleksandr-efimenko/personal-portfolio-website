import kanbanImage from "~/project-screenshots/kanban-desk.png";
import spaceImage from "~/project-screenshots/space-tourism.png";
import passwordGenImage from "~/project-screenshots/password-generator.png";
import inspirationalImg from "~/project-screenshots/inspirational-page.png";
import dropdomainImg from "~/project-screenshots/dropdomains.png";
import memoryGameImg from "~/project-screenshots/memory-game.png";
import marathonPrpImg from "~/project-screenshots/marathon-preparation-plan-2.png";
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
      "tRPC",
      "NextAuth.js",
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
  {
    title: "Password generator",
    tags: ["React", "TypeScript", "Next.js", "CSS Modules"],
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
    title: "Memory game",
    tags: ["React", "JavaScript", "CSS Modules"],
    links: {
      projectInfo: "/memory-game",
      livePreview: "https://memory-game.alexefimenko.com/",
      github: "https://github.com/aleksandr-efimenko/memory_game_react",
    },
    image: memoryGameImg,
  },
  {
    title: "ChatGPT Marathon preparation plan ",
    tags: [
      "OpenAI API",
      "Typescript",
      "React",
      "Next.js",
      "Full calendar",
      "SurveyJS",
    ],
    links: {
      projectInfo: "/marathon-preparation-plan-chatgpt",
      livePreview: "https://marathon-preparation-plan.alexefimenko.com/",
      github: "https://github.com/aleksandr-efimenko/running-plan-chatgpt",
    },
    image: marathonPrpImg,
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
