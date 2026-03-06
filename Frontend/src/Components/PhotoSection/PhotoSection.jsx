import React, { useEffect, useState } from "react";
import "./PhotoSection.css";

import img1 from "../../assets/pic11.webp";
import img2 from "../../assets/pic12.webp";
import img3 from "../../assets/pic13.webp";
import img4 from "../../assets/pic14.webp";
import img5 from "../../assets/pic15.webp";
import img6 from "../../assets/pic16.webp";

import img7 from "../../assets/pic11.webp";
import img8 from "../../assets/pic12.webp";
import img9 from "../../assets/pic13.webp";
import img10 from "../../assets/pic14.webp";
import img11 from "../../assets/pic15.webp";
import img12 from "../../assets/pic16.webp";

const PhotoSection = () => {
  const base = "photo-section";

  const galleryImages = [
    { id: 1, img: img1, alt: "Children in classroom activity" },
    { id: 2, img: img2, alt: "Teacher and children playing with blocks" },
    { id: 3, img: img3, alt: "Teacher guiding kids in learning class" },
    { id: 4, img: img4, alt: "Toddler playing with colorful toys" },
    { id: 5, img: img5, alt: "Children painting eggs in activity room" },
    { id: 6, img: img6, alt: "Teacher helping children draw artwork" },
    { id: 7, img: img7, alt: "Kids enjoying classroom time" },
    { id: 8, img: img8, alt: "Children building blocks together" },
    { id: 9, img: img9, alt: "Kids and teacher creative learning time" },
    { id: 10, img: img10, alt: "Playful toddler in kindergarten" },
    { id: 11, img: img11, alt: "Painting and creative activity" },
    { id: 12, img: img12, alt: "Teacher and children study time" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(12);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    //setCurrentPage(0);//
  }, [itemsPerPage]);

  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleImages = galleryImages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className={base}>
      <span className={`${base}__shape ${base}__shape--1`} />
      <span className={`${base}__shape ${base}__shape--2`} />
      <span className={`${base}__shape ${base}__shape--3`} />
      <span className={`${base}__shape ${base}__shape--4`} />
      <span className={`${base}__shape ${base}__shape--5`} />
      <span className={`${base}__shape ${base}__shape--6`} />

      <div className={`${base}__container`}>
        <div className={`${base}__header`}>
          <span className={`${base}__eyebrow`}>Our moments</span>
          <h2 className={`${base}__title`}>Gallery of our classes</h2>
          <p className={`${base}__subtitle`}>
            We provide three classes with nine to twenty children each aged
            twelve months to six years of age.
          </p>
        </div>

        <div className={`${base}__grid`}>
          {visibleImages.map((item, index) => (
            <article
              className={`${base}__card`}
              key={item.id}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`${base}__frame`}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className={`${base}__image`}
                />
              </div>
            </article>
          ))}
        </div>

        {itemsPerPage < 12 && (
          <div className={`${base}__pagination`}>
            <button
              type="button"
              className={`${base}__navBtn`}
              onClick={handlePrev}
              aria-label="Previous page"
            >
              ‹
            </button>

            <div className={`${base}__dots`}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    currentPage === index
                      ? `${base}__dot ${base}__dot--active`
                      : `${base}__dot`
                  }
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={`${base}__navBtn`}
              onClick={handleNext}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoSection;