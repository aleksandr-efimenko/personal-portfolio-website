import Head from "next/head";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HeroBlock } from "@/components/main-page-blocks/hero-block";
import { ProjectsBlock } from "@/components/main-page-blocks/projects-block";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className="flex w-full flex-col">
        <HeroBlock />
        <ProjectsBlock />
      </section>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa
        molestiae? Saepe fugit accusantium atque doloremque asperiores. Quidem
        incidunt facere dolores sint, amet sunt modi alias odio reprehenderit,
        molestias provident?
      </p>
    </>
  );
}
