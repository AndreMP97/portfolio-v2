import Image from "next/image";
import Foto from "../../../assets/foto.jpg";

const Photo = () => {
  return (
    <>
      <Image
        priority
        className="aspect-auto h-48 w-48 md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80 z-10 mt-10 mr-10 rounded-md"
        src={Foto}
        alt="Profile photo"
      />
      <div className="absolute rounded-md h-48 w-48 md:h-60 md:w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80 bg-zinc-500" />
    </>
  );
};

export default Photo;
