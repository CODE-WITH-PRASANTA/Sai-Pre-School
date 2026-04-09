import React from "react";
import "./RunningNews.css";

const RunningNews = () => {
  const newsItems = [
    "🎓 Admission Open for 2026-27 Academic Year",
    "🧒 Playgroup, Nursery & Kindergarten Programs Available",
    "🚀 New Smart Learning Classes Starting Soon",
    "🎁 Early Bird Discount for First 50 Admissions",
    "🏫 Safe & Child-Friendly Campus with CCTV",
    "👩‍🏫 Experienced & Caring Teachers",
    "📚 Activity-Based Learning & Montessori Method",
    "🎨 Dance, Music & Art Classes Included",
    "🚌 Transport Facility Available",
    "📞 Book Your School Visit Today",
  ];

  return (
    <div className="News">
      <div className="News-container">

        {/* LEFT LABEL */}
        <div className="News-label">Latest Updates</div>

        {/* SCROLL AREA */}
        <div className="News-scroll">
          <div className="News-track">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div className="News-item" key={index}>
                <span className="News-badge">NEW</span>
                <span className="News-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RunningNews;