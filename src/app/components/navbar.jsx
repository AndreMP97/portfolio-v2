import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { CurrentBreakpoint } from "../utils/breakpoints";

const Navbar = ({ navLinks }) => {
  const breakpoint = CurrentBreakpoint();
  const mobileBreakpoints = ["xs", "sm"];

  const [nav, setNav] = useState(false);
  const [border, setBorder] = useState(false);

  const handleClick = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const listVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 25 && !border) {
        setBorder(true);
      } else {
        setBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex h-20 w-full max-w-screen-2xl p-4 md:px-10 lg:px-12 xl:px-20 justify-between items-center bg-zinc-900 text-white fixed top-0 z-50"
    >
      <button
        onClick={() => !nav && handleClick()}
        className="font-greatVibes text-2xl text-white -rotate-12 lg:hover:text-green-500 lgh"
      >
        AP
      </button>

      {mobileBreakpoints?.includes(breakpoint) ? (
        <>
          <Hamburger size={24} toggled={nav} toggle={setNav} />
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={nav ? "open" : "closed"}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 1, x: "100%" },
            }}
            transition={{
              duration: 0.5,
            }}
            className={`flex flex-col justify-start items-center fixed top-0 right-0 h-screen w-screen bg-zinc-900 mt-20 text-white z-40`}
          >
            <motion.ul
              variants={listVariants}
              className="flex flex-col h-full w-full space-y-6 justify-center items-center pb-[160px]"
            >
              {navLinks?.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  onClick={() => {
                    handleClick(link?.ref);
                    setNav((state) => !state);
                  }}
                  className="cursor-pointer text-white text-lg lg:hover:text-green-500"
                >
                  {link?.name}
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="pt-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_"
                  rel="noopener noreferrer"
                  className="h-full mt-6 border-2 border-zinc-100 py-2 px-4 rounded-md text-white"
                >
                  Resume
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </>
      ) : (
        <div className="flex flex-row justify-center items-center space-x-8">
          <ul className="flex flex-row space-x-6">
            {navLinks?.map((link, index) => (
              <li
                key={index}
                onClick={() => handleClick(link?.ref)}
                className="cursor-pointer text-white lg:hover:text-green-500"
              >
                {link?.name}
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-zinc-100 py-2 px-4 rounded-md text-white lg:hover:text-green-500 lg:hover:border-green-500">
              Resume
            </button>
          </a>
        </div>
      )}

      {border && (
        <div className="absolute bottom-0 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      )}
    </motion.nav>
  );
};

export default Navbar;
