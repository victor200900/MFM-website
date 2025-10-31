import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mfm_logo-removebg-preview.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Beliefs", to: "#our-beliefs" },
    { name: "Outreach", to: "/outreach" },
    { name: "Children", to: "/youth" },
    { name: "About", to: "#about" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] font-serif transition-all duration-500 ${
        scrolled
          ? "shadow-md bg-white/95 backdrop-blur-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-10 py-4 relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} alt="MFM Logo" className="h-10 sm:h-12 w-auto" />
          <span className="text-2xl font-bold text-purple-800 tracking-wide">
            MFM Sanctuary
          </span>
        </NavLink>

        {/* Toggle button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-purple-800 focus:outline-none mr-5" // 👈 moved more left
        >
          {menuOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <ul
          className={`sm:flex sm:items-center sm:space-x-8 text-gray-800 font-medium
            absolute sm:static left-0 top-full w-full sm:w-auto 
            bg-white sm:bg-transparent shadow-md sm:shadow-none 
            transition-all duration-500 ease-in-out 
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:opacity-100"}
            overflow-hidden sm:overflow-visible
          `}
        >
          {navLinks.map((link, i) => (
            <li key={i} className="sm:my-0 my-3 text-center sm:text-left">
              {link.to.startsWith("/") ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 font-semibold hover:text-purple-900 transition-colors duration-300"
                      : "text-gray-700 hover:text-purple-700 transition-colors duration-300"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ) : (
                <a
                  href={link.to}
                  className="text-gray-700 hover:text-purple-700 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
