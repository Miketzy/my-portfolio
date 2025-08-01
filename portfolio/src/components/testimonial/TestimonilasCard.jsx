import React from "react";

function TestimonilasCard({ image, name, des, position }) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)]  group">
      {/* Center the image */}
      <div className="w-full flex justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={image}
          alt=""
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-6 text-center">
        <div>
          <h3 className="text-base uppercase text-[#85DFE7] font-normal">
            {name}
          </h3>
          <p className="text-base text-gray-400 italic mt-1">{position}</p>
          <p className="text-sm tracking-wide mt-3">{des}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonilasCard;
