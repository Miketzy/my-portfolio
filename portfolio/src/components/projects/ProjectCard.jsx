import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

function ProjectCard({ title, des, src }) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 group">
      <div classname="w-full h-[80%] overflow-hidden rounded-lg ">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h3>{title}</h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-gray-900 inline-flex justify-center items-center hover:text-[#85DFE7] duration-300 cursor-pointer">
              <BsGithub />
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-gray-900 inline-flex justify-center items-center hover:text-[#85DFE7] duration-300 cursor-pointer">
              <FaGlobe />
            </span>
          </div>
        </div>
        <div>{des}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
