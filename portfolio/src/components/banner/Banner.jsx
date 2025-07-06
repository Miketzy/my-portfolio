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
      <div className="w-1/2">
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default Banner;
