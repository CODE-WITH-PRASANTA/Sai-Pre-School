import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonial.css";

import cloudYellow from "../../Assets/ylw_cld.png";
import cloudBlue from "../../Assets/blue_cld.png";

import API, { IMAGE_URL } from "../../api/axios";

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  /* ================= FETCH TESTIMONIALS ================= */

  const fetchTestimonials = async () => {
    try {

      const res = await API.get("/testimonials");

     
      setTestimonials(res.data.data || []);

    } catch (error) {

      console.error("Fetch testimonials error:", error);

    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* ================= SLIDER ================= */

  const next = () => {

    if (testimonials.length === 0) return;

    setIndex((prev) => (prev + 1) % testimonials.length);

  };

  const prev = () => {

    if (testimonials.length === 0) return;

    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  };

  if (testimonials.length === 0) return null;

  const data = testimonials[index];

  return (
    <section className="testimonials">

      <div className="testimonial-header">
        <h2 className="testimonial-heading">
          Why Parents Love Sai Kids Pre School in Bhubaneswar
        </h2>

        <p className="testimonial-subtext">
          At Sai Kids Pre School, Bhubaneswar, we provide a safe, nurturing and engaging 
          learning environment. Parents trust our experienced teachers, creative activities, 
          and best-in-class day care services to build a strong foundation for their children.
        </p>
    
      </div>

      {/* Clouds */}

      <img src={cloudYellow} className="cloud cloud-yellow" alt="" />
      <img src={cloudBlue} className="cloud cloud-blue" alt="" />

      {/* Card */}

      <div className="testimonial-card">

        {/* Image */}

        <div className="testimonial-image">
          <img
            src={`${IMAGE_URL}${data.image}`}
            alt={data.name}
          />
        </div>

        {/* Text */}

        <div className="testimonial-text">

          <FaQuoteLeft className="quote-icon" />

          <p className="testimonial-message">
            {data.description}
          </p>

          <div className="testimonial-footer">

          <div className="testimonial-user">
            <h4 className="testimonial-name">{data.name}</h4>
            <p className="testimonial-role">{data.designation}</p>
          </div>

          <div className="testimonial-rating">
            {[...Array(data.rating || 5)].map((_, i) => (
              <FaStar key={i} className="testimonial-star" />
            ))}
          </div>

          </div>

        </div>

      </div>

      {/* Mobile arrows */}

      <div className="mobile-arrows">

        <button onClick={prev}>
          <FaArrowLeft />
        </button>

        <button onClick={next}>
          <FaArrowRight />
        </button>

      </div>

      {/* Desktop arrows */}

      <button className="desktop-arrow left" onClick={prev}>
        <FaArrowLeft />
      </button>

      <button className="desktop-arrow right" onClick={next}>
        <FaArrowRight />
      </button>

    </section>
  );
};

export default Testimonials;