import React, { useState, useEffect } from "react";
import logo from "../assets/mfm_logo-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="MFM Church Logo"
            className="h-12 w-auto object-contain"
          />
          <span
            className={`text-2xl md:text-3xl font-extrabold tracking-wide transition-colors ${
              scrolled ? "text-purple-800" : "text-white"
            }`}
          >
            MFM Sanctuary
          </span>
        </div>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center space-x-10 text-base font-semibold transition-colors ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-purple-700 transition relative after:content-[''] after:block after:h-[3px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-purple-700 transition">
              <span>Mission</span>
              <svg
                className="w-4 h-4 transform group-hover:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="absolute left-0 mt-3 w-52 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 z-40">
              <li>
                <a
                  href="#our-beliefs"
                  className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                >
                  Our Beliefs
                </a>
              </li>
              <li>
                <Link
                  to="/outreach"
                  className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                >
                  Outreach
                </Link>
              </li>
              <li>
                <Link
                  to="/youth"
                  className="block px-5 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                >
                  Youth Ministry
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-purple-700 transition relative after:content-[''] after:block after:h-[3px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-700 transition relative after:content-[''] after:block after:h-[3px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl focus:outline-none transition ${
            scrolled ? "text-purple-700" : "text-white"
          }`}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col font-medium text-gray-700 divide-y divide-gray-100">
            {[
              "Home",
              "Our Beliefs",
              "Outreach",
              "Youth Ministry",
              "About",
              "Contact",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-6 py-5 text-lg hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
