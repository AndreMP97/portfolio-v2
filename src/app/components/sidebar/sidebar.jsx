import Link from "next/link";

const SideBar = ({ navLinks }) => {
  const handleClick = (ref) => {
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
            onClick={() => handleClick(link?.ref)}
            className="text-white lg:hover:text-green-500"
          >
            <Link href={link?.section} scroll={false}>
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
