import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between">
      <div className="flex-1">
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <div className="flex-1">
        <ul className="flex items-center justify-center gap-8 text-xl">
          {navItems.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.path} className="font-medium">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "About Us",
  },
  {
    path: "/",
    name: "Services",
  },
  {
    path: "/",
    name: "Features",
  },
  {
    path: "/",
    name: "Work Process",
  },
  {
    path: "/",
    name: "Contact",
  },
];

export default Navbar;
