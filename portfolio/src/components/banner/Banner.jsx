import React from "react";
import LeftBanner from "./LeftBanner";
import { image } from "../../assets/index";

function Banner() {
  return (
    <section
      id="home"
      className="w-full py-13 pb-13 flex items-center border-b-[1px] border-b-black"
    >
      <LeftBanner />
      <div className="w-1/2 flex justify0center items-center relative">
        <img className="w-[500px] h-[680px] z-10" src={image} alt="" />
        <div className="absolute bottom-0 w-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-2xl flex justify-center items-center"></div>
      </div>
    </section>
  );
}

export default Banner;
