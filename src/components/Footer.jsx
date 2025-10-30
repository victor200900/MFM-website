import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gray-300 py-16 font-[Poppins] relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Mission */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            MFM <span className="text-pink-400">Sanctuary of Grace</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            A spiritual home where lives are transformed through prayer,
            deliverance, and the power of the Holy Spirit. Raising end-time
            warriors for Christ.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-pink-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#mission" className="hover:text-pink-400 transition">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#pastors" className="hover:text-pink-400 transition">
                Pastors
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Ministries
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/youth" className="hover:text-pink-400 transition">
                Youth Ministry
              </Link>
            </li>
            <li>
              <Link to="/outreach" className="hover:text-pink-400 transition">
                Outreach
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Evangelism
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Bible Study
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            12 Prayer Avenue, Lagos, Nigeria <br />
            Email: info@mfm-sog.org <br />
            Phone: +234 800 123 4567
          </p>
          <div className="flex gap-5 mt-3 text-lg">
            <a
              href="#"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-purple-700/50 mt-12 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} MFM Sanctuary of Grace. All rights
          reserved.
        </p>
        <p className="mt-2">
          Designed with <span className="text-pink-400">💜</span> by{" "}
          <span className="text-white font-medium">Victor</span>
        </p>
      </div>

      {/* Bottom subtle glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 opacity-30"></div>
    </footer>
  );
}

export default Footer;
