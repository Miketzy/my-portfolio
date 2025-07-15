import React from "react";

function Aboutme() {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-[600px]">
      {/* Top Section: About text */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">About Me</h1>
        <p className="text-base leading-relaxed text-gray-300">
          I’m a motivated and detail-oriented individual with a passion for
          frontend development. I enjoy learning new technologies and building
          clean, responsive web applications.
        </p>
      </div>

      {/* Bottom Section: Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-base text-white">
        {/* Each row */}
        <div className="flex">
          <span className="font-semibold text-[#85DFE7] w-[120px]">Name:</span>
          <span>Michael John G. Margate</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#85DFE7] w-[120px]">Age:</span>
          <span>26</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#85DFE7] w-[120px]">Phone:</span>
          <span>+63 965 820 9303</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#85DFE7] w-[120px]">
            Address:
          </span>
          <span>Purok 2, Jamboree, Nangan, Gov. Generoso, Davao Oriental</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#85DFE7] w-[120px]">
            Nationality:
          </span>
          <span>Filipino</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#85DFE7] w-[120px]">
            Freelance:
          </span>
          <span>Available</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#85DFE7] w-[120px]">Email:</span>
          <span>michaelmargate2@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
