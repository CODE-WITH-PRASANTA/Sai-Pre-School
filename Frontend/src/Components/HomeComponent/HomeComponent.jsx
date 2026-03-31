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

  /* ⭐ Content for each slide */
const heroContent = [

{
title1: "Best Kids Pre School",
title2: "in Bhubaneswar",
text: "Sai Kids Pre School is one of the best kids pre schools in Bhubaneswar, providing a safe, fun, and creative learning environment where children explore, play, and build strong educational foundations.",
parents: "100+ Happy Parents",
},

{
title1: "Top Pre School",
title2: "For Early Learning",
text: "Recognized as a top pre school in Bhubaneswar, Sai Kids focuses on play-based learning, creativity, and interactive activities that help children develop confidence, curiosity, and essential life skills.",
parents: "100+ Supportive Parents",
},

{
title1: "Trusted Day Care",
title2: "in Bhubaneswar for Working Parents",
text: "Sai Kids offers safe and caring day care in Bhubaneswar for working parents. Our nurturing environment ensures children learn, play, and grow happily under the guidance of experienced teachers.",
parents: "100+ Trusted Parents",
},

];

  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* Next */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  /* Prev */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
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
        <div className="home-hero-content" key={currentSlide}>
          <h1 className="home-hero-title">
            {heroContent[currentSlide].title1} <br />
            {heroContent[currentSlide].title2}
          </h1>

          <p className="home-hero-text">{heroContent[currentSlide].text}</p>

          <div className="home-hero-buttons">
          <a
              href="https://wa.me/919178681922?text=Hello%20Sai%20Kids%20Pre%20School,%20I%20am%20interested%20in%20admission."
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn-join"
            >
              Contact Us
            </a>

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

            <p>{heroContent[currentSlide].parents}</p>
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
