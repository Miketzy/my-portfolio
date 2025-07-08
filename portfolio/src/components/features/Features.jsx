import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";

function Features() {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div>
        <Card />
      </div>
    </section>
  );
}

export default Features;
