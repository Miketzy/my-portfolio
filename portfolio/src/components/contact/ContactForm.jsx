import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col w-full px-6 py-10 bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="w-full">
          <label className="block mb-1 text-sm">First Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Enter your first name"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 text-sm">Last Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="w-full">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="e.g. example@gmail.com"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 text-sm">Phone</label>
          <input
            type="tel"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="+63 912 345 6789"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm">Your Message</label>
        <textarea
          className="w-full p-2 rounded bg-gray-700 text-white resize-none"
          rows="5"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-all duration-300"
      >
        Send Message
      </button>
    </div>
  );
}

export default ContactForm;
