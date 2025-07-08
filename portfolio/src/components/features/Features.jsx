import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaBars } from "react-icons/fa";

function Features() {
  return (
    <section
      id="features"
      className="w-full  py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />

      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam quibusdam soluta culpa quod voluptate, esse rerum sed! Officia, nisi numquam non qui a eligendi fugit rem aliquid earum architecto!"
          icon={<FaBars />}
        />
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam quibusdam soluta culpa quod voluptate, esse rerum sed! Officia, nisi numquam non qui a eligendi fugit rem aliquid earum architecto!"
          icon=""
        />
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam quibusdam soluta culpa quod voluptate, esse rerum sed! Officia, nisi numquam non qui a eligendi fugit rem aliquid earum architecto!"
          icon=""
        />
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam quibusdam soluta culpa quod voluptate, esse rerum sed! Officia, nisi numquam non qui a eligendi fugit rem aliquid earum architecto!"
          icon=""
        />
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam quibusdam soluta culpa quod voluptate, esse rerum sed! Officia, nisi numquam non qui a eligendi fugit rem aliquid earum architecto!"
          icon=""
        />
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam quibusdam soluta culpa quod voluptate, esse rerum sed! Officia, nisi numquam non qui a eligendi fugit rem aliquid earum architecto!"
          icon=""
        />
      </div>
    </section>
  );
}

export default Features;
