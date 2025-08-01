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
        <TestimonilasCard image="" name="" position="" des="" />
      </div>
    </section>
  );
}

export default Testimonial;
