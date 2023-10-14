// Resources
import Image from "next/image";
import Modal from "@components/home/work/modal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useScroll } from "@utils/useScroll";

const WorkCard = ({ index, project, isActive, setIsActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    useScroll();
  }, [isOpen]);

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row w-full mt-6 lg:mt-0 lg:p-6 text-white hover:text-green-500 hover:cursor-pointer${
          isActive && isActive !== index ? ` opacity-40` : ``
        }`}
        onMouseEnter={() => setIsActive(index)}
        onMouseLeave={() => !isOpen && setIsActive(null)}
        onClick={() => setIsOpen(true) && setIsActive(index)}
      >
        <div className="flex flex-col max-w-none lg:w-3/5">
          <div className="hidden lg:flex items-center">
            <span className="text-2xl lg:text-3xl pr-2">{index}</span>
            <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-green-700 to-green-600" />
          </div>
          <h3 className="mt-2 font-semibold text-center lg:text-start text-2xl lg:text-3xl">
            {project?.title}
          </h3>
        </div>
        <div className="flex relative justify-center items-center h-56 lg:h-32 xl:h-44 mt-3 lg:mt-0 lg:w-2/5">
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
      </div>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isOpen && (
          <Modal project={project} handleClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

WorkCard.displayName = "Work Card";

export default WorkCard;
