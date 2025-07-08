import React from "react";

function Features() {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20 flex  border-b-[1px] border-b-black"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-sm uppercase font-light text-[#85DFE7] tracking-wide">
          Features
        </h3>
        <h1 className="text-5xl font-bold capitalize">What I do</h1>
      </div>
    </section>
  );
}

export default Features;
