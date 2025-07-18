import React, { useState } from "react";

function EducationCard({ title, school, year, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-[#1f2937] p-5 rounded-lg shadow-md text-white cursor-pointer hover:bg-[#374151] transition"
        onClick={() => setIsOpen(true)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{school}</p>
        <p className="text-sm">Year Graduated: {year}</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-black relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-2 text-gray-700">{school}</p>
            <p className="mb-2 text-gray-700">Year Graduated: {year}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default EducationCard;
