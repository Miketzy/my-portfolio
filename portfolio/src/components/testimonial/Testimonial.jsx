import React from "react";

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="w-full h-[800px] pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="What Clients Say" des="Testimonials" />
      </div>
    </section>
  );
}

export default Testimonial;
