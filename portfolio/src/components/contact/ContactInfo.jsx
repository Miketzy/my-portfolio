import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col w-[30%] h-full gap-10">
      {" "}
      {/* ← fixed height */}
      <div className="flex flex-col px-12 py-10 bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white">
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
      </div>
      <div className="flex flex-col  bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white ">
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
      </div>
    </div>
  );
}

export default ContactInfo;
