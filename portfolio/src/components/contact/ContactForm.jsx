import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";

function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState(""); // ✅ corrected from 'lasttname'
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_khipywe";
    const templateId = "template_6d48n7a";
    const publicKey = "U2ZQ8bqB1ZlFnLGlv";

    const templateParams = {
      from_name: `${firstname} ${lastname}`, // ✅ uses corrected 'lastname'
      from_email: email,
      to_name: "Michael John G. Margate", // ✅ your own name or whoever receives the email
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Reset the form
        setFirstname("");
        setLastname(""); // ✅ uses correct setter
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full px-6 py-10 lg:px-12  bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white"
      >
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm">Phone</label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="+63 ### ### ####"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm">Your Message</label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 text-white resize-none"
            rows="5"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default ContactForm;
