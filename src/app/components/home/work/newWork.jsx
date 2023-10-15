// Data
import data from "@helpers/projects.json";
import NewCard from "./newCard";
import { forwardRef, useState } from "react";

const NewWork = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <section
      ref={ref}
      id="work"
      className="flex flex-col w-full text-white mt-24"
    >
      <h2 className="font-semibold text-center text-2xl lg:text-3xl">
        What I've worked on
      </h2>
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      <div className="w-full grid grid-flow-row gap-y-6">
        {data?.map((project, index) => (
          <NewCard
            key={index + 1}
            index={index + 1}
            project={project}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </div>
    </section>
  );
});

NewWork.displayName = "NewWork";

export default NewWork;
