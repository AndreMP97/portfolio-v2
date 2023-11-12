import Link from "next/link";

const SideBar = ({ navLinks, activeSection }) => {
  const handleClick = (ref, name) => {
    if (name.toLowerCase() === activeSection) return;

    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      if (nav) {
        setNav(false);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:flex w-full justify-center">
      <ul className="flex flex-col space-y-4">
        {navLinks?.map((link, index) => (
          <li
            key={index}
            className={`${
              activeSection === link?.name?.toLowerCase()
                ? `text-green-500`
                : `text-white hover:text-green-500`
            }`}
          >
            <Link
              href={link?.section}
              scroll={false}
              onClick={() => handleClick(link?.ref, link?.name)}
            >
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
