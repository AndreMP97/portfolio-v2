"use client";

import { useRef } from "react";
import Navbar from "@components/navbar/navbar";
import Hero from "@components/home/hero/hero";
import About from "@components/home/about/about";
import Experience from "@components/home/experience/experience";
import Projects from "@components/home/work/work";
import Contact from "@components/home/contact/contact";
import Footer from "@components/footer/footer";

const HomeMainComponent = ({ isMobile }) => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const navLinks = [
    { name: "About", ref: aboutRef, section: "#about" },
    { name: "Experience", ref: experienceRef, section: "#exprience" },
    { name: "Work", ref: workRef, section: "#work" },
    { name: "Contact", ref: contactRef, section: "#contact" },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} isMobile={isMobile} />
      <main className="flex flex-col w-full mt-20 px-4">
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
