import { type ProjectData } from "./projects-block";
import { StyledLink } from "../../ui/styled-link";
import Image from "next/image";
import { ProjectCardDescription } from "./project-card-description";
import { AnimatePresence, motion } from "framer-motion";

export function ProjectCard(props: ProjectData) {
  const { title, tags, links, image } = props;
  const linksView = (
    <>
      {/* {links.projectInfo && (
  <StyledLink
    className="text-white"
    href={`/projects${links.projectInfo}`}
  >
    Description
  </StyledLink>
)} */}
      {links.livePreview && (
        <StyledLink className="text-white" href={links.livePreview}>
          Visit site
        </StyledLink>
      )}
      {links.github && (
        <StyledLink className="text-white" href={links.github}>
          Github repo
        </StyledLink>
      )}
      {!links.livePreview && !links.github && (
        <p className="uppercase text-white">Private project</p>
      )}
    </>
  );

  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transitionDuration: "500ms",
        animationTimingFunction: "linear",
      }}
      exit={{
        scale: 0.2,
        opacity: 0,
        transitionDuration: "500ms",
        animationTimingFunction: "linear",
        transform: "translate(100%, 0%)",
      }}
      key={title}
    >
      <div className="group relative w-full transition-all duration-200">
        <Image
          src={image}
          placeholder="blur"
          alt={title}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />

        <div className="absolute inset-0 hidden bg-black opacity-75 lg:group-hover:flex"></div>
        <div className="absolute inset-0 hidden flex-col items-center justify-center gap-5 py-4 lg:group-hover:flex ">
          {linksView}
        </div>
      </div>
      <div className="mt-4 flex gap-5 lg:hidden">{linksView}</div>
      <ProjectCardDescription
        projectInfoLink={links.github}
        title={title}
        tags={tags}
      />
    </motion.div>
  );
}
