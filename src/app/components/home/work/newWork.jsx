// Resources
import { forwardRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// Data
import data from "@helpers/projects.json";
// Sub-components
import NewCard from "./newCard";

const NewWork = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(null);

  const [inViewRef, inView, entry] = useInView({ threshold: 0.5 });

  useEffect(() => {
    // console.log("inView NewWork:", inView);
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
