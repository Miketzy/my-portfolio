import React from "react";
import EducationCard from "./EducationCard";
import { projectOne } from "../../assets";

function Education() {
  return (
    <div className="flex p-4 pt-15 flex-col gap-10 w-full lg:w-[700px]">
      {/* Top Section: About text */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">My Education</h1>
        <p className="text-base leading-relaxed text-white">
          I am a fresh graduate with a Bachelor of Science in Information
          Technology. During my studies, I gained hands-on experience in
          frontend development using React.js and Tailwind CSS. For our capstone
          project, I took the lead in building a complete web-based system from
          scratch, applying modern web development practices and responsive
          design principles. This project strengthened my technical skills and
          taught me how to work effectively both independently and as part of a
          team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
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
