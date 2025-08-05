import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { logo } from "../../assets";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Name */}
        <div>
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <p className="text-sm mt-2 text-gray-400">Frontend Developer</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-white">
                Resume
              </a>
            </li>
            <li>
              <a href="#testimonial" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
          <div className="flex gap-4 text-gray-300 mt-2">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a href="mailto:your.email@gmail.com" className="hover:text-white">
              <SiGmail size={20} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Michael John G. Margate. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
