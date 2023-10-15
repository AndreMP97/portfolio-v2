export const Footer = () => {
  return (
    <footer
      className="flex flex-col h-20 w-full text-white lg:hover:text-green-500 px-4 mt-24"
    >
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
      <a
        href="https://github.com/AndreMP97/portfolio-v2"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full w-full justify-center items-center uppercase"
      >
        Created by André Pacheco
      </a>
    </footer>
  );
};

export default Footer;
