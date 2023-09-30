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
            I&#39;m a software developer living in Portugal. I enjoy creating
            applications that can be used by everyone on the internet. My
            interest in software development started at a young age when I
            decided to inspect the elements of a website, which led me to learn
            the basics of HTML and CSS.
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
            Fast forwarding to 2018, I enrolled in a Bachelor of Science in
            Electrical and Computer Engineering, which combines the study of
            electrical engineering and computer science. During my degree, I
            became familiar with a multitude of subjects such as mathematics,
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
            Today, with the subjects that I learned during my B.Sc., I have the
            ability to design and develop software applications. Furthermore,
            I&#39;m an avid learner who enjoys experimenting with new
            technologies during my free time, and I&#39;m constantly striving to
            improve my skills to stay up-to-date with the industry.
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
            A few technologies I&#39;ve been working with recently:
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
