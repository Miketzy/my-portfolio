import React, { useState } from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Aboutme from "./Aboutme";

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [aboutmeData, setAboutmeData] = useState(false);

  const handleSection = (section) => {
    setEducationData(section === "education");
    setSkillsData(section === "skills");
    setExperienceData(section === "experience");
    setAboutmeData(section === "aboutme");
  };

  return (
    <section
      id="resume"
      className="w-full pt-20 pb-20 border-b border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="No Experience" des="My Resume" />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <ul className="flex flex-col gap-6">
          <li onClick={() => handleSection("education")} className="resumeLi">
            Education
          </li>
          <li onClick={() => handleSection("skills")} className="resumeLi">
            Skills
          </li>
          <li onClick={() => handleSection("experience")} className="resumeLi">
            Experience
          </li>
          <li onClick={() => handleSection("aboutme")} className="resumeLi">
            About me
          </li>
        </ul>
        <div className="flex-1">
          {educationData && <Education />}
          {skillsData && <Skills />}
          {experienceData && <Experience />}
          {aboutmeData && <Aboutme />}
        </div>
      </div>
    </section>
  );
}

export default Resume;
