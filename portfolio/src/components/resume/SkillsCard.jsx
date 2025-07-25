import React from "react";

function SkillsCard({ image }) {
  return (
    <div className="bg-[#1f2937] p-5 rounded-lg shadow-md">
      <img
        src={image}
        alt="Skill"
        className="w-full h-40 object-contain mx-auto"
      />
    </div>
  );
}

export default SkillsCard;
