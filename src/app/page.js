"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { RingLoader } from "react-spinners";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const [isLoading, setIsLoading] = useState(true);

  const navLinks = [
    { name: "About", ref: aboutRef },
    { name: "Experience", ref: experienceRef },
    { name: "Work", ref: workRef },
    { name: "Contact", ref: contactRef },
  ];

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
          <Navbar navLinks={navLinks} />
          <main className="flex flex-col w-full mt-20 px-4 md:px-10 lg:px-12 xl:px-20">
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <Experience ref={experienceRef} />
            <div ref={workRef} className="h-screen"></div>
            <Contact ref={contactRef} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
