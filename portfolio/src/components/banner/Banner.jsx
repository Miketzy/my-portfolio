import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-20 pb-20 md:pt-1 md:pb-20 px-4 flex flex-col md:flex-row items-start md:items-center border-b border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
