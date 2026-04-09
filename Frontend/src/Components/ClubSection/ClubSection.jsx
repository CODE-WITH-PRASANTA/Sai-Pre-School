import React from "react";
import "./ClubSection.css";

import mainImg from "../../assets/bird-about.png";
import earlyImg from "../../assets/OurService1.webp";
import lunchImg from "../../assets/OurService2.webp";
import afternoonImg from "../../assets/OurService3.webp";
import musicImg from "../../assets/OurService4.webp";

const clubsLeft = [
  {
    title: "Mind Power Activities",
    image: earlyImg,
    points: [
      "Simple exercises to improve focus and attention",
      "Activities that strengthen memory and thinking skills",
      "Helps children develop better learning habits",
    ],
  },
  {
    title: "Creative Learning Programs",
    image: lunchImg,
    points: [
      "Encourages imagination through fun activities",
      "Learning through play-based methods",
      "Builds confidence and self-expression in children",
    ],
  },
];

const clubsRight = [
  {
    title: "Skill Development Sessions",
    image: afternoonImg,
    points: [
      "Improves problem-solving and logical thinking",
      "Helps children become more confident learners",
      "Supports overall personality development",
    ],
  },
  {
    title: "Memory & Brain Activities",
    image: musicImg,
    points: [
      "Techniques to improve memory in young children",
      "Activities that support brain development",
      "Helps children learn faster and understand better",
    ],
  },
];

const ClubCard = ({ title, image, points }) => {
  return (
    <div className="club-card">
      <div className="club-thumb-wrap">
        <img
          src={image}
          alt={`${title} at Sai Pre School`}
          className="club-thumb"
        />
      </div>

      <div className="club-info">
        <h3>{title}</h3>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ClubsSection = () => {
  return (
    <section
      className="clubs-section"
      aria-label="Sai Pre School learning programs and activities"
    >
      <div className="clubs-bg-shape clubs-bg-shape-1"></div>
      <div className="clubs-bg-shape clubs-bg-shape-2"></div>

      {/* HEADER */}
      <div className="clubs-header">
        <span className="clubs-badge">Sai Pre School Programs</span>

        <h2>Engaging Learning Activities at Sai Kids Pre School</h2>

        <p>
          At Sai Kids Pre School in Bhubaneswar, we provide a safe, nurturing,
            and stimulating environment where children can explore, learn, and
            grow with confidence. Our curriculum is designed to support early
            childhood development through play-based learning, creative
            activities, and interactive sessions that make education enjoyable
            and meaningful. As one of the best pre schools in Bhubaneswar, we
            focus on building strong foundations in literacy, numeracy, social
            skills, and emotional development, ensuring every child is prepared
            for future academic success.
        </p>
      </div>

      <div className="clubs-layout">

        {/* LEFT */}
        <div className="clubs-column">
          {clubsLeft.map((club, i) => (
            <ClubCard key={i} {...club} />
          ))}
        </div>

        {/* CENTER */}
        <div className="clubs-center">
          <div className="orbit orbit-1">
            <span className="orbit-dot"></span>
          </div>

          <div className="orbit orbit-2">
            <span className="orbit-dot"></span>
          </div>

          <div className="orbit orbit-3">
            <span className="orbit-dot"></span>
          </div>

          <div className="center-image-wrap">
            <img
              src={mainImg}
              alt="Children learning and playing at Sai Pre School"
              className="center-image"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="clubs-column">
          {clubsRight.map((club, i) => (
            <ClubCard key={i} {...club} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClubsSection;