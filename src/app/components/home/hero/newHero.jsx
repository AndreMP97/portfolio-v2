import Foto from "@assets/foto.jpg";
import SideBar from "@components/sidebar/sidebar";
import Image from "next/image";
import { forwardRef } from "react";
import { SiGithub, SiGooglemaps, SiLinkedin } from "react-icons/si";

const NewHero = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="hero"
      className="flex flex-col justify-center items-center w-full"
    >
      <Image
        priority
        className="aspect-auto w-48 lg:w-56 z-10 rounded-md mb-8"
        src={Foto}
        alt="Profile photo"
      />
      <h1 className="font-bold mb-8 text-white text-3xl lg:text-4xl xl:text-5xl">
        André Pacheco
      </h1>
      <h2 className="font-medium mb-6 text-white text-xl lg:text-2xl xl:text-3xl">
        Software Developer
      </h2>
      {/*<p className="mb-5 lg:mb-6 text-base lg:text-lg">
        <a
          href="https://g.co/kgs/Z2htXa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-white lg:hover:text-green-500 no-underline cursor-pointer"
        >
          <SiGooglemaps size={32} className="mr-2" />
          Porto, Portugal
        </a>
      </p>*/}
      {!props?.isMobile && <SideBar navLinks={props?.navLinks} />}
      <div className="flex w-full lg:h-full justify-center items-end space-x-4">
        <a
          href="https://github.com/AndreMP97"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SiGithub size={32} className="text-white lg:hover:text-green-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrempacheco97"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin
            size={32}
            className="text-white lg:hover:text-green-500"
          />
        </a>
      </div>
    </section>
  );
});

export default NewHero;
