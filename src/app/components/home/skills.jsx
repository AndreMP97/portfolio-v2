import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSvelte,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { CurrentBreakpoint } from "../../utils/breakpoints";

const Skills = () => {
  const icons = [
    {
      name: "HTML",
      icon: <SiHtml5 size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "CSS",
      icon: <SiCss3 size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "React",
      icon: <SiReact size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "Svelte",
      icon: <SiSvelte size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "Jira",
      icon: <SiJirasoftware size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "Python",
      icon: <SiPython size={64} className="m-auto text-zinc-400" />,
    },
    {
      name: "C/C++",
      icon: <SiCplusplus size={64} className="m-auto text-zinc-400" />,
    },
  ];

  const breakpoint = CurrentBreakpoint();
  const excludedBreakpoints = ["xs", "sm", "md"];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: excludedBreakpoints?.includes(breakpoint) ? 1 : 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: excludedBreakpoints?.includes(breakpoint) ? 0.2 : 0.8,
      }}
      className="grid grid-cols-3 gap-4 md:gap-8 lg:grid-cols-6 lg:gap-6 mt-12"
    >
      {icons.map((item) => (
        <div
          key={item.name}
          className="flex flex-col justify-between items-center space-y-2 md:space-y-4"
        >
          {item.icon}
          <p className="text-zinc-400">{item.name}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
