import React from "react";
import { HiArrowRight } from "react-icons/hi2";

function Card({ title, des, icon }) {
  return (
    <div className="w-full px-6 md:px-12 h-80 py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[...] flex items-center hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 group overflow-hidden">
      <div className="h-72 w-full overflow-hidden">
        <div className="flex flex-col gap-8 h-full translate-y-14 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div>
            <span className="text-5xl text-[#85DFE7]">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-base text-gray-300">{des}</p>
            <span className="text-2xl text-[#85DFE7] group-hover:translate-x-2 transition-transform duration-300">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
