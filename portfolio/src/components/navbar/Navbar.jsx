import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constant";

function Navbar() {
  return (
    <div className="w-full h-17 mx-auto flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" className="h-16" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="tracking-wide cursor-pointer hover:bg-red-500 duration-300"
              key={_id}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
