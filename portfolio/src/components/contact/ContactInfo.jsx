import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col w-[30%] h-full gap-10">
      {" "}
      {/* ← fixed height */}
      <div className="bg-blue-200 px-10 py-12 ">
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
      </div>
      <div className="bg-blue-600 ">
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
        <h1>set 1</h1>
      </div>
    </div>
  );
}

export default ContactInfo;
