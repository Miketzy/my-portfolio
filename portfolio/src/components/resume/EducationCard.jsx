import React, { useState } from "react";

function EducationCard({ title, school, year, des, images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // for full-view image

  return (
    <>
      {/* Card */}
      <div
        className="bg-[#1f2937] p-5 rounded-lg shadow-md text-white cursor-pointer hover:bg-[#374151] transition"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-md text-gray-400">{year}</h3>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="text-sm text-gray-300 mt-2">{des}</div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 w-[90%] max-w-md text-black relative">
            <button
              className="absolute top-2 right-2 text-[#85DFE7] hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images?.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-auto rounded shadow cursor-pointer hover:opacity-90"
                  onClick={() => setPreviewImage(src)} // set full-view image
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60]">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-[#85DFE7] text-3xl font-bold z-10 cursor-pointer"
              onClick={() => setPreviewImage(null)}
            >
              &times;
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default EducationCard;
