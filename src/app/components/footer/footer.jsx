import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="flex flex-col h-20 w-full text-white lg:hover:text-green-500 md:px-10 lg:px-12 xl:px-20"
    >
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
      <a
        href="https://github.com/AndreMP97/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full w-full justify-center items-center uppercase"
      >
        Created by André Pacheco
      </a>
    </motion.footer>
  );
};

export default Footer;
