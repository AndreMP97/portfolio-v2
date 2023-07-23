import { forwardRef } from "react";
import Image from "next/image";
import CustoJusto from "../../assets/custojusto.png";

const Experience = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col h-screen md:h-auto w-full justify-start md:justify-center items-start lg:items-center pt-24"
    >
      <div className="prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none w-full pb-10">
        <h2 className="flex border-b-4 w-2/3 justify-center items-center border-zinc-500 pb-2">
          My experience
        </h2>
      </div>
      <div className="flex flex-col md:flex-row h-auto w-full lg:w-3/4 bg-zinc-800 rounded-md p-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex justify-center items-center md:w-2/6 px-4">
          <a href="https://www.custojusto.pt" target="_blank">
            <Image src={CustoJusto} alt="CustoJusto logo" />
          </a>
        </div>
        <div className="prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none md:w-4/6">
          <h3 className="text-center md:text-left">Front-end Developer</h3>
          <h4 className="text-center md:text-left">March 2023 - Present</h4>
          <h5 className="text-center md:text-left">Internship</h5>
          <ul>
            <li>Worked on the main website as well as the Pro web app.</li>
            <li>Mainly worked with Next.js and also with Svelte.</li>
            <li>
              Used popular frameworks such as Bootstrap CSS and Material-UI.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
