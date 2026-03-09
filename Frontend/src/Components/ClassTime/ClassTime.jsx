import React, { useMemo, useState } from "react";
import "./ClassTime.css";

// ✅ import your 3rd to 8th images (photo1 to photo6)
import img1 from "../../assets/photo1.webp";
import img2 from "../../assets/photo2.webp";
import img3 from "../../assets/photo3.webp";
import img4 from "../../assets/photo4.webp";
import img5 from "../../assets/photo5.webp";
import img6 from "../../assets/photo6.webp";

const ClassTime = () => {
  // ✅ component base class name
  const base = "class-time";

  // ✅ pagination settings
  const PER_PAGE = 3; // show 3 cards per page (same like your screenshot: 3 top)
  const [page, setPage] = useState(1);

  const cards = useMemo(
    () => [
      {
        id: 1,
        img: img1,
        time: "08:00 am - 10:00 am",
        title: "Art Drawing Classes",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.",
      },
      {
        id: 2,
        img: img2,
        time: "08:00 am - 10:00 am",
        title: "The Answer To Everything.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.",
      },
      {
        id: 3,
        img: img3,
        time: "08:00 am - 10:00 am",
        title: "The Miracle Of Education.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.",
      },
      {
        id: 4,
        img: img4,
        time: "08:00 am - 10:00 am",
        title: "Ten Things To Know About",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.",
      },
      {
        id: 5,
        img: img5,
        time: "08:00 am - 10:00 am",
        title: "The Story Of Education",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.",
      },
      {
        id: 6,
        img: img6,
        time: "08:00 am - 10:00 am",
        title: "The Shocking Revelation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.",
      },
    ],
    []
  );

  // ✅ pagination calculations
  const totalPages = Math.ceil(cards.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleCards = cards.slice(start, start + PER_PAGE);

  const goTo = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    // optional: smooth scroll to top of section
    document.querySelector(`.${base}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={base} aria-label="Class Time Page">
      {/* decorative background */}
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

                {/* ✅ yellow time bar */}
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
                    <div className={`${base}__statValue`}>30 - 40</div>
                  </div>

                  <div className={`${base}__stat ${base}__stat--green`}>
                    <div className={`${base}__statLabel`}>Years Old</div>
                    <div className={`${base}__statValue`}>5 - 6</div>
                  </div>

                  <div className={`${base}__stat ${base}__stat--orange`}>
                    <div className={`${base}__statLabel`}>Tution Fee</div>
                    <div className={`${base}__statValue`}>$1500</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ Pagination */}
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
                    className={`${base}__pageNum ${active ? `${base}__pageNum--active` : ""}`}
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