import React, { useState } from "react";
import logo from "../assets/mfm_logo-removebg-preview.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Log */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="MFM Church Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-semibold text-purple-700 tracking-wide">
            MFM Sanctuary
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-700 transition relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              About
            </a>
          </li>

          {/* Mission Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-purple-700 transition">
              <span>Mission</span>
              <svg
                className="w-4 h-4 transform group-hover:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-40">
              <li>
                <a
                  href="#our-beliefs"
                  className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Our Beliefs
                </a>
              </li>
              <li>
                <a
                  href="#outreach"
                  className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Outreach
                </a>
              </li>
              <li>
                <Link to ='/youth'
              
                  className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Youth Ministry
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#shop"
              className="text-gray-700 hover:text-purple-700 transition relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-700 transition relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700 text-2xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col font-medium text-gray-700 divide-y divide-gray-100">
            <li>
              <a
                href="#about"
                className="block px-6 py-4 hover:bg-purple-50 hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#our-beliefs"
                className="block px-6 py-4 hover:bg-purple-50 hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                Our Beliefs
              </a>
            </li>
            <li>
              <a
                href="#outreach"
                className="block px-6 py-4 hover:bg-purple-50 hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                Outreach
              </a>
            </li>
            <li>
              <Link to="/youth"
                className="block px-6 py-4 hover:bg-purple-50 hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                Youth Ministry
              </Link>
            </li>
            <li>
              <a
                href="#shop"
                className="block px-6 py-4 hover:bg-purple-50 hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-6 py-4 hover:bg-purple-50 hover:text-purple-700"
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
