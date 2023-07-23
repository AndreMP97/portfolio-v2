import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = ({ navLinks }) => {
  const [nav, setNav] = useState(false);

  const handleClick = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

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

      {/* Desktop */}
      <div className="hidden md:flex flex-row justify-center items-center space-x-8">
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
          rel="noreferrer"
        >
          <button className="border-2 border-zinc-100 py-2 px-4 rounded-md text-white lg:hover:text-green-500 lg:hover:border-green-500">
            Resume
          </button>
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Hamburger size={24} toggled={nav} toggle={setNav} />
      </div>

      <CSSTransition in={nav} timeout={500} classNames="nav" unmountOnExit>
        <div
          className={`flex flex-col justify-start items-center fixed top-0 right-0 h-full w-96 bg-zinc-900 mt-20 text-white z-50 md:hidden`}
        >
          <ul className="flex flex-col space-y-6 pt-24 items-center">
            {navLinks?.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  handleClick(link?.ref);
                  setNav((state) => !state);
                }}
                className="cursor-pointer text-white text-lg lg:hover:text-green-500"
              >
                {link?.name}
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_"
            rel="noreferrer"
          >
            <button className="mt-6 border-2 border-zinc-100 py-2 px-4 rounded-md text-white lg:hover:text-green-500 lg:hover:border-green-500">
              Resume
            </button>
          </a>
        </div>
      </CSSTransition>
    </motion.nav>
  );
};

export default Navbar;
