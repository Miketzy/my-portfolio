import React from "react";
import { useTypewriter, cursor, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
    <div className="w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-[#85DFE7] capitalize">
            Michael John
            <br />
            G. Margate
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#85DFE7"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide">
          I’m a fresh graduate in Information Technology with a strong interest
          in frontend development. While I may not be the fastest learner, I am
          hardworking, dedicated, and always interested in learning and
          improving. I enjoy creating user-friendly websites using HTML, CSS,
          JavaScript, React, and Tailwind CSS. I’m committed to growing at my
          own pace through effort and consistency.
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
