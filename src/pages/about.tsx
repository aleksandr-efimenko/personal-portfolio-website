import Head from "next/head";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className="flex w-full flex-col"></section>
    </>
  );
}
