import React, { useState } from "react";
import "./Topbar.css";
import API, { IMAGE_URL } from "../../api/axios";
import { useEffect } from "react";

import { FiMenu, FiX } from "react-icons/fi";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Topbar = () => {
  const [topbarSidebar, setTopbarSidebar] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [news, setNews] = useState([]);

  const fetchGallery = async () => {
    try {
      const res = await API.get("/photo-gallery");
      setGallery(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNews = async () => {
    try {
      const res = await API.get("/news");
      setNews(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGallery();
    fetchNews();
  }, []);

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
          <h2>Best School in Bhubaneswar – Sai Pre School</h2>

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
            {gallery
              .slice(0, 3) // ✅ only 3 items
              .map((item, index) => (
                <div className="topbar-galleryItem" key={index}>
                  <img src={`${IMAGE_URL}${item.image}`} alt="gallery" />
                </div>
              ))}
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

            {news
              .slice(0, 3) // ✅ only 3 items
              .map((item, index) => (
                <div className="topbar-newsItem" key={index}>
                  <img src={`${IMAGE_URL}${item.image}`} alt="news" />

                  <div>
                    <span className="topbar-newsDate">
                      <FaCalendarAlt />{" "}
                      {new Date(item.createdAt).toDateString()}
                    </span>

                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
