import React, { useState } from "react";
import "./Topbar.css";

import { FiMenu, FiX } from "react-icons/fi";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import img1 from "../../assets/photo1.webp";
import img2 from "../../assets/photo2.webp";
import img3 from "../../assets/photo3.webp";

import news1 from "../../assets/photo4.webp";
import news2 from "../../Assets/photo5.webp";
import news3 from "../../Assets/photo6.webp";

const Topbar = () => {
  const [topbarSidebar, setTopbarSidebar] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const toggleTopbarSidebar = () => {
    setTopbarSidebar(!topbarSidebar);
  };

  return (
    <div className="topbar">
      {/* TOPBAR */}
      <div className="topbar-container">
        <div className="topbar-left">
          <div className="topbar-item">
            <FaEnvelope />
            <span>preschoolsaikids@gmail.com</span>
          </div>

          <div className="topbar-item">
            <FaPhoneAlt />
            <span>91786 81922</span>
          </div>
        </div>

        <div className="topbar-right">
          <button
            className="topbar-contactBtn"
            onClick={() => (window.location.href = "tel:7016201096")}
          >
            <FaPhoneAlt />
            +91 91786 81922
          </button>

          <div className="topbar-menuIcon" onClick={toggleTopbarSidebar}>
            <FiMenu />
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        className={`topbar-overlay ${topbarSidebar ? "active" : ""}`}
        onClick={toggleTopbarSidebar}
      ></div>

      {/* SIDEBAR */}
      <div className={`topbar-sidebar ${topbarSidebar ? "active" : ""}`}>
        {/* Sidebar Header */}
        <div className="topbar-sidebarHeader">
          <h2>
            Best School in Bhubaneswar – Sai Pre School
          </h2>

          <div className="topbar-closeIcon" onClick={toggleTopbarSidebar}>
            <FiX />
          </div>
        </div>

        <div className="topbar-sidebarContent">
          {/* ADDRESS */}
          <div className="topbar-address">
            <FaMapMarkerAlt className="topbar-locationIcon" />

            <p>
             Plot No.: 526, Haridaspur, <br />
              Naharkanta, Bhubaneswar 
              
            </p>
          </div>

          {/* GALLERY */}
          <div className="topbar-gallery">
            <div className="topbar-galleryItem">
              <img src={img1} alt="" onClick={() => setSelectedImg(img1)} />
            </div>

            <div className="topbar-galleryItem">
              <img src={img2} alt="" onClick={() => setSelectedImg(img2)} />
            </div>

            <div className="topbar-galleryItem">
              <img src={img3} alt="" onClick={() => setSelectedImg(img3)} />
            </div>
          </div>

          {/* MODAL */}
          {selectedImg && (
            <div className="imgModal">
              <FaTimes
                className="closeBtn"
                onClick={() => setSelectedImg(null)}
              />

              <img src={selectedImg} alt="" className="modalImg" />
            </div>
          )}

          {/* CONTACT SECTION */}
          <div className="topbar-contact">
            <h3>Get In Touch</h3>

            <div className="topbar-line"></div>

            <p>
              Monday – Saturday: <strong>09:00 AM – 06:00 PM</strong>
            </p>
            <p>
              Sunday: <strong>Closed</strong>
            </p>

            <div className="topbar-contactItem">
              <div className="topbar-iconCircle">
                <FaEnvelope />
              </div>

              <span>Email:preschoolsaikids@gmail.com</span>
            </div>

            <div className="topbar-contactItem">
              <div className="topbar-iconCircle">
                <FaPhoneAlt />
              </div>

              <span>Phone:91786 81922</span>
            </div>
          </div>

          {/* LATEST NEWS */}
          <div className="topbar-news">
            <h3>Latest News</h3>

            <div className="topbar-newsItem">
              <img src={news1} alt="news" />

              <div>
                <span className="topbar-newsDate">
                  <FaCalendarAlt /> 26 September 2023
                </span>

                <p>How to Keep Children Safe Online In</p>
              </div>
            </div>

            <div className="topbar-newsItem">
              <img src={news2} alt="news" />

              <div>
                <span className="topbar-newsDate">
                  <FaCalendarAlt /> 09 August 2023
                </span>

                <p>Baby school and other secrets is yourfamily</p>
              </div>
            </div>

            <div className="topbar-newsItem">
              <img src={news3} alt="news" />

              <div>
                <span className="topbar-newsDate">
                  <FaCalendarAlt /> 09 August 2023
                </span>

                <p>Easy steps for choosing to the learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
