import React from "react";
import Title from "../layouts/Title";
import TestimonilasCard from "./TestimonilasCard";
import { projectOne } from "../../assets";
function Testimonial() {
  return (
    <section
      id="testimonial"
      className="w-full pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="What Clients Say" des="Testimonials" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TestimonilasCard
          image={projectOne}
          name="Michael John G. Margate"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, est accusamus cum illo explicabo, voluptates cupiditate facere delectus veniam repellat laudantium vitae aliquam alias omnis dolor. Ab accusamus atque alias!"
        />
        <TestimonilasCard
          image={projectOne}
          name="Michael John G. Margate"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, est accusamus cum illo explicabo, voluptates cupiditate facere delectus veniam repellat laudantium vitae aliquam alias omnis dolor. Ab accusamus atque alias!"
        />
        <TestimonilasCard
          image={projectOne}
          name="Michael John G. Margate"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, est accusamus cum illo explicabo, voluptates cupiditate facere delectus veniam repellat laudantium vitae aliquam alias omnis dolor. Ab accusamus atque alias!"
        />
        <TestimonilasCard
          image={projectOne}
          name="Michael John G. Margate"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, est accusamus cum illo explicabo, voluptates cupiditate facere delectus veniam repellat laudantium vitae aliquam alias omnis dolor. Ab accusamus atque alias!"
        />
        <TestimonilasCard
          image={projectOne}
          name="Michael John G. Margate"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, est accusamus cum illo explicabo, voluptates cupiditate facere delectus veniam repellat laudantium vitae aliquam alias omnis dolor. Ab accusamus atque alias!"
        />
        <TestimonilasCard
          image={projectOne}
          name="Michael John G. Margate"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, est accusamus cum illo explicabo, voluptates cupiditate facere delectus veniam repellat laudantium vitae aliquam alias omnis dolor. Ab accusamus atque alias!"
        />
      </div>
    </section>
  );
}

export default Testimonial;
