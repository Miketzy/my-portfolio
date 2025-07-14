import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Aboutme from "./Aboutme";

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
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div>
          <h4 className="text-[#85DFE7] text-lg">Why hire me?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            similique obcaecati, facere vero commodi at ad est velit
            consequuntur iure animi dolore unde dolorum alias molestiae quis
            autem. Tempora, quia?
          </p>
          <ul className="flex flex-col gap-6">
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
        </div>
        <div className="flex-1">
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
