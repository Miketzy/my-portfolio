import React from "react";

function Aboutme() {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-[450px]">
      {/* Top Section: About text */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">About Me</h1>
        <p className="text-base leading-relaxed">
          I’m a motivated and detail-oriented individual with a passion for
          frontend development. I enjoy learning new technologies and building
          clean, responsive web applications.
        </p>
      </div>

      {/* Bottom Section: Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-white">
        <div>
          <span className="font-semibold text-[#85DFE7]">Name:</span> Michael
          John G. Margate
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Nationality:</span>{" "}
          Filipino
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Freelance:</span>{" "}
          Available
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Phone:</span> +63 912
          345 6789
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Email:</span>{" "}
          michael@example.com
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
