import React from "react";
import { image } from "../../assets/index";

function RightBanner() {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img className="w-[500px] h-[680px] z-10" src={image} alt="" />
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-b-lg shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a23] flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
