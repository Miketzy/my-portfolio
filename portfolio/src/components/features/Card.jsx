import React from "react";

function Card({ title, des, icon }) {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] flex items-center hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-colors duration-300">
      <div className="flex flex-col gap-8">
        <div>
          <span className="txt-5xl text-[#85DFE7]">{icon}</span>
        </div>
        <div>
          <h2 className="txt-2xl font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
