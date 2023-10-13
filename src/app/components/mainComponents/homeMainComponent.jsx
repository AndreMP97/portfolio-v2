"use client";

import { useRef } from "react";
import Navbar from "../navbar/navbar";
import Hero from "../home/hero";
import About from "../home/about";
import Experience from "../home/experience";
import Projects from "../home/projects";
import Contact from "../home/contact";
import Footer from "../footer/footer";

const HomeMainComponent = ({ isMobile }) => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const navLinks = [
    { name: "About", ref: aboutRef },
    { name: "Experience", ref: experienceRef },
    { name: "Work", ref: workRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} isMobile={isMobile} />
      <main className="flex flex-col w-full mt-20 px-4 md:px-10 lg:px-12 xl:px-20">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={workRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
};

export default HomeMainComponent;
