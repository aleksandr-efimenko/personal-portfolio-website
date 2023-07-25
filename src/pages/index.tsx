import Head from "next/head";
import { siteConfig } from "@/config/site";
import { HeroBlock } from "@/components/main-page-blocks/hero/hero-block";
import { ProjectsBlock } from "@/components/main-page-blocks/projects/projects-block";
import { ContactBlock } from "@/components/main-page-blocks/contact/contact-block";
import { TimelineBlock } from "@/components/main-page-blocks/timeline/timeline-block";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className="flex w-full flex-col">
        <HeroBlock />
        <div className="container pb-10 pt-16 lg:py-20">
          <ProjectsBlock />
        </div>
        <div className="container pb-20 pt-10 lg:py-20">
          <TimelineBlock />
        </div>

        <div className="w-full bg-zinc-400 py-20 dark:bg-dark-gray">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
