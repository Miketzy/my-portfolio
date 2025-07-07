import React from "react";
import { image } from "../../assets/index";

function RightBanner() {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img className="w-[500px] h-[600px] z-10" src={image} alt="" />
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-bg-gray-800 to-bg-gray-900 rounded-b-lg shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
