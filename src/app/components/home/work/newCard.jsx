import Image from "next/image";

const NewCard = ({ index, project, isActive, setIsActive }) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full mt-5 lg:mt-6 text-white hover:text-green-500 hover:cursor-pointer${
        isActive && isActive !== index ? ` opacity-40` : ``
      }`}
      onMouseEnter={() => setIsActive(index)}
      onMouseLeave={() => setIsActive(null)}
    >
      <div className="flex relative justify-center items-center h-56 md:h-64 mt-3 md:mt-0 md:w-1/2 order-2 md:order-1">
        {project?.image && (
          <Image
            fill
            style={{ objectFit: "contain" }}
            src={project?.image}
            alt={project?.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="px-4"
          />
        )}
      </div>
      <div className="flex flex-col max-w-none md:w-1/2 order-1 md:order-2">
        <div className="hidden md:flex items-center">
          <span className="text-2xl lg:text-3xl pr-2">{index}</span>
          <div className="h-0.5 w-full lg:w-5/6 rounded-full bg-gradient-to-r from-green-700 to-green-600" />
        </div>
        <h3 className="mt-2 font-semibold text-center md:text-start text-2xl lg:text-3xl">
          {project?.title}
        </h3>
      </div>
    </div>
  );
};

export default NewCard;
