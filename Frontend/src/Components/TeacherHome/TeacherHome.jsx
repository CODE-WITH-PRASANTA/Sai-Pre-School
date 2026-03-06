import React, { useEffect, useState } from "react";
import "./TeacherHome.css";

import patternBg from "../../assets/ClassesHome.webp";
import cloudStrip from "../../assets/ClassesCloud.webp";

const TeacherHome = () => {
  const base = "teacher-home";
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
          <h1 className={`${base}__title`}>Teachers</h1>

          {/* SIMPLE BREADCRUMB */}
          <nav className={`${base}__crumbs`}>
            <span className={`${base}__crumb`}>Home</span>
            <span className={`${base}__sep`}>›</span>
            <span className={`${base}__crumb ${base}__crumb--active`}>
              Teachers
            </span>
          </nav>
        </div>

        {/* cloud */}
        <div className={`${base}__cloudWrap`}>
          <div
            className={`${base}__cloud`}
            style={{ backgroundImage: `url(${cloudStrip})` }}
          />

          <span className={`${base}__puff ${base}__puff--1`} />
          <span className={`${base}__puff ${base}__puff--2`} />
          <span className={`${base}__puff ${base}__puff--3`} />
        </div>

      </section>

      <div className={`${base}__pageSpace`} />
    </div>
  );
};

export default TeacherHome;