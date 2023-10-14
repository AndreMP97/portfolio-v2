// Resources
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
// Sub-components
import Card from "@components/home/work/card";
// Data
import data from "@helpers/projects.json";

const Projects = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <section
      ref={ref}
      id="work"
      className="flex flex-col h-auto w-full justify-start md:justify-center items-start lg:items-center pt-24"
    >
      <div className="flex flex-col justify-start items-center max-w-none w-full pb-10">
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
          className="flex flex-col justify-center items-center text-white lg:mb-3 font-semibold text-2xl lg:text-3xl"
        >
          What I've worked on
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
        </motion.h2>
        <div className="w-full grid lg:grid-cols-2 grid-flow-row">
          {data?.map((project, index) => (
            <Card
              key={index + 1}
              index={index + 1}
              project={project}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
