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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.0338594174817!2d126.121004674748!3d6.462697063378947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa118eab6577c1%3A0xd565cc37ff5f8ac5!2sJAMBOREE%20GYM!5e0!3m2!1sen!2sph!4v1754208277181!5m2!1sen!2sph"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
