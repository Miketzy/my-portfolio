import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col px-12 py-10 bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] rounded-lg text-white w-full">
      {/* First Name & Last Name */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">First Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-300"
            placeholder="Enter your first name"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Last Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-300"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Phone</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-300"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold">Message</label>
        <textarea
          className="w-full p-2 rounded bg-gray-700 text-white resize-none placeholder-gray-300"
          rows="5"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-300">
        Send Message
      </button>
    </div>
  );
}

export default ContactForm;
