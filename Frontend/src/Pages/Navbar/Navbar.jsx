import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-pink-500 font-semibold"
      : "text-gray-700 hover:text-pink-500 transition";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-pink-500 text-white text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-10 py-2">

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>001 1234 6789</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span className="hidden lg:block">
                6701 Democracy Blvd, Suite 300, USA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            <span>9:30am - 5:30pm</span>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 z-50 bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-10 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-pink-500">
              Umang
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
              Academy
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">

            <li><NavLink to="/" className={navLinkClass}>HOME</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>ABOUT</NavLink></li>
            <li><NavLink to="/news" className={navLinkClass}>NEWS</NavLink></li>
            <li><NavLink to="/classes" className={navLinkClass}>CLASSES</NavLink></li>
            <li><NavLink to="/teachers" className={navLinkClass}>TEACHERS</NavLink></li>
            <li><NavLink to="/events" className={navLinkClass}>EVENTS</NavLink></li>
            <li><NavLink to="/gallery" className={navLinkClass}>GALLERY</NavLink></li>
            <li><NavLink to="/test" className={navLinkClass}>TESTIMONIALS</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink></li>

          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white shadow-md transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-[500px] py-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 px-6 text-gray-700 font-medium">

            <li><NavLink onClick={closeMenu} to="/">HOME</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/about">ABOUT</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/news">NEWS</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/classes">CLASSES</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/teachers">TEACHERS</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/events">EVENTS</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/gallery">GALLERY</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/test">TESTIMONIALS</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/contact">CONTACT</NavLink></li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;