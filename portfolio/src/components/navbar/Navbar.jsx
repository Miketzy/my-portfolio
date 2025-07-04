import React from "react";
import { logo } from "../../assets/index";

function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="h-3" />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
