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

      {/* hero content */}
      <div className={`${base}__inner`}>

        {/* TITLE */}
        <h1 className={`${base}__title`}>Classes</h1>

        {/* BREADCRUMB */}
        <div className={`${base}__crumbs`}>
          <span className={`${base}__homeIcon`}>
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path
                d="M12 3.2 3 10.2v10.6c0 .7.6 1.2 1.2 1.2H9v-7h6v7h4.8c.7 0 1.2-.6 1.2-1.2V10.2L12 3.2z"
                fill="currentColor"
              />
            </svg>
          </span>

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
      </div>

    </section>
  );
};

export default ClassesHome;