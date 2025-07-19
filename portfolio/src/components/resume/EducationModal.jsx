import React from "react";

function EducationModal({ images, onClose, onPreview }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 w-[90%] max-w-md text-black relative">
        <button
          className="absolute top-2 right-2 text-[#85DFE7] hover:text-red-500"
          onClick={onClose}
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
              onClick={() => onPreview(src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationModal;
