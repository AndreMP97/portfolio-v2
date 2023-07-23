import { forwardRef, useEffect } from "react";
import Skills from "./skills";
import Photo from "./photo";
import { CurrentBreakpoint } from "../utils/breakpoints";

const About = forwardRef((props, ref) => {
  const breakpoint = CurrentBreakpoint();

  const excludedBreakpoints = ["xs", "sm", "md"];

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col min-h-screen w-full pt-24"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none lg:w-2/3">
          <h2 className="flex border-b-4 w-full justify-center items-center lg:justify-start border-zinc-500 pb-2">About me</h2>
          <p>
            I&#39;m a software developer living in Portugal. I
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
            technologies during my free time, and I&#39;m constantly striving to
            improve my skills to stay up-to-date with the industry.
          </p>
          <strong>
            Here are a few technologies I&#39;ve been working with recently:
          </strong>
        </div>
        {!excludedBreakpoints?.includes(breakpoint) && (
          <div className="flex justify-center lg:mt-28 mb-8 lg:justify-end lg:w-1/3">
            <Photo />
          </div>
        )}
      </div>
      <Skills />
    </section>
  );
});

About.displayName = "About";

export default About;
