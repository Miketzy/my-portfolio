import React from "react";
import SkillsCard from "./SkillsCard";
import { projectOne } from "../../assets";

function Skills() {
  return (
    <div className="flex flex-col w-full lg:w-[700px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">My Skills</h1>
        <p className="text-base leading-relax text-white mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          similique molestiae magnam facilis vero deserunt ratione delectus
          eaque mollitia ut earum quibusdam, tempore, aliquid ipsam perferendis
          aut nisi rerum laboriosam!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
        <SkillsCard images={projectOne} />
      </div>
    </div>
  );
}

export default Skills;
