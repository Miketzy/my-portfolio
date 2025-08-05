import React from "react";
import EducationCard from "./EducationCard";
import { projectOne } from "../../assets";

function Education() {
  return (
    <div className="flex flex-col  w-full lg:w-[700px] ">
      {/* Top Section: About text */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">My Education</h1>
        <p className="text-base leading-relaxed text-white mb-6">
          My journey in Information Technology helped me discover my interest in
          frontend development. I gained practical experience by collaborating
          with my team on our capstone project, where we built a web-based
          system. I'm passionate about learning and constantly improving my
          skills through hands-on work and exploration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        <EducationCard
          year="2021-2025"
          title="Bachelor of Science in Information Technology"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
          images=""
        />
      </div>
    </div>
  );
}

export default Education;
