import { forwardRef } from "react";
//Icons
import { SiGooglemaps, SiGithub, SiLinkedin } from "react-icons/si";
import { CurrentBreakpoint } from "../utils/breakpoints";
import Photo from "./photo";

const Hero = forwardRef((props, ref) => {
  const breakpoint = CurrentBreakpoint();

  const includedBreakpoints = ["xs", "sm", "md"];

  return (
    <section
      ref={ref}
      id="hero"
      className="flex flex-col h-[calc(100vh-80px)] lg:h-80 w-full justify-center items-center"
    >
      {includedBreakpoints.includes(breakpoint) && (
        <div className="flex justify-center pb-12">
          <Photo />
        </div>
      )}
      <div className="prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none">
        <h1 className="flex justify-center items-center md:hidden">Hello,</h1>
        <h1 className="flex justify-center items-center md:hidden">
          I&#39;m André Pacheco
        </h1>
        <h1 className="hidden md:flex justify-center items-center">
          Hello, I&#39;m André Pacheco
        </h1>
        <h2 className="flex justify-center items-center text-zinc-500">
          Front-end Developer
        </h2>
        <p>
          <a
            className="flex justify-center items-center text-white lg:hover:text-green-500 no-underline"
            href="https://en.wikipedia.org/wiki/Porto"
            target="_blank"
          >
            <SiGooglemaps size={32} className="mr-2" />
            Porto, Portugal
          </a>
        </p>
        <p className="flex justify-center items-center space-x-4">
          <a
            href="https://github.com/AndreMP97"
            target="_blank"
            aria-label="GitHub"
          >
            <SiGithub
              size={32}
              className="text-white lg:hover:text-green-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andrempacheco97"
            target="_blank"
            aria-label="LinkedIn"
          >
            <SiLinkedin
              size={32}
              className="text-white lg:hover:text-green-500"
            />
          </a>
        </p>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
