import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col px-12 py-10">
      <div className="flex flex-col lg:flex-row">
        <input type="text" />
        <input type="text" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <input type="text" />
        <input type="text" />
      </div>
      <div className="">
        <textarea name="" id=""></textarea>
      </div>
    </div>
  );
}

export default ContactForm;
