"use client";

// Resources
import { useRef, useState } from "react";
// Sub-components
import Navbar from "@components/navbar/navbar";
// import Hero from "@components/home/hero/hero";
// import About from "@components/home/about/about";
// import Experience from "@components/home/experience/experience";
// import Projects from "@components/home/work/work";
// import Contact from "@components/home/contact/contact";
import Footer from "@components/footer/footer";
import NewHero from "@components/home/hero/newHero";
import NewAbout from "@components/home/about/newAbout";
import NewExperience from "@components/home/experience/newExperience";
import NewWork from "@components/home/work/newWork";
import NewContact from "@components/home/contact/newContact";

const HomeMainComponent = ({ isMobile }) => {
  const [activeSection, setActiveSection] = useState();
  // const heroRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const navLinks = [
    { name: "About", ref: aboutRef, section: "#about" },
    { name: "Experience", ref: experienceRef, section: "#experience" },
    { name: "Work", ref: workRef, section: "#work" },
    { name: "Contact", ref: contactRef, section: "#contact" },
  ];

  return (
    <>
      {isMobile && <Navbar navLinks={navLinks} isMobile={isMobile} />}
      <header className="flex w-full lg:w-1/3 lg:h-screen lg:max-h-screen mt-20 lg:mt-0 py-24 lg:py-20 lg:sticky lg:top-0 px-4">
        <NewHero
          isMobile={isMobile}
          navLinks={navLinks}
          activeSection={activeSection}
        />
      </header>
      <main className="flex flex-col w-full lg:w-2/3 lg:pt-20 px-4">
        <NewAbout ref={aboutRef} setActiveSection={setActiveSection} />
        <NewExperience
          ref={experienceRef}
          setActiveSection={setActiveSection}
        />
        <NewWork ref={workRef} setActiveSection={setActiveSection} />
        <NewContact ref={contactRef} setActiveSection={setActiveSection} />
        <Footer />
      </main>
      {/*<Navbar navLinks={navLinks} isMobile={isMobile} />
      <main className="flex flex-col w-full mt-20 px-4">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={workRef} />
        <Contact ref={contactRef} />
      </main>
  <Footer />*/}
    </>
  );
};

export default HomeMainComponent;
