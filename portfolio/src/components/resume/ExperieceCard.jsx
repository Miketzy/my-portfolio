import React from "react";

function ExperieceCard({ title, des, tools }) {
  return (
    <div className="bg-[#1f2937] p-5 rounded-lg shadow-md text-white cursor-pointer hover:bg-[#374151] transition">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <h4 className="text-based text-gray-300 mt-2 text-center">{tools}</h4>
      <p className="text-sm text-gray-300 mt-2">{des}</p>
    </div>
  );
}

export default ExperieceCard;
