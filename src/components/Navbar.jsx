import React, { useState, useEffect } from "react";
import logo from "../assets/mfm_logo-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Our Beliefs", to: "#our-beliefs" },
    { name: "Outreach", to: "/outreach" },
    { name: "Youth Ministry", to: "/youth" },
    { name: "About", to: "#about" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="MFM Logo" className="h-12 w-auto" />
          <span
            className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide ${
              scrolled ? "text-purple-800" : "text-white"
            }`}
          >
            MFM Sanctuary
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center space-x-8 lg:space-x-10 text-base font-semibold ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              {link.to.startsWith("/") ? (
                <Link
                  to={link.to}
                  className="hover:text-purple-700 transition relative after:content-[''] after:block after:h-[3px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.to}
                  className="hover:text-purple-700 transition relative after:content-[''] after:block after:h-[3px] after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
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

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg border-t border-gray-100 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col font-medium text-gray-700 divide-y divide-gray-100">
          {navLinks.map((link, i) => (
            <li key={i}>
              {link.to.startsWith("/") ? (
                <Link
                  to={link.to}
                  className="block px-6 py-5 text-lg hover:bg-purple-50 hover:text-purple-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.to}
                  className="block px-6 py-5 text-lg hover:bg-purple-50 hover:text-purple-700"
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
