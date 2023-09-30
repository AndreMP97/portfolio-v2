import { forwardRef } from "react";
import Skills from "./skills";
import Photo from "./photo";
import { CurrentBreakpoint } from "../utils/breakpoints";
import { motion, useInView } from "framer-motion";

const About = forwardRef((props, ref) => {
  const breakpoint = CurrentBreakpoint();
  const excludedBreakpoints = ["xs", "sm", "md"];

  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col min-h-screen w-full pt-24"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="prose prose-invert prose-base lg:prose-lg max-w-none lg:w-2/3">
          <motion.h2
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              delay: excludedBreakpoints?.includes(breakpoint) ? 0 : 4,
              duration: 1,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: "all",
            }}
            className="flex flex-col justify-center items-center"
          >
            About me
            <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
          </motion.h2>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              delay: excludedBreakpoints?.includes(breakpoint) ? 1 : 5,
              duration: 0.5,
            }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
              }
            }
          >
            I'm a dedicated software developer based in Portugal, passionate
            about crafting web applications for audiences. My journey
            into the world of software development began at a young age when I
            delved into inspecting website elements, sparking my curiosity for
            HTML and CSS.
          </motion.p>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              delay: excludedBreakpoints?.includes(breakpoint) ? 1.5 : 5.5,
              duration: 0.5,
            }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
              }
            }
          >
            Fast forward to 2018, I embarked on a Bachelor of Science in
            Electrical and Computer Engineering, a degree that seamlessly blends
            electrical engineering and computer science. My academic journey
            exposed me to a diverse range of subjects, including mathematics,
            physics, programming, electronics, instrumentation, automation,
            control, telecommunications, energy systems, and management.
          </motion.p>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              delay: excludedBreakpoints?.includes(breakpoint) ? 2 : 6,
              duration: 0.5,
            }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
              }
            }
          >
            Nowadays, bolstered by the knowledge I acquired during my B.Sc.
            studies and my hands-on experience, I have the expertise to craft
            innovative software applications. Beyond my professional pursuits, I
            enjoy exploring cutting-edge technologies in my free time. My
            dedication to skill refinement serves as my approach to staying in
            sync with the constantly evolving industry.
          </motion.p>
          <motion.strong
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: "all",
            }}
          >
            A few technologies I've been working with recently:
          </motion.strong>
        </div>
        {!excludedBreakpoints?.includes(breakpoint) && (
          <motion.div
            initial={{
              x: "100%",
              opacity: 0,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
              }
            }
            className="flex justify-center lg:mt-28 mb-8 lg:justify-end lg:w-1/3"
          >
            <Photo />
          </motion.div>
        )}
      </div>
      <Skills />
    </section>
  );
});

About.displayName = "About";

export default About;
