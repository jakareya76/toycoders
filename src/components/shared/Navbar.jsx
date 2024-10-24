import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto flex items-center justify-between z-50 relative py-8">
      <div className="flex-1">
        <img src={logo} alt="logo" className="w-28" />
      </div>

      {/* Hamburger Menu Icon for mobile */}
      <div className="lg:hidden">
        <button
          className="text-white focus:outline-none mx-5"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`lg:flex hidden`}>
        <ul className="flex items-center justify-center gap-8 text-xl">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.path}
                className="font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-full left-0 w-full bg-black`}
      >
        <ul className="flex flex-col items-center py-16 space-y-4 text-xl">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.path}
                className="font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const navItems = [
  {
    path: "#banner",
    name: "Home",
  },
  {
    path: "#about",
    name: "About Us",
  },
  {
    path: "#services",
    name: "Services",
  },
  {
    path: "#features",
    name: "Features",
  },
  {
    path: "#work",
    name: "Work Process",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

export default Navbar;
