import React from "react";

function Title({ title, des }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm uppercase font-light text-[#85DFE7] tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title;
