import React from "react";

function SkillsCard({ images }) {
  return (
    <div className="bg-[#1f2937] w-[80px] h-[80px] rounded-lg shadow-md flex items-center justify-center overflow-hidden">
      <img
        src={images}
        alt="Skill"
        className="w-[50px] h-[50px] object-contain"
      />
    </div>
  );
}

export default SkillsCard;
