import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mfm_logo-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar on scroll
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="MFM Logo" className="h-12 w-auto" />
          <span
            className={`text-2xl sm:text-3xl font-extrabold tracking-wide font-serif ${
              scrolled ? "text-purple-800" : "text-purple-600"
            }`}
          >
            MFM Sanctuary
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center space-x-8 font-serif font-semibold ${
            scrolled ? "text-gray-800" : "text-black"
          }`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              {link.to.startsWith("/") ? (
                <Link
                  to={link.to}
                  className="hover:text-purple-700 relative after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-purple-700 after:transition-all"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.to}
                  className="hover:text-purple-700 relative after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-purple-700 after:transition-all"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition ${
            scrolled ? "text-purple-800" : "text-purple-600"
          }`}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg border-t border-gray-100 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col font-serif text-gray-700 divide-y divide-gray-100">
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
