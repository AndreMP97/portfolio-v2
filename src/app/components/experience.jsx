import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustoJusto from "../../assets/custojusto.png";

const Experience = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col h-screen md:h-auto w-full justify-start md:justify-center items-start lg:items-center pt-24"
    >
      <div className="flex flex-col justify-start items-center prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none w-full pb-10">
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
          My experience
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
        </motion.h2>
        <motion.div
          initial={{
            y: 100,
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
            amount: 0.2,
          }}
          className="flex flex-col md:flex-row h-auto w-full lg:w-3/4 bg-zinc-800 rounded-md p-6 space-y-6 md:space-y-0 md:space-x-6"
        >
          <div className="flex justify-center items-center md:w-2/6 px-4">
            <motion.a
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              href="https://www.custojusto.pt"
              target="_blank"
            >
              <Image src={CustoJusto} alt="CustoJusto logo" />
            </motion.a>
          </div>
          <div className="prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none md:w-4/6">
            <motion.h3
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="text-center md:text-left"
            >
              Front-end Developer
            </motion.h3>
            <motion.h4
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 1.3,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="text-center md:text-left"
            >
              March 2023 - Present
            </motion.h4>
            <motion.h5
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 1.6,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="text-center md:text-left"
            >
              Internship
            </motion.h5>
            <ul>
              <motion.li
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1.9,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                Worked on the main website as well as the Pro web app.
              </motion.li>
              <motion.li
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 2.2,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                Mainly worked with Next.js and also with Svelte.
              </motion.li>
              <motion.li
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 2.5,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                Used popular frameworks such as Bootstrap CSS and Material-UI.
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
