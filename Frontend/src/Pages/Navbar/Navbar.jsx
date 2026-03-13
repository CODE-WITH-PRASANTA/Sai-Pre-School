import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sai-pre-school-logo.png";
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
              <span>91786 81922</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span className="hidden lg:block">
                Plot No.: 526, Haridaspur, Naharkanta, Bhubaneswar
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
<div className="flex items-center cursor-pointer">
  <img
    src={logo}
    alt="SAI KIDS Pre School Logo"
    className="
      h-15 w-15
      sm:h-15 sm:w-15
      md:h-16 md:w-16
      lg:h-20 lg:w-20
      xl:h-[90px] xl:w-[90px]
      rounded-full
      object-cover
      shrink-0
    "
  />
</div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">
            <li>
              <a href="#home" >
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className={navLinkClass}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#news" className={navLinkClass}>
                NEWS
              </a>
            </li>
            <li>
              <a href="#classes" className={navLinkClass}>
                CLASSES
              </a>
            </li>
            <li>
              <a href="#teachers" className={navLinkClass}>
                TEACHERS
              </a>
            </li>
            <li>
              <a href="#events" className={navLinkClass}>
                EVENTS
              </a>
            </li>
            <li>
              <a href="#gallery" className={navLinkClass}>
                GALLERY
              </a>
            </li>
            <li>
              <a href="#testimonials" className={navLinkClass}>
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a href="#contact" className={navLinkClass}>
                CONTACT
              </a>
            </li>
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
            <li>
              <a onClick={closeMenu} href="#home">
                HOME
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#news">
                NEWS
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#classes">
                CLASSES
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#teachers">
                TEACHERS
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#events">
                EVENTS
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#gallery">
                GALLERY
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#testimonials">
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
