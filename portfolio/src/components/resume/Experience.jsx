import React from "react";
import ExperieceCard from "./ExperieceCard";

function Experience() {
  return (
    <div className="flex flex-col w-full lg:w-[700px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">My Experience</h1>
        <p className="text-base leading-relax text-white mb-6">
          I gained experience in building a website during our capstone project,
          where I worked with a team to create a real website. I also had an
          internship where I used WordPress to update and manage content. These
          experiences helped me understand how websites work, and I am still
          learning to improve my skills.
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
        <ExperieceCard
          title="data Entry Encoder"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
        />
        <ExperieceCard />
      </div>
    </div>
  );
}

export default Experience;
