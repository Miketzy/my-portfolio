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
          I recently graduated with a degree in Information Technology. I
          learned how to build websites and worked on a capstone project with my
          team. I’m still learning, but I always try my best and want to improve
          more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        <EducationCard
          year="2025"
          title="Bachelor of Science in Information Technology"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
          images={[projectOne]} // ✅ wrap in array
        />

        <EducationCard
          year="2025"
          title="Bachelor of Science in Information Technology"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
          images={[projectOne]} // ✅ wrap in array
        />

        <EducationCard
          year="2025"
          title="Bachelor of Science in Information Technology"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
          images={[projectOne]} // ✅ wrap in array
        />
      </div>
    </div>
  );
}

export default Education;
