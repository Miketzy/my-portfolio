import React from "react";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div>
        <div>
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1>
            {" "}
            Hi, I'm
            <span className="text-[#85DFE7] capitalize">
              Michael John Margate
            </span>
          </h1>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Banner;
