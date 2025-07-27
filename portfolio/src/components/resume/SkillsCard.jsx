import React from "react";

function SkillsCard({ images, src }) {
  return (
    <div className="bg-[#1f2937] w-[50px] h-[50px] rounded-lg shadow-md flex items-center justify-center overflow-hidden">
      <img src={src} alt="Skill" className="w-[30px] h-[30px] object-contain" />
    </div>
  );
}

export default SkillsCard;
