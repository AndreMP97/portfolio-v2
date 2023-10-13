const DesktopNavbar = ({ navLinks, handleClick }) => {
  return (
    <div className="hidden md:flex flex-row justify-center items-center space-x-8">
      <ul className="flex flex-row space-x-6">
        {navLinks?.map((link, index) => (
          <li
            key={index}
            onClick={() => handleClick(link?.ref)}
            className="cursor-pointer text-white lg:hover:text-green-500"
          >
            {link?.name}
          </li>
        ))}
      </ul>
      <a
        href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_"
        rel="noopener noreferrer"
      >
        <button className="border-2 border-zinc-100 py-2 px-4 rounded-md text-white lg:hover:text-green-500 lg:hover:border-green-500">
          Resume
        </button>
      </a>
    </div>
  );
};

export default DesktopNavbar;
