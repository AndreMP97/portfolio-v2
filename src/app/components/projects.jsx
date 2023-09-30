// Resources
import { forwardRef } from "react";
import { motion } from "framer-motion";
// Sub-components
import Card from "./card";
// Data
import data from "../helpers/projects.json";

const Projects = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col h-auto w-full justify-start md:justify-center items-start lg:items-center pt-24"
    >
      <div className="flex flex-col justify-start items-center prose prose-invert prose-base lg:prose-lg max-w-none w-full pb-10">
        <motion.h2
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="flex flex-col justify-center items-center"
        >
          Projects
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
        </motion.h2>
        <div className="flex flex-col space-y-8">
          {data?.map((project, index) => (
            <Card key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
