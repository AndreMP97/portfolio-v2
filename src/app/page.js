"use client";

import { useRef } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";

export default function Home() {
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
      <Navbar navLinks={navLinks} />
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
}
