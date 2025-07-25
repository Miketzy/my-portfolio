import React from "react";

function SkillsCard({ images }) {
  return (
    <div className="bg-[#1f2937] w-[20px] h-[20px] rounded-lg shadow-md flex items-center justify-center overflow-hidden">
      <img src={images} alt="Skill" className="w-full h-full object-contain" />
    </div>
  );
}

export default SkillsCard;
