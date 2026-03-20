import React, { useMemo, useState, useEffect } from "react";
import "./ClassTime.css";
import API, { IMAGE_URL } from "../../api/axios";

const ClassTime = () => {
  const base = "class-time";

  const PER_PAGE = 3;
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);

  /* ================= FETCH CLASSES ================= */

  const fetchClasses = async () => {
    try {
      const res = await API.get("/classes");

      const data = (res.data.data || []).map((item) => ({
        id: item._id,
        img: item.image ? `${IMAGE_URL}${item.image}` : "",
        time: item.classTime,
        title: item.className,
        desc: item.description,
        classSize: item.classSize,
        yearsOld: item.yearsOld,
        tuitionFees: item.tuitionFees,
      }));

      setCards(data);
    } catch (error) {
      console.error("Fetch classes error:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  /* ================= PAGINATION ================= */

  const totalPages = Math.ceil(cards.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleCards = cards.slice(start, start + PER_PAGE);

  const goTo = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);

    document
      .querySelector(`.${base}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={base} aria-label="Class Time Page">
      <div className={`${base}__bg`} aria-hidden="true" />

      <div className={`${base}__container`}>

          {/* ✅ Heading Added */}
        <div className={`${base}__heading`}>
          <h2>Classes</h2>
        </div>
        
        <div className={`${base}__grid`}>
          {visibleCards.map((c) => (
            <article className={`${base}__card`} key={c.id}>
              <div className={`${base}__media`}>
                <img className={`${base}__img`} src={c.img} alt={c.title} />

                <div className={`${base}__timeBar`}>
                  <span className={`${base}__timeText`}>
                    <b>Class Time:</b> {c.time}
                  </span>
                </div>
              </div>

              <div className={`${base}__body`}>
                <h3 className={`${base}__title`}>{c.title}</h3>
                <p className={`${base}__desc`}>{c.desc}</p>

                <div className={`${base}__stats`}>
                  <div className={`${base}__stat ${base}__stat--blue`}>
                    <div className={`${base}__statLabel`}>Class Size</div>
                    <div className={`${base}__statValue`}>{c.classSize}</div>
                  </div>

                  <div className={`${base}__stat ${base}__stat--green`}>
                    <div className={`${base}__statLabel`}>Years Old</div>
                    <div className={`${base}__statValue`}>{c.yearsOld}</div>
                  </div>

                  <div className={`${base}__stat ${base}__stat--orange`}>
                    <div className={`${base}__statLabel`}>Tution Fee</div>
                    <div className={`${base}__statValue`}>₹{c.tuitionFees}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}

        {totalPages > 1 && (
          <div className={`${base}__pagination`} aria-label="Pagination">
            <button
              className={`${base}__pageBtn`}
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              type="button"
            >
              Prev
            </button>

            <div className={`${base}__pageNums`}>
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const active = p === page;
                return (
                  <button
                    key={p}
                    className={`${base}__pageNum ${
                      active ? `${base}__pageNum--active` : ""
                    }`}
                    onClick={() => goTo(p)}
                    type="button"
                    aria-current={active ? "page" : undefined}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <button
              className={`${base}__pageBtn`}
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              type="button"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassTime;