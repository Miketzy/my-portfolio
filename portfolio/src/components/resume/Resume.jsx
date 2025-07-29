import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Aboutme from "./Aboutme";
import { pdf } from "../../assets";

function Resume() {
  const [activeSection, setActiveSection] = useState("education");

  const isActive = (section) =>
    activeSection === section ? "resumeLi activeLi" : "resumeLi";

  return (
    <section
      id="resume"
      className="w-full pt-20 pb-20 border-b border-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="No Experience" des="My Resume" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10  ">
        {/* Left Section */}
        <div className="w-full lg:w-[350px] flex flex-col gap-4 justify-center items-center ">
          <h1 className="text-4xl text-[#85DFE7] font-bold">Why hire me?</h1>

          <p className="text-base text-gray-300 mb-6 leading-relaxed text-white">
            I am a passionate and detail-oriented learner, always ready to adapt
            and grow. With a strong dedication to frontend development, I bring
            creativity, curiosity, and commitment to any team I join.
          </p>
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => setActiveSection("education")}
              className={isActive("education")}
            >
              Education
            </li>
            <li
              onClick={() => setActiveSection("skills")}
              className={isActive("skills")}
            >
              Skills
            </li>
            <li
              onClick={() => setActiveSection("experience")}
              className={isActive("experience")}
            >
              Experience
            </li>
            <li
              onClick={() => setActiveSection("aboutme")}
              className={isActive("aboutme")}
            >
              About Me
            </li>
          </ul>
          <a
            href={pdf}
            download="Michael_Margate_Professional_CV_Resume.pdf"
            className="mt-6 inline-block px-6 py-2 bg-[#85DFE7] w-[300px] lg:w-[350px] text-black font-semibold rounded-md hover:bg-[#6acfd7] transition-all text-center justify-center items-center"
          >
            Download My Resume (PDF)
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[300px]">
          {activeSection === "education" && <Education />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "aboutme" && <Aboutme />}
        </div>
      </div>
    </section>
  );
}

export default Resume;
