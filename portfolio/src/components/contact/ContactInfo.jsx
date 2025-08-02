import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col h-96 gap-10">
      {" "}
      {/* ← fixed height */}
      <div className="bg-blue-200 w-[50%] h-[50%]">Set 1</div>
      <div className="bg-blue-600 w-[50%] h-[50%]">Set 2</div>
    </div>
  );
}

export default ContactInfo;
