import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="about-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
              alt="Teacher and Student Learning"
              className="about-image"
            />

            {/* Decorative shape */}
            <div className="about-shape"></div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          <span className="about-badge">About Us</span>

          <h2 className="about-title">
            Welcome To <br />
            <span>Sai Kids Pre School</span>
          </h2>

          <p className="about-description">
            Sai Kids Pre School is one of the best and top-rated preschools,
            providing a safe, nurturing, and engaging learning environment.
            Our expert teachers guide children through fun, interactive learning
            that builds creativity, confidence, and strong foundational skills.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">🎯</div>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Inspire curiosity and nurture a lifelong love for learning.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="card-icon">👁️</div>
              <div>
                <h4>Our Vision</h4>
                <p>
                  Build confident, creative, and smart young learners.
                </p>
              </div>
            </div>
          </div>

          <div className="about-bottom">
            <div className="about-profile">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Director"
              />
              <div>
                <h5>Mrs. Banaja Khuntia</h5>
                <p>Director & Principal</p>
              </div>
            </div>

            <a href="tel:7016201096" className="about-call-btn">
              📞 Call Now 7016201096
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;