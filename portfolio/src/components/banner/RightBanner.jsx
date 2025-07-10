import React from "react";
import { image } from "../../assets/index";

function RightBanner() {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
      {/* Main Image */}
      <img
        className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto z-10"
        src={image}
        alt="Profile"
      />

      {/* Background Effect */}
      <div className="absolute bottom-0 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-b-lg shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] z-0"></div>
    </div>
  );
}

export default RightBanner;
