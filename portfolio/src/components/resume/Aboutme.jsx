import React from "react";

function Aboutme() {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-[700px]">
      {/* Top Section: About text */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">About Me</h1>
        <p className="text-base leading-relaxed">
          I am a hardworking and detail-oriented person who enjoys creating
          websites using HTML, Tailwind CSS, and React. I like building simple,
          clean, and responsive designs that work well on all devices. I always
          try to write clean code and follow good practices. I am willing to
          learn new tools and improve my skills every day. I can work well alone
          or with a team, and I enjoy solving problems through web development.
        </p>
      </div>

      {/* Bottom Section: Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base text-white">
        <div>
          <span className="font-semibold text-[#85DFE7]">Name:</span> Michael
          John G. Margate
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Age:</span> 26
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Phone:</span> +63
          9658209303
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Address:</span> Purok
          2, Jamboree, Nangan, Gov. Generoso, Davao Oriental, Philippines
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Nationality:</span>{" "}
          Filipino
        </div>
        <div>
          <span className="font-semibold text-[#85DFE7]">Freelance:</span>{" "}
          Available
        </div>

        <div>
          <span className="font-semibold text-[#85DFE7]">Email:</span>{" "}
          michaelmargate2@gmail.com.com
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
