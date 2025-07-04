import React from "react";
import { logo } from "../../assets/index";

function Navbar() {
  return (
    <div>
      <div className="w-full h-15 mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="h-13" />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
