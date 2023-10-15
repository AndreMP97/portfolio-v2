import { motion } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ExternalLink = ({ href, label, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
};

const WorkModal = ({ project, handleClose }) => {
  const WebsiteLink = () => {
    if (project?.external?.website) {
      return (
        <ExternalLink href={project?.external?.website} label="Website">
          <FaExternalLinkAlt
            size={24}
            className="text-white lg:hover:text-green-500"
          />
        </ExternalLink>
      );
    }
  };

  const RepoLink = () => {
    if (project?.external?.repo) {
      return (
        <ExternalLink href={project?.external?.repo} label="GitHub">
          <SiGithub size={24} className="text-white lg:hover:text-green-500" />
        </ExternalLink>
      );
    }
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="fixed flex justify-center items-center overflow-hidden inset-0 z-50 backdrop-blur-sm"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container h-auto w-full my-6">
        <div className="flex flex-col h-auto w-full bg-zinc-800 rounded-md p-6">
          <div className="flex flex-col">
            <div className="flex w-full justify-between items-center">
              <h3 className="text-white text-2xl lg:text-3xl font-semibold">
                {project?.title}
              </h3>
              <button
                className="text-white hover:text-green-500"
                onClick={handleClose}
              >
                <FaTimes size={28} />
              </button>
            </div>
            <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
          </div>
          <div className="flex flex-col text-white">
            <p className="my-5 lg:my-6 text-base lg:text-lg">
              {project?.description}
            </p>
            <small className="mb-5 lg:mb-6 text-xs lg:text-sm">
              <span className="font-semibold mr-2">Stack:</span>
              {project?.stack?.map((tech, index) => (
                <span key={index} className="bg-zinc-700 rounded-full py-1 px-3 mr-2">
                  {tech}
                </span>
              ))}
            </small>
          </div>
          <div className="flex items-center space-x-4">
            <WebsiteLink />
            <RepoLink />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkModal;
