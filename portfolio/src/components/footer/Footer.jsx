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
    <footer className="w-full bg-[#1f2937] text-white pt-20 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <p className="text-lg font-semibold mt-2 text-white">
            Michael John G. Margate
          </p>
          <p className="text-sm text-gray-400">
            Full Stack Developer <br /> | Frontend Developer
          </p>
          <p className="text-xs mt-1 text-gray-500 leading-relaxed">
            Passionate about building modern and responsive web applications
            using the latest technologies.
          </p>
        </div>

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

        <div>
          <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
          <div className="flex gap-4 text-gray-300 mt-2">
            <a
              href="https://www.facebook.com/michael.john.garcia.margate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
              className="hover:text-white"
            >
              <SiGmail size={20} />
            </a>
            <a
              href="https://www.instagram.com/reiji.margate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/john_marga74179"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-john-g-margate-203893371/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Michael John G. Margate. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
