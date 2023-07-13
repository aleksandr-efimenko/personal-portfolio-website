import { motion, useScroll, useSpring } from "framer-motion";

export function HeroBlock() {
  const { scrollYProgress } = useScroll();
  //   const scaleX = useSpring(scrollYProgress);
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
