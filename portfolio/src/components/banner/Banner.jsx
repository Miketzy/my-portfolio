import React from "react";
import LeftBanner from "./LeftBanner";
import { image } from "../../assets/index";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b border-b-black"
    >
      <LeftBanner />
      <div className="w-1/2 flex justify-center items-center relative">
        <img className="w-[500px] h-[680px] z-10" src={image} alt="" />
        <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-b-lg shadow-2xl flex justify-center items-center"></div>
      </div>
    </section>
  );
}

export default Banner;
