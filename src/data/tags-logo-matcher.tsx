import { Icons } from "@/components/icons";
export const tagsMap = new Map<string, JSX.Element>([
  ["React", <Icons.react key="react" />],
  ["TypeScript", <Icons.typescript key="typescript" />],
  ["Next.js", <Icons.nextjs key="nextjs" />],
  ["JavaScript", <Icons.javascript key="javascript" />],
  ["Tailwind CSS", <Icons.tailwindcss key="tailwindcss" />],
  ["Bootstrap", <Icons.bootsrap key="bootstrap" />],
  [".Net core", <Icons.dotnet key="dotnet" />],
  ["C#", <Icons.csharp key="csharp" />],
  ["Docker", <Icons.docker key="docker" />],
  ["Redux", <Icons.redux key="redux" />],
  ["MongoDB", <Icons.mongodb key="mongodb" />],
  ["Chart.js", <Icons.chartjs key="chartjs" />],
  ["CSS Modules", <Icons.css key="cssmodules" />],
  ["Prisma ORM", <Icons.prisma key="prisma" />],
  ["PostgreSQL", <Icons.postgresql key="postgresql" />],
  ["MS SQL Server", <Icons.sqlserver key="mssql" />],
  ["Firebase", <Icons.firebase key="firebase" />],
  ["tRPC", <Icons.trpc key="trpc" />],
  ["Framer motion", <Icons.framer key="framermotion" />],
  ["RabbitMQ", <Icons.rabbitmq key="rabbitmq" />],
  ["Playwright", <Icons.playwright key="playwright" />],
  ["Selenium", <Icons.selenium key="selenium" />],
  ["OpenAI API", <Icons.openapi key="openapi" />],
]);

export function getTechnologyLogo(technology: string) {
  if (!tagsMap.has(technology)) {
    return null;
  }
  return tagsMap.get(technology);
}
