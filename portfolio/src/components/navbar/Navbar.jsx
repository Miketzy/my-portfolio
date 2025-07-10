import { useState } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constant";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full h-16 fixed top-0 left-0 z-50 bg-gray-900 border-b border-b-white/60">
        <div className="max-w-screen-xl mx-auto h-full px-4 flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-12" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="text-base font-normal tracking-wide cursor-pointer hover:text-[#85DFE7] duration-300"
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

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </div>
        </div>
      </div>

      {/* Overlay Backdrop + Sidebar */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen bg-gray-800 p-6 z-50 transform transition-transform duration-300 ease-in-out">
            <h2 className="text-xl text-white font-bold mb-6">Menu</h2>
            <ul className="flex flex-col gap-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  key={_id}
                  onClick={closeMenu}
                  className="text-white text-lg font-medium cursor-pointer hover:text-[#85DFE7] transition"
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
        </>
      )}
    </>
  );
}

export default Navbar;
