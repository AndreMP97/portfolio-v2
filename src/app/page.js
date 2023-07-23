"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import { CSSTransition } from "react-transition-group";
import { Squash as Hamburger } from "hamburger-react";
import { RingLoader } from "react-spinners";
import Experience from "./components/experience";

export default function Home() {
  const navRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [nav, setNav] = useState(false);

  const navLinks = [
    { name: "About", ref: aboutRef },
    { name: "Experience", ref: experienceRef },
    { name: "Work", ref: workRef },
    { name: "Contact", ref: contactRef },
  ];

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

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, "1000");
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen min-w-screen">
          <RingLoader size={128} color="#ffffff" />
        </div>
      ) : (
        <>
          <nav
            ref={navRef}
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
              <Hamburger size={32} toggled={nav} toggle={setNav} />
            </div>

            <CSSTransition
              in={nav}
              timeout={500}
              classNames="nav"
              unmountOnExit
            >
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
          </nav>

          <main className="flex flex-col w-full mt-20 px-4 md:px-10 lg:px-12 xl:px-20">
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <Experience ref={experienceRef} />
            <div ref={workRef} className="h-screen"></div>
            <Contact ref={contactRef} />
          </main>
          <footer className="flex justify-center items-center h-24 text-white lg:hover:text-green-500 md:px-10 lg:px-12 xl:px-20 border-t-2 border-zinc-500">
            <a href="https://github.com/AndreMP97/portfolio" target="_blank">
              MADE BY ANDRÉ PACHECO
            </a>
          </footer>
        </>
      )}
    </>
  );
}
