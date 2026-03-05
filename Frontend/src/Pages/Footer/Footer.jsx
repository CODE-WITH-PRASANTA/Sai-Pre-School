import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {

  const [email, setEmail] = useState("");

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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

  return (
    <footer className="relative bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 pt-20">

      {/* Footer Content */}
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 pb-12"
      >

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-pink-500">
            Umang <span className="text-blue-600">Academy</span>
          </h2>

          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex gap-4 mt-6">

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
            <p className="footer-link">HOME</p>
            <p className="footer-link">ABOUT</p>
            <p className="footer-link">FAQ</p>
            <p className="footer-link">EVENT</p>
            <p className="footer-link">BLOG</p>
            <p className="footer-link">GALLERY</p>
            <p className="footer-link">CLASSES</p>
            <p className="footer-link">CONTACT</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">CONTACT</h3>

          <div className="space-y-4 text-gray-700">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-pink-500 mt-1"/>
              <p>6701 Democracy Blvd, Suite 300</p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="text-pink-500"/>
              <p>001 1234 6789</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="text-pink-500"/>
              <p>info@example.com</p>
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
              onChange={(e)=>setEmail(e.target.value)}
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
        Copyright © Umang Academy
      </div>

      {/* Back To Top */}
      <button
        onClick={scrollTop}
        className="floating-btn bottom-6 right-6"
      >
        <FaArrowUp/>
      </button>

      {/* WhatsApp Button */}
      <a
        href="#"
        className="floating-btn bottom-20 right-6 bg-green-500 hover:bg-green-600"
      >
        <FaWhatsapp/>
      </a>

    </footer>
  );
};

export default Footer;