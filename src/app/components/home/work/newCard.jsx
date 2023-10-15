import Image from "next/image";

const NewCard = ({ index, project, isActive, setIsActive }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full mt-6 lg:mt-0 lg:p-6 text-white hover:text-green-500 hover:cursor-pointer${
        isActive && isActive !== index ? ` opacity-40` : ``
      }`}
      onMouseEnter={() => setIsActive(index)}
      onMouseLeave={() => setIsActive(null)}
    >
      <div className="flex relative justify-center items-center h-56 lg:h-32 xl:h-44 mt-3 lg:mt-0 lg:w-1/3 order-2 lg:order-1">
        {project?.image && (
          <Image
            fill
            style={{ objectFit: "contain", margin: 0 }}
            src={project?.image}
            alt={project?.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-36 px-4"
          />
        )}
      </div>
      <div className="flex flex-col max-w-none lg:w-2/3 order-1 lg:order-2">
        <div className="hidden lg:flex items-center">
          <span className="text-2xl lg:text-3xl pr-2">{index}</span>
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-green-700 to-green-600" />
        </div>
        <h3 className="mt-2 font-semibold text-center lg:text-start text-2xl lg:text-3xl">
          {project?.title}
        </h3>
      </div>
    </div>
  );
};

export default NewCard;
