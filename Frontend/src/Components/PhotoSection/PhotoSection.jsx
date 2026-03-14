import React, { useEffect, useState } from "react";
import "./PhotoSection.css";
import API, { IMAGE_URL } from "../../api/axios";

const PhotoSection = () => {
  const base = "photo-section";

  const [galleryImages, setGalleryImages] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  /* ================= FETCH GALLERY ================= */

  const fetchGallery = async () => {
    try {
      const res = await API.get("/photo-gallery");

      const images = (res.data.data || []).map((item, index) => ({
        id: item._id,
        img: `${IMAGE_URL}${item.image}`,
        alt: `Gallery image ${index + 1}`,
      }));

      setGalleryImages(images);

    } catch (error) {
      console.error("Gallery fetch error:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================= RESPONSIVE ITEMS ================= */

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

  /* ================= PAGINATION ================= */

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