import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { bioexplorer, projectOne } from "../../assets";
function Projects() {
  return (
    <section
      id="projects"
      className="w-full  pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="BioExplorer"
          des="BioExplorer: A web-based repository of Davao Oriental species. It helps people discover and learn about local animals through images and simple information to support awareness and education."
          src={bioexplorer}
        />
        <ProjectCard
          title="Title"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda ratione cumque iusto ducimus, magni optio tempore harum reiciendis natus quis eum laudantium consectetur aperiam sit doloremque repellendus quam exercitationem?"
          src={projectOne}
        />
        <ProjectCard
          title="Title"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda ratione cumque iusto ducimus, magni optio tempore harum reiciendis natus quis eum laudantium consectetur aperiam sit doloremque repellendus quam exercitationem?"
          src={projectOne}
        />
        <ProjectCard
          title="Title"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda ratione cumque iusto ducimus, magni optio tempore harum reiciendis natus quis eum laudantium consectetur aperiam sit doloremque repellendus quam exercitationem?"
          src={projectOne}
        />
        <ProjectCard
          title="Title"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda ratione cumque iusto ducimus, magni optio tempore harum reiciendis natus quis eum laudantium consectetur aperiam sit doloremque repellendus quam exercitationem?"
          src={projectOne}
        />
        <ProjectCard
          title="Title"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda ratione cumque iusto ducimus, magni optio tempore harum reiciendis natus quis eum laudantium consectetur aperiam sit doloremque repellendus quam exercitationem?"
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects;
