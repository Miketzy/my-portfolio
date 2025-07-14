import React from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";

function Resume() {
  return (
    <section
      id="resume"
      className="w-full pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="No Experience" des="My Resume" />
      </div>
      <div className="flex gap-10 lg:items-center">
        <ul className="flex flex-col gap-10">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">About me</li>
        </ul>
        <div className="">
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </div>
      </div>
    </section>
  );
}

export default Resume;
