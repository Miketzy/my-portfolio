import React from "react";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-[600px]">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        <EducationCard
          year="2025"
          title="Bachelor of Science in Information Technology"
          des="Graduated from Davao Oriental State University with a strong foundation in software and web development. I led the development of our capstone project, a full-stack web application focused on species management and admin approval systems using React.js and Tailwind CSS."
        />
        <EducationCard
          year="2025"
          title="Bachelor of Science in Information Technology"
          des="Graduated from Davao Oriental State University with a strong foundation in software and web development. I led the development of our capstone project, a full-stack web application focused on species management and admin approval systems using React.js and Tailwind CSS."
        />
        <EducationCard
          year="2025"
          title="Bachelor of Science in Information Technology"
          des="Graduated from Davao Oriental State University with a strong foundation in software and web development. I led the development of our capstone project, a full-stack web application focused on species management and admin approval systems using React.js and Tailwind CSS."
        />
      </div>
    </div>
  );
}

export default Education;
