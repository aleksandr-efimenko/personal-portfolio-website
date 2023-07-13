import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import path from "path";
import { promises as fs } from "fs";
import Image from "next/image";

async function getImageFilenames() {
  // using process.cwd() to get the path
  const imageDirectory = path.join(process.cwd(), "/public/main-block-images");
  // fs.readdir to get all files in directory
  const imageFilenames = await fs.readdir(imageDirectory);
  console.log(imageFilenames);
  return imageFilenames;
}

export function HeroBlock() {
  const { scrollYProgress } = useScroll();
  const [imageFilenames, setImageFilenames] = useState<string[]>([]);

  useEffect(() => {
    if (imageFilenames.length === 0)
      void getImageFilenames().then((filenames) =>
        setImageFilenames(filenames)
      );
  }, [imageFilenames.length]);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 h-2 origin-top-left bg-red-500"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
    </>
  );
}

function ScrollImage({ filename }: { filename: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  //   const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Image src={`${filename}`} alt="my image" />
      </div>
    </section>
  );
}
