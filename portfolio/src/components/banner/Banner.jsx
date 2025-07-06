import React from "react";
import LeftBanner from "./LeftBanner";

function Banner() {
  return (
    <section
      id="home"
      className="w-full py-13 pb-13 flex items-center border-b-[1px] border-b-black"
    >
      <LeftBanner />
      <div className="w-1/2"></div>
    </section>
  );
}

export default Banner;
