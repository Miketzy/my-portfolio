import React from "react";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div>
        <div className="flex flex-col gap-3">
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
            a <span>Lorem ipsum</span>
          </h2>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Banner;
