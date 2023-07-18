import Head from "next/head";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HeroBlock } from "@/components/main-page-blocks/hero-block";
import { ProjectsBlock } from "@/components/main-page-blocks/projects-block";
import { ContactBlock } from "@/components/main-page-blocks/contact-block";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className="flex w-full flex-col">
        <HeroBlock />
        <ProjectsBlock />
        <div className="w-full bg-zinc-400 py-20 dark:bg-dark-gray">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
