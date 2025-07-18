import React from "react";

function EducationCard({ year, title, des }) {
  return (
    <div className="w-full px-6 md:px-12 h-80 py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] flex items-center hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 group overflow-hidden">
      <div className="h-72 w-full overflow-hidden">
        <div className="flex flex-col gap-10 h-full translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">{year}</h2>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-base text-gray-300">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
