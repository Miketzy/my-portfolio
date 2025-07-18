import React, { useState } from "react";

function EducationCard({ title, school, year, des, images }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-[#1f2937] p-5 rounded-lg shadow-md text-white cursor-pointer hover:bg-[#374151] transition"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-md text-gray-400">2025</h3>
        <h2 className="text-xl font-semibold text-white">
          Bachelor of Science in Information Technology
        </h2>
        <ul className="text-sm text-gray-300 list-disc ml-5 mt-2">
          <li>Graduated from Davao Oriental State University</li>
        </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-auto rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EducationCard;
