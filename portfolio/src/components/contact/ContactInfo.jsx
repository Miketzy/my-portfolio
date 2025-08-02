import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col w-full h-full gap-10">
      {" "}
      {/* ← fixed height */}
      <div className="bg-blue-200 ">Set 1</div>
      <div className="bg-blue-600 ">Set 2</div>
    </div>
  );
}

export default ContactInfo;
