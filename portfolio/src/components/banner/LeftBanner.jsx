import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Full Stack Developer.",
      "Data Entry Encoding.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="pt-15 md:pt-1 w-full md:w-1/2 flex flex-col gap-10">
      {/* Title Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-[#85DFE7] capitalize">
            Michael John
            <br />
            G. Margate
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#85DFE7"
          />
        </h2>

        <p className="text-base leading-6 tracking-wide text-white">
          Hi! I'm a fresh graduate of Information Technology with a passion for
          building clean and responsive web applications. I created our entire
          capstone project using ReactJS, Node.js, and PostgreSQL. I enjoy
          working on both the frontend and backend and love learning through
          hands-on projects. I may still be learning, but I'm always eager to
          grow and improve as a full-stack developer.
        </p>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-base uppercase mb-4 text-white">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.facebook.com/michael.john.garcia.margate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://x.com/john_marga74179"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <BsTwitterX />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/reiji.margate/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/michael-john-g-margate-203893371/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
