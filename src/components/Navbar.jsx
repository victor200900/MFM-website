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
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 font-serif ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} alt="MFM Logo" className="h-10 sm:h-12 w-auto" />
          <span className="text-2xl font-bold text-purple-800 tracking-wide">
            MFM Sanctuary
          </span>
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex items-center space-x-8 text-gray-800 font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              {link.to.startsWith("/") ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 font-semibold border-b-2 border-purple-700 pb-1 transition-all duration-300"
                      : "text-gray-700 hover:text-purple-700 transition-all duration-300"
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <a
                  href={link.to}
                  className="text-gray-700 hover:text-purple-700 transition-all duration-300"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-purple-800 focus:outline-none relative z-[1100]"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

        {/* Mobile Menu (Animated Dropdown) */}
        <div
          className={`absolute top-0 left-0 w-full bg-white/95 backdrop-blur-md text-gray-800 transform transition-transform duration-500 ease-in-out sm:hidden ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 py-20 font-medium text-lg">
            {navLinks.map((link, i) => (
              <li key={i}>
                {link.to.startsWith("/") ? (
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 font-semibold border-b-2 border-purple-700 pb-1 transition-all duration-300"
                        : "text-gray-700 hover:text-purple-700 transition-all duration-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <a
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-purple-700 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
