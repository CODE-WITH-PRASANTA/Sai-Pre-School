import { useState, useEffect } from "react";
import "./HomeComponent.css";

/* Banner Images */
import banner1 from "../../assets/Home-Banner.webp";
import banner2 from "../../assets/Home-Banner2.webp";
import banner3 from "../../assets/Home-Banner3.webp";

/* Small Images */
import sm1 from "../../assets/sm1.webp";
import sm2 from "../../assets/sm2.webp";
import sm3 from "../../assets/sm3.webp";

/* Floating Images */
import sun from "../../assets/sun-.webp";
import star from "../../assets/star-.webp";

const HomeComponent = () => {

  const banners = [banner1, banner2, banner3];

  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* Next */
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  /* Prev */
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="home-hero">

      {/* Banner Background */}
      <div
        className="home-hero-bg"
        style={{ backgroundImage: `url(${banners[currentSlide]})` }}
      ></div>

      {/* Floating Sun */}
      <img src={sun} className="home-hero-sun" alt="sun" />

      {/* Floating Star */}
      <img src={star} className="home-hero-star" alt="star" />

      {/* Content */}
      <div className="home-hero-container">

        <div className="home-hero-content">

          <h1 className="home-hero-title">
            Children Academy <br />
            First Researchers
          </h1>

          <p className="home-hero-text">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>

          <div className="home-hero-buttons">

            <button className="home-btn-join">
              Join us
            </button>

            <div className="home-watch-video">
              <div className="home-play-icon">▶</div>
              <span>Watch Video</span>
            </div>

          </div>

          {/* Support Parents */}

          <div className="home-support">

            <div className="home-support-imgs">
              <img src={sm1} alt="" />
              <img src={sm2} alt="" />
              <img src={sm3} alt="" />
            </div>

            <p>20K+ Supportive Parents</p>

          </div>

        </div>

      </div>

      {/* Arrows */}

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