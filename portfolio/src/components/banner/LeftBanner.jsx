import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Data Entry Encoder.",
      "Frontend Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="pt-20 w-full md:w-1/2 flex flex-col gap-10">
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
          I am a fresh graduate in Information Technology. I am very interested
          in frontend development. I may not learn fast, but I work hard and
          always try my best. I enjoy making simple and clean websites using
          HTML, CSS, JavaScript, React, and Tailwind CSS. I want to keep
          learning and improving step by step through effort and practice.
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
              href="https://www.linkedin.com"
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
