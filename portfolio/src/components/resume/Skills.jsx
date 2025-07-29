import React from "react";
import SkillsCard from "./SkillsCard";
import { css, html, reactjs, tailwindcss } from "../../assets";

function Skills() {
  return (
    <div className="flex flex-col w-full lg:w-[700px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">My Skills</h1>
        <p className="text-base leading-relax text-white mb-6">
          I am still learning and improving my skills in HTML, CSS, React, and
          Tailwind CSS. I enjoy creating simple websites, and I do my best to
          make them look good and easy to use. I’m always open to learning more
          and becoming better.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        <SkillsCard images={html} />
        <SkillsCard images={css} />
        <SkillsCard images={reactjs} />
        <SkillsCard images={tailwindcss} />
      </div>
    </div>
  );
}

export default Skills;
