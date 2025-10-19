import React, { useState } from "react";
import logo from "../assets/mfm_logo-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="MFM Church Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-purple-700 tracking-wide">
            MFM Sanctuary
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <a
              href="#about"
              className="relative hover:text-purple-700 transition-colors before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-purple-600 hover:before:w-full before:transition-all before:duration-300"
            >
              About
            </a>
          </li>

          {/* Mission Dropdown */}
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-purple-700 transition-colors">
              <span>Mission</span>
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </button>

            <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-xl mt-3 w-52 border border-gray-100 transition-all duration-300">
              <li>
                <a
                  href="#our-beliefs"
                  className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Our Beliefs
                </a>
              </li>
              <li>
                <a
                  href="#outreach"
                  className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Outreach
                </a>
              </li>
              <li>
                <a
                  href="#youth"
                  className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Youth Ministry
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#shop"
              className="relative hover:text-purple-700 transition-colors before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-purple-600 hover:before:w-full before:transition-all before:duration-300"
            >
              Shop
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative hover:text-purple-700 transition-colors before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-purple-600 hover:before:w-full before:transition-all before:duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700 text-3xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 animate-fadeIn">
          <ul className="flex flex-col text-center font-medium py-4 space-y-4">
            <li>
              <a
                href="#about"
                className="block text-gray-700 hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#our-beliefs"
                className="block text-gray-700 hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Our Beliefs
              </a>
            </li>
            <li>
              <a
                href="#outreach"
                className="block text-gray-700 hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Outreach
              </a>
            </li>
            <li>
              <a
                href="#youth"
                className="block text-gray-700 hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Youth Ministry
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="block text-gray-700 hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
