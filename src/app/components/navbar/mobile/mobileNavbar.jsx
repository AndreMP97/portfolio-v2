// Resources
import Link from "next/link";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const MobileNavbar = ({ navLinks, nav, setNav, handleClick }) => {
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

  return (
    <div className="flex xl:hidden">
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
              className="text-white text-lg lg:hover:text-green-500"
            >
              <Link href={link?.section} scroll={false}>
                {link?.name}
              </Link>
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
    </div>
  );
};

export default MobileNavbar;
