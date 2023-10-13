import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

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

const WebsiteLink = () => {
  if (project?.external?.website) {
    return (
      <ExternalLink href={project?.external?.website} label="Website">
        <FiExternalLink
          size={28}
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
        <SiGithub size={28} className="text-white lg:hover:text-green-500" />
      </ExternalLink>
    );
  }
};