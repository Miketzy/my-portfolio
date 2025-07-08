import React from "react";
import Title from "../layouts/Title";

function Features() {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20 flex  border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="w-full h-80  bg-yellow-500"></div>
    </section>
  );
}

export default Features;
