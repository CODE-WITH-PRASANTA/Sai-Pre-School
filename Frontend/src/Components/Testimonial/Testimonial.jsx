import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./Testimonial.css";

import cloudYellow from "../../Assets/ylw_cld.png";
import cloudBlue from "../../Assets/blue_cld.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Client",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Parent",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "The teachers are amazing and my child loves the learning environment.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const data = testimonials[index];

  return (
    <section className="testimonials">

      <img src={cloudYellow} className="cloud cloud-yellow" alt="" />
      <img src={cloudBlue} className="cloud cloud-blue" alt="" />

      <div className="testimonial-title">
        <h2>Testimonials about center</h2>

        <p>
          We have an excellent teacher to child ratio at our Kindergarten to
          ensure that each child receives the attention he or she needs
        </p>
      </div>

      <div className="testimonial-card">

        <div className="testimonial-image">
          <img src={data.img} alt={data.name} />
        </div>

        <div className="testimonial-text">

          <FaQuoteLeft className="quote-icon" />

          <p className="testimonial-message">{data.text}</p>

          <div className="testimonial-footer">

            <div>
              <h4>{data.name}</h4>
              <p>{data.role}</p>
            </div>

            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

          </div>

        </div>

      </div>

      <div className="mobile-arrows">
        <button onClick={prev}>
          <FaArrowLeft />
        </button>

        <button onClick={next}>
          <FaArrowRight />
        </button>
      </div>

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