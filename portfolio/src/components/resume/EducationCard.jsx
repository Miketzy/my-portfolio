import React from "react";

function EducationCard({ title, year, des }) {
  return (
    <div className="bg-[#1f2937] p-5 rounded-lg shadow-md text-white">
      <h3 className="text-md text-gray-400">{year}</h3>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-gray-300 mt-2">{des}</p>
    </div>
  );
}

export default EducationCard;
