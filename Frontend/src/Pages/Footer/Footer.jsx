import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const subscribe = () => {
    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }
    alert("Subscribed!");
    setEmail("");
  };

  // ✅ WhatsApp number (with country code)
  const whatsappNumber = "919178681922";

  // ✅ WhatsApp URL
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="relative bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 pt-20">
      {/* Footer Content */}
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 pb-12"
      >
        {/* Logo + Social */}
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src={logo}
            alt="SAI KIDS Pre School Logo"
            className="
              h-16 w-16
              sm:h-18 sm:w-18
              md:h-20 md:w-20
              lg:h-24 lg:w-24
              xl:h-[100px] xl:w-[100px]
              rounded-full
              object-cover
              shrink-0
            "
          />

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <div className="social-btn">
              <FaFacebookF />
            </div>

            <div className="social-btn">
              <FaGooglePlusG />
            </div>

            <div className="social-btn">
              <FaLinkedinIn />
            </div>

            <div className="social-btn">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-title">INFORMATION</h3>

          <div className="grid grid-cols-2 gap-y-3 text-gray-700">
            <a href="#home" className="footer-link">HOME</a>
            <a href="#about" className="footer-link">ABOUT</a>
            <a href="#news" className="footer-link">NEWS</a>
            <a href="#classes" className="footer-link">CLASSES</a>
            <a href="#teachers" className="footer-link">TEACHERS</a>
            <a href="#events" className="footer-link">EVENTS</a>
            <a href="#gallery" className="footer-link">GALLERY</a>
            <a href="#testimonials" className="footer-link">TESTIMONIALS</a>
            <a href="#contact" className="footer-link">CONTACT</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">CONTACT</h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-pink-500 mt-1" />
              <p>Plot No.: 526, Haridaspur, Naharkanta, Bhubaneswar</p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="text-pink-500" />
              <p>91786 81922</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="text-pink-500" />
              <p>preschoolsaikids@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="footer-title">SUBSCRIBE</h3>

          <div className="backdrop-blur-md bg-white/50 p-2 rounded-lg flex overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 bg-transparent outline-none"
            />

            <button
              onClick={subscribe}
              className="bg-pink-500 text-white px-5 hover:bg-pink-600 transition"
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-400 text-center py-4 text-gray-700">
        © 2026 Sai Kids Pre School. All Rights Reserved. Designed By: PRWEBSTOCK
      </div>

      {/* Back To Top */}
      <button onClick={scrollTop} className="floating-btn bottom-6 right-6">
        <FaArrowUp />
      </button>

      {/* ✅ WhatsApp Button (UPDATED) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bottom-20 right-6 bg-green-500 hover:bg-green-600"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;