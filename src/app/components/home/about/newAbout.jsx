import { forwardRef } from "react";
import NewSkills from "./newSkills";

const NewAbout = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="flex flex-col w-full text-white">
      <h2 className="font-semibold text-center text-2xl lg:text-3xl">
        About Me
      </h2>
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      <p className="mt-5 lg:mt-6 text-base lg:text-lg">
        I'm a dedicated software developer based in Portugal, passionate about
        crafting web applications for audiences. My journey into the world of
        software development began at a young age when I delved into inspecting
        website elements, sparking my curiosity for HTML and CSS.
      </p>
      <p className="mt-5 lg:mt-6 text-base lg:text-lg">
        Fast forward to 2018, I embarked on a Bachelor of Science in Electrical
        and Computer Engineering, a degree that seamlessly blends electrical
        engineering and computer science. My academic journey exposed me to a
        diverse range of subjects, including mathematics, physics, programming,
        electronics, instrumentation, automation, control, telecommunications,
        energy systems, and management.
      </p>
      <p className="my-5 lg:my-6 text-base lg:text-lg">
        Nowadays, bolstered by the knowledge I acquired during my B.Sc. studies
        and my hands-on experience, I have the expertise to craft innovative
        software applications. Beyond my professional pursuits, I enjoy
        exploring cutting-edge technologies in my free time. My dedication to
        skill refinement serves as my approach to staying in sync with the
        constantly evolving industry.
      </p>
      <NewSkills />
    </section>
  );
});

export default NewAbout;
