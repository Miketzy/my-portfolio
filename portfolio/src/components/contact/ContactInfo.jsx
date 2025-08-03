import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function ContactSection() {
  return (
    <div className="flex flex-col w-full lg:w-[50%] h-full gap-10">
      {/* Contact Info with Social Media */}
      <div className="flex flex-col px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Contact Info</h2>

        <div className="flex items-center gap-3 mb-2">
          <FaMapMarkerAlt className="text-[#85DFE7]" />
          <span>Purok 2-A Jamboree Nangan, Gov. Generoso Davao Oriental </span>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <FaEnvelope className="text-[#85DFE7]" />
          <span>michaelmargate2@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 mb-6 ">
          <FaPhone className="text-[#85DFE7]" />
          <span>+63 965 820 9303</span>
        </div>

        <div className="flex gap-4 justify-start mt-2">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-sky-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-60 bg-gradient-to-r from-gray-800 to-gray-900 shadow-[10px_10px_20px_rgba(0,0,0,0.5),_-10px_-10px_20px_rgba(255,255,255,0.05)] group rounded-lg text-white">
        <h2 className="text-lg font-semibold mb-2">Our Location</h2>
        <div className="w-full h-full bg-gray-700 rounded-md flex items-center justify-center">
          <a
            href="https://maps.app.goo.gl/V6rMYKdi8ypDHdC5A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#85DFE7] underline break-all text-center"
          >
            https://maps.app.goo.gl/V6rMYKdi8ypDHdC5A
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
