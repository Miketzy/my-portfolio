import React from "react";

function TestimonilasCard({ image, name, des }) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 group">
      <div classname="w-full h-[80%] overflow-hidden rounded-lg ">
        <img
          className="w-30 h-30 object-cover rounded-full"
          src={image}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-[#85DFE7] font-normal">
              {name}
            </h3>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-[#85DFE7] duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonilasCard;
