import React from "react";
import { logo } from "../../assets/index";

function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
