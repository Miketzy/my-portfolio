import React from "react";

function ExperieceCard({ title, des }) {
  return (
    <div className="bg-[#1f2937] p-5 rounded-lg shadow-md text-white cursor-pointer hover:bg-[#374151] transition">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="text-sm text-gray-300 mt-2">{des}</div>
    </div>
  );
}

export default ExperieceCard;
