import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constant";

function Navbar() {
  return (
    <div>
      <div className="w-full h-17 mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="h-16" />
      </div>
      <div>
        <ul>
          {navLinksdata.map((navlink) => (
            <li>{navlink.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
