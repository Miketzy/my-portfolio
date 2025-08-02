import React from "react";

function ContactForm() {
  return (
    <div className="bg-gray-900 flex flex-col px-12 py-10 shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input
          type="text"
          className="w-full p-2 rounded"
          placeholder="First Name"
        />
        <input
          type="text"
          className="w-full p-2 rounded"
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input type="text" className="w-full p-2 rounded" placeholder="Email" />
        <input type="text" className="w-full p-2 rounded" placeholder="Phone" />
      </div>
      <div>
        <textarea
          className="w-full p-2 rounded resize-none"
          rows="5"
          placeholder="Your Message"
        ></textarea>
      </div>
    </div>
  );
}

export default ContactForm;
