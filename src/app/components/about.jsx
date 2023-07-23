import Image from "next/image";
import { forwardRef } from "react";
import Photo from "../../assets/foto.jpg";
import Skills from "./skills";

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col min-h-screen w-full pt-16 lg:pt-24"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none lg:w-2/3">
          <h2 className="border-b-4 border-zinc-500 pb-2">About me</h2>
          <p>
            I&#39;m André Pacheco, a software developer living in Portugal. I
            enjoy creating applications that can be used by everyone on the
            internet. My interest in software development started at a young age
            when I decided to inspect the elements of a website, which led me to
            learn the basics of HTML and CSS.
          </p>
          <p>
            Fast forwarding to 2018, I enrolled in a Bachelor of Science in
            Electrical and Computer Engineering, which combines the study of
            electrical engineering and computer science. During my degree, I
            became familiar with a multitude of subjects such as mathematics,
            physics, programming, electronics, instrumentation, automation,
            control, telecommunications, energy systems, and management.
          </p>
          <p>
            Today, with the subjects that I learned during my B.Sc., I have the
            ability to design and develop software applications. Furthermore,
            I&#39;m an avid learner who enjoys experimenting with new
            technologies during my free time, and I&#39;m constantly striving
            to improve my skills to stay up-to-date with the industry.
          </p>
          <strong>
            Here are a few technologies I&#39;ve been working with recently:
          </strong>
        </div>
        <div className="flex justify-center order-1 lg:mt-28 mb-8 lg:justify-end lg:order-2 lg:w-1/3">
          <Image
            priority
            className="aspect-auto h-48 w-48 md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80 z-10 mt-10 mr-10 rounded-md"
            src={Photo}
            alt="Profile photo"
          />
          <div className="absolute rounded-md h-48 w-48 md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80 bg-zinc-500" />
        </div>
      </div>
      <Skills />
    </section>
  );
});

About.displayName = "About";

export default About;
