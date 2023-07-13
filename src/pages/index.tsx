import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { siteConfig } from "@/config/site";
import { HeroBlock } from "@/components/main-page-blocks/hero-block";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <HeroBlock />
      </div>
    </>
  );
}
