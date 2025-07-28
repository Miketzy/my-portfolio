import { useState } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constant";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full h-16 fixed top-0 left-0 z-50 bg-gray-900 border-b border-b-white/60">
      <div className="max-w-screen-xl mx-auto h-full px-2 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal tracking-wide cursor-pointer hover:text-[#85DFE7] duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-screen bg-gray-800 p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-white font-bold">Menu</h2>
        </div>

        <ul className="flex flex-col gap-6">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-white text-lg font-medium cursor-pointer hover:text-[#85DFE7] transition"
              key={_id}
              onClick={closeMenu}
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
