import Image from "next/image";
import Photo from "@/assets/foto.jpg";

const Hero = () => {
  return (
    <section className="container flex h-[calc(100dvh-80px)] items-center">
      <div className="w-2/3">
        <h1>I'm André Pacheco</h1>
        <h2>Front-end Developer</h2>
      </div>
      <div className="flex justify-center w-1/3">
        <Image
          priority
          src={Photo}
          className="z-10 mr-10 mt-10 aspect-auto h-48 w-48 rounded-md md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
          alt="Profile photo"
        />
        <div className="absolute h-48 w-48 rounded-md bg-zinc-500 md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80" />
      </div>
    </section>
  );
};

export default Hero;
