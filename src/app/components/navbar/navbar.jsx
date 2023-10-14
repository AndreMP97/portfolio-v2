// Resources
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@utils/useScroll";
// Dynamic imports
const DesktopNavbar = dynamic(() => import("./desktop/desktopNavbar"));
const MobileNavbar = dynamic(() => import("./mobile/mobileNavbar"));

const Navbar = ({ navLinks, isMobile }) => {
  const pathname = usePathname();

  const [nav, setNav] = useState(false);
  const [border, setBorder] = useState(false);

  const handleClick = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (window?.scrollY > 25 && !border) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  useEffect(() => {
    useScroll();
    if (nav) {
      setBorder(false);
    } else {
      handleScroll();
    }
  }, [nav]);

  useEffect(() => {
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
      className="container flex justify-between items-center h-20 w-full p-4 bg-zinc-900 text-white fixed top-0 z-40"
    >
      <button
        onClick={() => !nav && handleClick()}
        className="font-greatVibes text-2xl text-white -rotate-12 lg:hover:text-green-500"
      >
        <Link href={pathname} scroll={false}>
          AP
        </Link>
      </button>

      {isMobile ? (
        <MobileNavbar
          navLinks={navLinks}
          nav={nav}
          setNav={setNav}
          handleClick={handleClick}
        />
      ) : (
        <DesktopNavbar navLinks={navLinks} handleClick={handleClick} />
      )}

      {border && (
        <div className="absolute bottom-0 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      )}
    </motion.nav>
  );
};

export default Navbar;
