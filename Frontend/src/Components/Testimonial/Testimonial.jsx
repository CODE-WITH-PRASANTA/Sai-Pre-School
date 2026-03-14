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

      {/* Clouds */}

      <img src={cloudYellow} className="cloud cloud-yellow" alt="" />
      <img src={cloudBlue} className="cloud cloud-blue" alt="" />

      {/* Title */}

      <div className="testimonial-title">
        <h2>Testimonials about center</h2>
        <p>
          We have an excellent teacher to child ratio at our Kindergarten to
          ensure that each child receives the attention he or she needs
        </p>
      </div>

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

            <div>

              <h4>{data.name}</h4>

              <p>{data.designation}</p>

            </div>

            <div className="stars">

              {[...Array(data.rating || 5)].map((_, i) => (
                <FaStar key={i} />
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