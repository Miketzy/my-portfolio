import React from "react";

function SkillsCard({ Icon }) {
  return (
    <div className="bg-[#1f2937] w-[50px] h-[50px] rounded-lg shadow-md flex items-center justify-center overflow-hidden">
      <Icon className="w-[30px] h-[30px] />
    </div>
  );
}

export default SkillsCard;
