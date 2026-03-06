import React, { useEffect, useMemo, useState } from "react";
import "./OurTeacher.css";

// ✅ teacher images (make sure these files exist in src/assets/)
import t21 from "../../assets/Teacher21.webp";
import t22 from "../../assets/Teacher22.webp";
import t23 from "../../assets/Teacher23.webp";
import t24 from "../../assets/Teacher24.webp";
import t25 from "../../assets/Teacher25.webp";
import t26 from "../../assets/Teacher26.webp";
import t27 from "../../assets/Teacher27.webp";
import t28 from "../../assets/Teacher28.webp";
import t29 from "../../assets/Teacher29.webp";
import t30 from "../../assets/Teacher30.webp";
import t31 from "../../assets/Teacher31.webp";
import t32 from "../../assets/Teacher32.webp";

const OurTeacher = () => {
  // ✅ component base class name
  const base = "our-teacher";

  const teachers = useMemo(
    () => [
      { id: 1, name: "JONE DOE", role: "Teachers", img: t21, bio: "Friendly educator focused on early learning." },
      { id: 2, name: "SARA LEE", role: "Teachers", img: t22, bio: "Creative mentor who makes learning fun." },
      { id: 3, name: "AVA MARTIN", role: "Teachers", img: t23, bio: "Interactive teaching style for confidence." },
      { id: 4, name: "NEHA PATEL", role: "Teachers", img: t24, bio: "Supportive mentor with strong classroom values." },
      { id: 5, name: "EMILY ROSE", role: "Teachers", img: t25, bio: "Encourages curiosity and good habits." },
      { id: 6, name: "ROBERT GREY", role: "Teachers", img: t26, bio: "Explains concepts with real-life examples." },
      { id: 7, name: "SOPHIA LANE", role: "Teachers", img: t27, bio: "Patient, clear and positive teaching style." },
      { id: 8, name: "MIA JAMES", role: "Teachers", img: t28, bio: "Builds teamwork and confidence in students." },
      { id: 9, name: "OLIVIA CHEN", role: "Teachers", img: t29, bio: "Activity-based learning for better understanding." },
      { id: 10, name: "DANIEL SCOTT", role: "Teachers", img: t30, bio: "Strong fundamentals with gentle guidance." },
      { id: 11, name: "GRACE KIM", role: "Teachers", img: t31, bio: "Balances fun and learning in class." },
      { id: 12, name: "NOAH WILSON", role: "Teachers", img: t32, bio: "Progress tracking with student care." },
    ],
    []
  );

  // ✅ Only Mobile pagination (<= 520px)
  const isMobileNow = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 520;
  };

  const [isMobile, setIsMobile] = useState(isMobileNow);
  const [page, setPage] = useState(1);
  const perPageMobile = 4;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => {
      const mobile = isMobileNow();
      setIsMobile(mobile);
      if (!mobile) setPage(1); // reset when going desktop
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Data to show
  const totalPages = Math.max(1, Math.ceil(teachers.length / perPageMobile));
  const start = (page - 1) * perPageMobile;
  const current = isMobile ? teachers.slice(start, start + perPageMobile) : teachers;

  // ✅ modal
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (t) => {
    setActive(t);
    setOpen(true);
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    setActive(null);
    if (typeof document !== "undefined") document.body.style.overflow = "";
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ✅ entrance animation
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setInView(true), 90);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`${base} ${inView ? `${base}--in` : ""}`}>
      {/* ===== ABOUT ===== */}
      <section className={`${base}__about`} aria-label="About the Teachers">
        <div className={`${base}__aboutInner`}>
          <h2 className={`${base}__h2`}>About the Teachers</h2>
          <p className={`${base}__sub`}>
            We have an excellent teacher to child ratio at our Kindergarten to ensure that
            each child receives the attention he or she needs
          </p>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className={`${base}__gridSection`} aria-label="Teachers Grid">
        <div className={`${base}__gridWrap`}>
          <div className={`${base}__grid`}>
            {current.map((t, i) => (
              <button
                key={t.id}
                type="button"
                className={`${base}__card`}
                onClick={() => openModal(t)}
                style={{ animationDelay: `${i * 70}ms` }}
                aria-label={`Open ${t.name}`}
              >
                <div className={`${base}__cloudFrame`}>
                  <img className={`${base}__img`} src={t.img} alt={t.name} />
                </div>

                <div className={`${base}__hover`} aria-hidden="true">
                  <div className={`${base}__hoverInner`}>
                    <div className={`${base}__name`}>{t.name}</div>
                    <div className={`${base}__role`}>{t.role}</div>

                    <div className={`${base}__social`}>
                      <span className={`${base}__icon`} title="Facebook">f</span>
                      <span className={`${base}__icon`} title="Google">G+</span>
                      <span className={`${base}__icon`} title="LinkedIn">in</span>
                      <span className={`${base}__icon`} title="Instagram">◎</span>
                      <span className={`${base}__icon`} title="Twitter">𝕏</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ✅ Pagination ONLY mobile */}
          {isMobile && totalPages > 1 && (
            <div className={`${base}__pager`} aria-label="Pagination">
              <button
                type="button"
                className={`${base}__pageBtn`}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                ‹ Prev
              </button>

              <div className={`${base}__dots`}>
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const n = idx + 1;
                  return (
                    <button
                      key={n}
                      type="button"
                      className={`${base}__dot ${n === page ? `${base}__dot--on` : ""}`}
                      onClick={() => setPage(n)}
                      aria-label={`Page ${n}`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                className={`${base}__pageBtn`}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {open && active && (
        <div className={`${base}__modal`} role="dialog" aria-modal="true">
          <button type="button" className={`${base}__backdrop`} onClick={closeModal} aria-label="Close" />

          <div className={`${base}__modalCard`}>
            <button type="button" className={`${base}__close`} onClick={closeModal} aria-label="Close">
              ✕
            </button>

            <div className={`${base}__modalGrid`}>
              <div className={`${base}__modalMedia`}>
                <div className={`${base}__modalFrame`}>
                  <img className={`${base}__modalImg`} src={active.img} alt={active.name} />
                </div>
              </div>

              <div className={`${base}__modalInfo`}>
                <div className={`${base}__modalName`}>{active.name}</div>
                <div className={`${base}__modalRole`}>{active.role}</div>
                <p className={`${base}__modalBio`}>{active.bio}</p>

                <div className={`${base}__modalSocial`}>
                  <button type="button" className={`${base}__sbtn`}>f</button>
                  <button type="button" className={`${base}__sbtn`}>G+</button>
                  <button type="button" className={`${base}__sbtn`}>in</button>
                  <button type="button" className={`${base}__sbtn`}>◎</button>
                  <button type="button" className={`${base}__sbtn`}>𝕏</button>
                </div>

                <div className={`${base}__hint`}>
                  Tip: press <b>Esc</b> to close.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeacher;