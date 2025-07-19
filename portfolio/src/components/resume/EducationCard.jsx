import React, { useState, useEffect } from "react";
import EducationModal from "./EducationModal";
import EducationPreview from "./EducationPreview";

function EducationCard({ title, school, year, des, images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // for full-view image

  // Disable scroll when modal or preview is open
  useEffect(() => {
    if (isOpen || previewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, previewImage]);

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
        <EducationModal
          images={images}
          onClose={() => setIsOpen(false)}
          onPreview={(src) => setPreviewImage(src)}
        />
      )}

      {/* Full Image Preview Modal */}
      {previewImage && (
        <EducationPreview
          src={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </>
  );
}

export default EducationCard;
