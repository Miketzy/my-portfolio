import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-1 pb-20 flex flex-col items-center border-b border-b-black "
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
