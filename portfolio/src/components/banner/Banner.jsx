import React from "react";
import { useTypewriter, cursor, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
function Banner() {
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
    <section
      id="home"
      className="w-full py-13 pb-13 flex items-center border-b-[1px] border-b-black"
    >
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            illum ducimus voluptatibus aliquid itaque quos, sapiente illo
            asperiores excepturi corrupti error rem ut maxime repudiandae a?
            Ullam exercitationem modi beatae.
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
      <div className="w-1/2"></div>
    </section>
  );
}

export default Banner;
