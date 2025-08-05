import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";

function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_khipywe", // Replace with your EmailJS service ID
        "template_6d48n7a", // Replace with your EmailJS template ID
        formRef.current,
        "U2ZQ8bqB1ZlFnLGlv" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();

          setTimeout(() => setSuccess(false), 4000); // Hide after 4s
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Try again later.");
          console.log(error);
        }
      );
  };
  return (
    <>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col w-full px-6 py-10 lg:px-12  bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white"
      >
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              name="first_name"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              name="last_name"
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
              name="email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="+63 ### ### ####"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm">Your Message</label>
          <textarea
            name="message"
            className="w-full p-2 rounded bg-gray-700 text-white resize-none"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-all duration-300"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
      {success && (
        <p className="text-green-600 mt-4 font-semibold">
          ✅ Message sent successfully!
        </p>
      )}
    </>
  );
}

export default ContactForm;
