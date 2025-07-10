import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constant";

function Navbar() {
  return (
    <div className="w-full h-16 fixed top-0 left-0 z-50 bg-gray-900 border-b border-b-white/60">
      {/* ✅ This wrapper centers the content */}
      <div className="max-w-screen-xl mx-auto h-full px-4 flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="h-12" />
        </div>
        <div>
          <ul className="flex items-center gap-10">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
