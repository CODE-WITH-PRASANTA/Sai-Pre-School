import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-10 py-4">
        
        {/* ===== Logo ===== */}
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="SAI KIDS Pre School Logo"
            className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-[90px] xl:w-[90px] rounded-full object-cover"
          />
        </div>

        {/* ===== Desktop Menu ===== */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">
          {[
            "home",
            "about",
            "news",
            "classes",
            "teachers",
            "events",
            "gallery",
            "testimonials",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleScroll(e, `#${item}`)}
              className="text-gray-700 hover:text-pink-500 transition duration-300"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* ===== Mobile Toggle ===== */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`lg:hidden bg-white shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 text-gray-700 font-medium">
          {[
            "home",
            "about",
            "news",
            "classes",
            "teachers",
            "events",
            "gallery",
            "testimonials",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleScroll(e, `#${item}`)}
              className="hover:text-pink-500 transition duration-300"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;