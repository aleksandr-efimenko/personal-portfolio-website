import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { siteConfig } from "@/config/site";
import { HeroBlock } from "@/components/main-page-blocks/hero-block";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <motion.main layoutScroll className="flex  w-full flex-col">
        <HeroBlock />
      </motion.main>
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
