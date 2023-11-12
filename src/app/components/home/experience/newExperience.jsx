// Resources
import { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
// Assets
import CustoJusto from "@assets/custojusto.png";

const NewExperience = forwardRef((props, ref) => {
  const [inViewRef, inView, entry] = useInView({ threshold: 1 });

  useEffect(() => {
    // console.log("inView NewExperience:", inView);
    if (inView) {
      props?.setActiveSection(entry.target.id);
    }
  }, [inView, entry]);

  return (
    <section
      ref={(el) => {
        ref.current = el;
        inViewRef(el);
      }}
      id="experience"
      className="flex flex-col w-full text-white mt-24"
    >
      <h2 className="font-semibold text-center text-2xl lg:text-3xl">
        My experience
      </h2>
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      <div className="flex flex-col md:flex-row w-full mt-5 lg:mt-6 md:gap-6 px-4">
        <div className="flex flex-col w-full md:w-1/2 gap-5 md:gap-6">
          <p className="flex justify-center md:justify-start items-center order-2 md:order-1 h-8">
            March 2023 - Present
          </p>
          <a
            href="https://www.custojusto.pt"
            target="_blank"
            className="order-1 lg:order-2"
          >
            <Image src={CustoJusto} alt="CustoJusto logo" />
          </a>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <h3 className="font-semibold text-xl lg:text-2xl mb-5 lg:mb-6">
            Front-end Developer
          </h3>
          <h4>Internship</h4>
          <p>Texto</p>
        </div>
      </div>
    </section>
  );
});

NewExperience.displayName = "NewExperience";

export default NewExperience;
