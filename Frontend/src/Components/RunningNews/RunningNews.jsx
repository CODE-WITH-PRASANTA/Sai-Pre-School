import React from "react";
import "./RunningNews.css";

const RunningNews = () => {
  const newsItems = [
    "Admission Open 2026-27",
    "New Batch Starting Soon",
    "Limited Seats Available",
    "Enroll Now for Early Benefits",
  ];

  return (
    <div className="News">
      <div className="News-container">
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
  );
};

export default RunningNews;