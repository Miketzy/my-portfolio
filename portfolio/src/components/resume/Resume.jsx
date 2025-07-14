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
  return (
    <section
      id="resume"
      className="w-full pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="No Experience" des="My Resume" />
      </div>
      <div className="flex gap-10">
        <ul className="flex flex-col gap-10">
          <li onClick={() => setEducationData(true)} className="resumeLi">
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setSkillsData(true)}
            className="resumeLi"
          >
            Skills
          </li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">About me</li>
        </ul>
        <div>
          {educationData && <Education />}
          {skillsData && <Skills />}
          {experienceData && <Experience />}
          {aboutmeData && <Aboutme />}
        </div>
      </div>
      {/*<Education />
      <Skills />
      <Experience />
      <Aboutme />*/}
    </section>
  );
}

export default Resume;
