import { useState, useEffect } from "react";
import "./HomeComponent.css";

/* Banner Images */
import banner1 from "../../assets/Home-Banner.webp";
import banner2 from "../../assets/Home-Banner2.webp";
import banner3 from "../../assets/Home-Banner3.webp";



/* Floating Images */
import sun from "../../assets/sun-.webp";
import star from "../../assets/star-.webp";

const HomeComponent = () => {
  const banners = [banner1, banner2, banner3];

  const heroContent = [
    {
      title1: "Best Kids Pre School",
      title2: "in Bhubaneswar",
      text: "Sai Kids Pre School is one of the best kids pre schools in Bhubaneswar, providing a safe, fun, and creative learning environment.",
      parents: "100+ Happy Parents",
    },
    {
      title1: "Top Pre School",
      title2: "For Early Learning",
      text: "Sai Kids focuses on play-based learning, creativity, and interactive activities.",
      parents: "100+ Supportive Parents",
    },
    {
      title1: "Trusted Day Care",
      title2: "in Bhubaneswar",
      text: "Safe and caring day care for working parents.",
      parents: "100+ Trusted Parents",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="home-hero">
      {/* Background */}
      <div
        className="home-hero-bg"
        style={{ backgroundImage: `url(${banners[currentSlide]})` }}
      ></div>

      {/* Floating Elements */}
      <img src={sun} className="home-hero-sun" alt="sun" />
      <img src={star} className="home-hero-star" alt="star" />

      <div className="home-hero-container">
        <div className="home-hero-content" key={currentSlide}>
          
          <h1 className="home-hero-title">
            {heroContent[currentSlide].title1} <br />
            {heroContent[currentSlide].title2}
          </h1>

          <p className="home-hero-text">
            {heroContent[currentSlide].text}
          </p>

          {/* BUTTONS */}
          <div className="home-hero-buttons">
            
            <button className="home-btn-join">Contact us</button>

            <div className="home-watch-video">
              <div
                className="home-play-icon"
                onClick={() =>
                  window.open(
                    "https://youtube.com/shorts/h8G6AUhgyU4?si=8dRTiW9C02kqLoVa",
                    "_blank"
                  )
                }
              >
                ▶
              </div>
              <span>Watch Video</span>
            </div>

          </div> {/* ✅ FIXED CLOSING */}

         

        </div>
      </div>

      {/* ARROWS */}
      <button className="home-arrow home-arrow-left" onClick={prevSlide}>
        ←
      </button>

      <button className="home-arrow home-arrow-right" onClick={nextSlide}>
        →
      </button>
    </section>
  );
};

export default HomeComponent;