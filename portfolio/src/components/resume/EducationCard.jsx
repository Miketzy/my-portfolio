import React, { useState } from "react";

function EducationCard({ year, title, des }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`w-full px-6 md:px-12 py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] flex items-center hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 group overflow-hidden ${
        isExpanded ? "min-h-[400px]" : "min-h-[280px]"
      }`}
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 transition-all duration-500 ease-in-out">
          <h2 className="text-xl font-semibold text-white">{year}</h2>
          <h2 className="text-xl font-semibold text-white leading-snug tracking-wide">
            {title}
          </h2>

          <p
            className={`text-sm text-gray-300 leading-relaxed tracking-normal transition-all duration-300 ease-in-out ${
              isExpanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {des}
          </p>

          <button
            className="text-blue-400 text-sm mt-2 hover:underline self-start"
            onClick={toggleExpand}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
