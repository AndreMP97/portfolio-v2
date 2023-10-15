import Image from "next/image";
import CustoJusto from "@assets/custojusto.png";
import { forwardRef } from "react";

const NewExperience = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="experience" className="flex flex-col w-full text-white pt-24">
      <h2 className="font-semibold text-center text-2xl lg:text-3xl">
        My experience
      </h2>
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      <div className="flex flex-col lg:flex-row w-full mt-5 lg:mt-6 lg:gap-6">
        <div className="flex flex-col w-full lg:w-1/3 gap-5 lg:gap-6">
          <p className="flex justify-center lg:justify-start items-center order-2 lg:order-1 h-8">
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
        <div className="flex flex-col w-full lg:w-2/3">
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
