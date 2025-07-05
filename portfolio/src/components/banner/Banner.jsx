import React from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
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
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div className="w-1/2">
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
          </h2>
          <p className="text-base leading-6 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            illum ducimus voluptatibus aliquid itaque quos, sapiente illo
            asperiores excepturi corrupti error rem ut maxime repudiandae a?
            Ullam exercitationem modi beatae.
          </p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
}

export default Banner;
