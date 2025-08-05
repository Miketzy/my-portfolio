import React from "react";
import ExperieceCard from "./ExperieceCard";

function Experience() {
  return (
    <div className="flex flex-col w-full lg:w-[700px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">My Experience</h1>
        <p className="text-base leading-relax text-white mb-6">
          I’ve gained hands-on experience in building websites through my
          capstone project and internship, where I worked with tools like
          WordPress, ReactJS, and Express.js. I'm also continuously looking for
          new opportunities to grow my skills and gain real-world experience by
          working on different types of projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        <ExperieceCard
          title="Full Stack Developer"
          tools="ReactJS, Tailwind CSS, Express.js, PostgreSQL, Vercel, Render"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Capstone Project</li>
              </ul>
            </>
          }
        />
        <ExperieceCard
          title="Frontend Development Intern"
          tools="Wordpress"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Illumedia Outsourcing</li>
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
}

export default Experience;
