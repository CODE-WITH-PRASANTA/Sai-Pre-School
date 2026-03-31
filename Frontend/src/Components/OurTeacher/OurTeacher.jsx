import React, { useEffect, useMemo, useState } from "react";
import "./OurTeacher.css";
import API, { IMAGE_URL } from "../../api/axios";

const OurTeacher = () => {
  // ✅ component base class name
  const base = "our-teacher";

  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teachers");
      setTeachers(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

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
  const current = isMobile
    ? teachers.slice(start, start + perPageMobile)
    : teachers;

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [teachers, totalPages, page]);

  // ✅ modal
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (t) => {
    setActive(t);
    setOpen(true);
    if (typeof document !== "undefined")
      document.body.style.overflow = "hidden";
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
            At Sai Kids, a trusted Kids Pre School in Bhubaneswar, our
            experienced and caring teachers guide every child with personal
            attention. This is why many parents choose us as one of the Best and
            Top Pre Schools in Bhubaneswar, offering quality learning and safe
            Day Care in Bhubaneswar.
          </p>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className={`${base}__gridSection`} aria-label="Teachers Grid">
        <div className={`${base}__gridWrap`}>
          <div className={`${base}__grid`}>
            {current.map((t, i) => (
              <button
                key={t._id}
                type="button"
                className={`${base}__card`}
                onClick={() => openModal(t)}
                style={{ animationDelay: `${i * 70}ms` }}
                aria-label={`Open ${t.name}`}
              >
                <div className={`${base}__cloudFrame`}>
                  <img
                    className={`${base}__img`}
                    src={t.image ? `${IMAGE_URL}${t.image}` : "/default.png"}
                    alt={t.name}
                  />
                </div>

                <div className={`${base}__hover`} aria-hidden="true">
                  <div className={`${base}__hoverInner`}>
                    <div className={`${base}__name`}>{t.name}</div>
                    <div className={`${base}__role`}>{t.designation}</div>

                    <div className={`${base}__social`}>
                      <span className={`${base}__icon`} title="Facebook">
                        f
                      </span>
                      <span className={`${base}__icon`} title="Google">
                        G+
                      </span>
                      <span className={`${base}__icon`} title="LinkedIn">
                        in
                      </span>
                      <span className={`${base}__icon`} title="Instagram">
                        ◎
                      </span>
                      <span className={`${base}__icon`} title="Twitter">
                        𝕏
                      </span>
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
          <button
            type="button"
            className={`${base}__backdrop`}
            onClick={closeModal}
            aria-label="Close"
          />

          <div className={`${base}__modalCard`}>
            <button
              type="button"
              className={`${base}__close`}
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <div className={`${base}__modalGrid`}>
              <div className={`${base}__modalMedia`}>
                <div className={`${base}__modalFrame`}>
                  <img
                    className={`${base}__modalImg`}
                    src={`${IMAGE_URL}${active.image}`}
                    alt={active.name}
                  />
                </div>
              </div>

              <div className={`${base}__modalInfo`}>
                <div className={`${base}__modalName`}>{active.name}</div>
                <div className={`${base}__modalRole`}>{active.designation}</div>

                <p className={`${base}__modalBio`}>
                  Experienced teacher dedicated to student success.
                </p>

                <div className={`${base}__modalSocial`}>
                  <button type="button" className={`${base}__sbtn`}>
                    f
                  </button>
                  <button type="button" className={`${base}__sbtn`}>
                    G+
                  </button>
                  <button type="button" className={`${base}__sbtn`}>
                    in
                  </button>
                  <button type="button" className={`${base}__sbtn`}>
                    ◎
                  </button>
                  <button type="button" className={`${base}__sbtn`}>
                    𝕏
                  </button>
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
