import React from "react";

function EducationPreview({ src, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60]">
      <div className="relative">
        <button
          className="absolute top-2 right-2 text-[#85DFE7] text-3xl font-bold z-10 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={src}
          alt="Preview"
          className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default EducationPreview;
