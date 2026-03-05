import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    <section className="py-20 md:py-24 bg-gray-100 relative overflow-hidden">

      {/* Clouds */}
      <img
        src={cloudYellow}
        className="absolute left-2 md:left-16 top-32 md:top-40 w-16 md:w-32 animate-floatSlow opacity-90"
      />

      <img
        src={cloudBlue}
        className="absolute right-2 md:right-20 top-24 md:top-32 w-20 md:w-36 animate-floatSlow2 opacity-90"
      />

      {/* Title */}
      <div className="text-center mb-12 md:mb-16 px-6 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-600">
          Testimonials about center
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base font-semibold">
          We have an excellent teacher to child ratio at our Kindergarten to ensure
          that each child receives the attention he or she needs
        </p>
      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center px-6 relative z-10   rounded-xl bg-white shadow-2xl shadow-pink-200 py-8 md:py-10">

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={data.img}
            alt=""
            className="rounded-xl shadow-lg border-l-4 border-pink-500 w-[220px] sm:w-[260px] md:w-[320px]"
          />
        </div>

        {/* Text */}
        <div className="relative px-2">

          {/* Divider */}
          <div className="hidden lg:block absolute -left-10 top-0 h-full w-[1px] bg-pink-200"></div>

          <FaQuoteLeft className="text-4xl md:text-6xl text-blue-500 mb-4 md:mb-6 opacity-80" />

          <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            {data.text}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">

            <div>
              <h4 className="text-lg md:text-xl font-semibold">{data.name}</h4>
              <p className="text-gray-500 text-sm">{data.role}</p>
            </div>

            <div className="flex gap-1 text-orange-400 text-lg">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Arrows */}
      <div className="flex md:hidden justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 border-2 border-pink-400 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={next}
          className="w-10 h-10 border-2 border-pink-400 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Desktop Arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-pink-400 text-pink-500 rounded-full items-center justify-center hover:bg-pink-500 hover:text-white transition"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-pink-400 text-pink-500 rounded-full items-center justify-center hover:bg-pink-500 hover:text-white transition"
      >
        <FaArrowRight />
      </button>

    </section>
  );
};

export default Testimonials;