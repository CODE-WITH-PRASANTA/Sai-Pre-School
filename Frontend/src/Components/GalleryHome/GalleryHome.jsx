// GalleryHome.jsx
import React, { useEffect, useState } from "react";
import "./GalleryHome.css";

import patternBg from "../../assets/ClassesHome.webp";
import cloudStrip from "../../assets/ClassesCloud.webp";

const GalleryHome = () => {
  const base = "gallery-home";
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={base}>
      <section className={`${base}__hero ${inView ? `${base}__hero--in` : ""}`}>
        {/* background */}
        <div
          className={`${base}__bg`}
          style={{ backgroundImage: `url(${patternBg})` }}
        />

        {/* overlay */}
        <div className={`${base}__overlay`} />

        {/* floating blobs */}
        <span className={`${base}__blob ${base}__blob--1`} />
        <span className={`${base}__blob ${base}__blob--2`} />
        <span className={`${base}__blob ${base}__blob--3`} />

        {/* content */}
        <div className={`${base}__inner`}>
          <h1 className={`${base}__title`}>Gallery Grid</h1>

          <nav className={`${base}__crumbs`} aria-label="Breadcrumb">
            <span className={`${base}__crumb`}>Home</span>
            <span className={`${base}__sep`} aria-hidden="true">
              ›
            </span>
            <span className={`${base}__crumb ${base}__crumb--active`}>
              Gallery Grid
            </span>
          </nav>
        </div>

        {/* ✅ SINGLE CLOUD ONLY */}
        <div className={`${base}__cloudWrap`}>
          <div
            className={`${base}__cloud`}
            style={{ backgroundImage: `url(${cloudStrip})` }}
          />

          {/* bubbles */}
          <span className={`${base}__puff ${base}__puff--1`} />
          <span className={`${base}__puff ${base}__puff--2`} />
          <span className={`${base}__puff ${base}__puff--3`} />
        </div>
      </section>

      {/* demo space remove if not needed */}
      <div className={`${base}__pageSpace`} />
    </div>
  );
};

export default GalleryHome;