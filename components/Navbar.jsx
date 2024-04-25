const Navbar = () => {
  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="container flex h-20 items-center justify-between">
      <button
        onClick={handleClickLogo}
        className="font-greatVibes -rotate-12 text-2xl text-white hover:text-green-500"
      >
        AP
      </button>
      <ul className="flex space-x-4">
        <li className="hover:text-green-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-green-500">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-green-500">
          <a href="#work">Work</a>
        </li>
      </ul>
      <a
        href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_"
        rel="noopener noreferrer"
        className="rounded-md border-2 border-zinc-100 px-4 py-2 text-white hover:border-green-500 hover:text-green-500"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
