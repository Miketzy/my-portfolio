import React from "react";
import Title from "../layouts/Title";

function Resume() {
  return (
    <section
      id="resume"
      className="w-full h-[800px] pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="No Experience" des="My Resume" />
      </div>
      <div className="flex flex-col w-full max-w-[350px] mx-auto xl:mx-0 gap-6">
        <ul>
          <li className="resumeLi">Education</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>About me</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
