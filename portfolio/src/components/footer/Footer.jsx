import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Name */}
        <div>
          <h1 className="text-2xl font-bold">YourName</h1>
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
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
