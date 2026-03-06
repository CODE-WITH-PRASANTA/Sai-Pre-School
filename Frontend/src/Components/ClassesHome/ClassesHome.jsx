import React, { useEffect, useState } from "react";
import "./ClassesHome.css";

import patternBg from "../../assets/ClassesHome.webp";
import cloudImg from "../../assets/ClassesCloud.webp";

const ClassesHome = () => {
  const base = "classes-home";
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`${base} ${inView ? `${base}--in` : ""}`}>
      {/* background pattern */}
      <div
        className={`${base}__bg`}
        style={{ backgroundImage: `url(${patternBg})` }}
      />

      {/* blue overlay */}
      <div className={`${base}__overlay`} />

      {/* floating blobs */}
      <span className={`${base}__blob ${base}__blob--1`} />
      <span className={`${base}__blob ${base}__blob--2`} />
      <span className={`${base}__blob ${base}__blob--3`} />

      {/* hero content */}
      <div className={`${base}__inner`}>
        <h1 className={`${base}__title`}>Classes</h1>

        <div className={`${base}__crumbs`}>
          <span className={`${base}__crumb`}>Home</span>
          <span className={`${base}__sep`}>›</span>
          <span className={`${base}__crumb ${base}__crumb--active`}>
            Classes
          </span>
        </div>
      </div>

      {/* floating cloud */}
      <div className={`${base}__cloudWrap`}>
        <div
          className={`${base}__cloud`}
          style={{ backgroundImage: `url(${cloudImg})` }}
        />

        {/* bubbles */}
        <span className={`${base}__puff ${base}__puff--1`} />
        <span className={`${base}__puff ${base}__puff--2`} />
        <span className={`${base}__puff ${base}__puff--3`} />
      </div>
    </section>
  );
};

export default ClassesHome;