import { forwardRef } from "react";
import { motion } from "framer-motion";
import { CurrentBreakpoint } from "../utils/breakpoints";
import Photo from "./photo";
//Icons
import { SiGooglemaps, SiGithub, SiLinkedin } from "react-icons/si";

const Hero = forwardRef((props, ref) => {
  const breakpoint = CurrentBreakpoint();

  const includedBreakpoints = ["xs", "sm", "md"];
  const mobileBreakpoints = ["xs", "sm"];

  return (
    <section
      ref={ref}
      id="hero"
      className="flex flex-col h-[calc(100vh-80px)] lg:h-80 w-full justify-center items-center"
    >
      {includedBreakpoints?.includes(breakpoint) && (
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="flex justify-center pb-12"
        >
          <Photo />
        </motion.div>
      )}
      <div className="prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none">
        {mobileBreakpoints?.includes(breakpoint) ? (
          <>
            <motion.h1
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="flex justify-center items-center"
            >
              Hello,
            </motion.h1>
            <motion.h1
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
                duration: 1,
              }}
              className="flex justify-center items-center"
            >
              I&#39;m André Pacheco
            </motion.h1>
          </>
        ) : (
          <motion.h1
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="hidden md:flex justify-center items-center"
          >
            Hello, I&#39;m André Pacheco
          </motion.h1>
        )}
        <motion.h2
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="flex justify-center items-center text-zinc-500"
        >
          Software Developer
        </motion.h2>
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 1,
          }}
          className="flex justify-center items-center"
        >
          <a className="flex justify-center items-center text-white lg:hover:text-green-500 no-underline cursor-pointer">
            <SiGooglemaps size={32} className="mr-2" />
            Porto, Portugal
          </a>
        </motion.p>
        <motion.span
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
          className="flex justify-center items-center space-x-4"
        >
          <a
            href="https://github.com/AndreMP97"
            target="_blank"
            aria-label="GitHub"
          >
            <SiGithub
              size={32}
              className="text-white lg:hover:text-green-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andrempacheco97"
            target="_blank"
            aria-label="LinkedIn"
          >
            <SiLinkedin
              size={32}
              className="text-white lg:hover:text-green-500"
            />
          </a>
        </motion.span>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
