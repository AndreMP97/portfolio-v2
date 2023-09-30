// Resources
import Image from "next/image";
// Assets
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Card = ({ index, project }) => {
  const arrDescription = (project?.description || "")
    .replace(/\\n/g, "\n")
    .split("\n");

  const isEven = (n) => n % 2 === 0;

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

  const renderImage = () => (
    <Image
      fill
      style={{ objectFit: "contain", margin: 0 }}
      src={project?.image}
      alt={project?.title}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="px-4"
    />
  );

  const renderWebsiteLink = () =>
    project?.external?.website && (
      <ExternalLink href={project?.external?.website} label="Website">
        <FiExternalLink
          size={32}
          className="text-white lg:hover:text-green-500"
        />
      </ExternalLink>
    );

  const renderRepoLink = () =>
    project?.external?.repo && (
      <ExternalLink href={project?.external?.repo} label="GitHub">
        <SiGithub size={32} className="text-white lg:hover:text-green-500" />
      </ExternalLink>
    );

  return (
    <div className="flex p-6 bg-zinc-800 rounded-md space-y-8 lg:space-y-0 flex-col lg:flex-row">
      <div
        className={`flex justify-center items-center h-44 lg:h-auto lg:w-2/5 ${
          isEven(index) ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {project?.image && (
          <ExternalLink
            href={
              project?.external?.website
                ? project?.external?.website
                : project?.external?.repo
            }
            label="Website"
            className={"relative h-full w-full"}
          >
            {renderImage()}
          </ExternalLink>
        )}
      </div>
      <div
        className={`flex flex-col prose prose-invert prose-base lg:prose-lg max-w-none lg:w-3/5 ${
          isEven(index) ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h3>{project?.title}</h3>
        {arrDescription?.map((description, index) => (
          <p key={`paragraph-${index}`}>{description}</p>
        ))}
        <div className="flex space-x-4">
          {renderWebsiteLink()}
          {renderRepoLink()}
        </div>
      </div>
    </div>
  );
};

Card.displayName = "Card";

export default Card;
