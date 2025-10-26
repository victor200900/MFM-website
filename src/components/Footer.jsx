import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-800 text-gray-200 py-10 font-[Poppins]">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-purple-700 pb-6">
          <h2 className="text-2xl font-bold text-white">
            MFM <span className="text-pink-400">Sanctuary of Grace</span>
          </h2>

          <div className="flex gap-5 text-lg">
            <a
              href="#"
              className="hover:text-pink-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} MFM Sanctuary of Grace. All rights
            reserved.
          </p>
          <p className="mt-2">
            Designed with 💜 by <span className="text-pink-400">Victor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
