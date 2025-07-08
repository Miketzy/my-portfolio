import React from "react";
import Title from "../layouts/Title";

function Features() {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="w-full px-12 h-80 py-10 rounded-lg bg-gradient-to-r from-bg-gray-800 to-bg-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] flex items-center hover:bg-gradient-to-b hover:from:bg-gray-800 hover:to-bg-gray-750 transition-color duration-100"></div>
    </section>
  );
}

export default Features;
