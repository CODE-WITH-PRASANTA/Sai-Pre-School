import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">

      {/* Top Bar */}
      <div className="bg-pink-500 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>001 1234 6789</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>6701 Democracy Blvd, Suite 300, USA</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            <span>Opening Time : 9:30am-5:30pm</span>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-pink-500">Umang</span>
            <span className="text-3xl font-bold text-blue-600">Academy</span>
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-8 font-medium text-gray-700">

            <li className="hover:text-pink-500 cursor-pointer">HOME</li>
            <li className="hover:text-pink-500 cursor-pointer">ABOUT</li>
            <li className="hover:text-pink-500 cursor-pointer">BLOG</li>
            <li className="hover:text-pink-500 cursor-pointer">POST LAYOUT</li>
            <li className="hover:text-pink-500 cursor-pointer">CLASSES</li>
            <li className="hover:text-pink-500 cursor-pointer">TEACHERS</li>
            <li className="hover:text-pink-500 cursor-pointer">PAGES</li>
            <li className="hover:text-pink-500 cursor-pointer">OUR GALLERY</li>

          </ul>

        </div>
      </div>

    </div>
  );
};

export default Navbar;