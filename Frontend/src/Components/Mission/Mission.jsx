import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">

        {/* LEFT IMAGE */}
        <div className="mission-left">
          <div className="mission-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
              alt="Teacher and Student Learning"
              className="mission-image"
            />

            {/* Decorative shape */}
            <div className="mission-shape"></div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="mission-right">

          <span className="mission-badge">About Us</span>

          <h2 className="mission-title">
            Welcome To <br />
            <span>Sai Kids Pre School</span>
          </h2>

          <p className="mission-description">
            Sai Kids Pre School is one of the best and top-rated preschools, offering a safe, nurturing, and engaging learning environment for young children. Recognized as a leading play school and daycare, we focus on holistic development through fun, interactive, and activity-based learning.
          </p>

          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-card-icon">🎯</div>
              <div>
                <h4>🎯 Our Mission – Sai Kids Pre School</h4>
                <p>
                  At Sai Kids Pre School, our mission is to inspire curiosity and nurture a lifelong love for learning in every child. As one of the best and top-rated preschools, we are dedicated to providing a safe, caring, and engaging environment where children can explore, discover, and grow with confidence.
                </p>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon">👁️</div>
              <div>
                <h4>👁️ Our Vision – Sai Kids Pre School</h4>
                <p>
                  Sai Kids Pre School aims to nurture confident, creative, and smart young learners through a supportive environment that encourages independent thinking, self-expression, and a positive love for learning.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-bottom">
            <div className="mission-profile">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Director"
              />
              <div>
                <h5>Mrs. Banaja Khuntia</h5>
                <p>Director & Principal</p>
              </div>
            </div>

            <a href="tel:7016201096" className="mission-call-btn">
              📞 Call Now 7016201096
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;