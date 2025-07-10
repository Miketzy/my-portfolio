import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import {
  FaBars,
  FaBook,
  FaBookOpen,
  FaHtml5,
  FaLaptopCode,
  FaMobileAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Features() {
  return (
    <section
      id="features"
      className="w-full pt-20 pb-20 border-b-[1px] border-b-black p-4"
    >
      <Title title="Features" des="What I do" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        <Card
          title="Clean HTML Structure"
          des="I make simple and organized web pages using html so they are easy to read and understand."
          icon={<FaHtml5 />}
        />
        <Card
          title="Tailwind CSS Styling"
          des="I use Tailwind CSS to make websites look nice and simple. It helps me work faster and keeps my code easy to understand."
          icon={<SiTailwindcss />}
        />
        <Card
          title="React UI Development"
          des="I build small and reusable parts of a website using React. This helps me make webistes easier to change and manage."
          icon={<FaReact />}
        />
        <Card
          title="Responsive Design"
          des="I'm still learning how to make websites look good on both phones and computers."
          icon={<FaMobileAlt />}
        />
        <Card
          title="Low but Steady Learner"
          des="i learn step by step, and I keep practicing to get better at frontend developemnt"
          icon={<FaBookOpen />}
        />
        <Card
          title="Simple Projects"
          des="I make small websites using React and Tailwind CSS, including our capstone project, which I build myself."
          icon={<FaLaptopCode />}
        />
      </div>
    </section>
  );
}

export default Features;
