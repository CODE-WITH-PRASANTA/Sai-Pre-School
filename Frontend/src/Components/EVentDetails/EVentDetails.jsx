// EVentDetails.jsx
import React, { useMemo, useState } from "react";
import "./EVentDetails.css";

// ✅ import 6 images (PUT your exact file names here)
import e1 from "../../assets/event1.webp";
import e2 from "../../assets/event2.webp";
import e3 from "../../assets/event3.webp";
import e4 from "../../assets/event4.webp";
import e5 from "../../assets/event5.webp";
import e6 from "../../assets/event6.webp";

const EVentDetails = () => {
  // ✅ component base class name
  const base = "event-details";

  // ✅ 3 pages on one page + pagination (4 cards per page)
  const allEvents = useMemo(
    () => [
      // ===== PAGE 1 (4 cards) =====
      {
        id: 1,
        day: "05",
        month: "JULY",
        title: "Business Conferences 2025",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e1,
      },
      {
        id: 2,
        day: "27",
        month: "JULY",
        title: "5 Outrageous Ideas For You",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e2,
      },
      {
        id: 3,
        day: "25",
        month: "JULY",
        title: "Seven Latest Developments",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e3,
      },
      {
        id: 4,
        day: "03",
        month: "JULY",
        title: "Five Mind Numbing Facts About",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e4,
      },

      // ===== PAGE 2 (4 cards) =====
      {
        id: 5,
        day: "19",
        month: "JULY",
        title: "Five Ways To Introduce",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e5,
      },
      {
        id: 6,
        day: "17",
        month: "JULY",
        title: "Ten Things To Know About",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e6,
      },
      {
        id: 7,
        day: "11",
        month: "JULY",
        title: "Ways To Make It Better",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e1,
      },
      {
        id: 8,
        day: "29",
        month: "JULY",
        title: "What’s New This Weekend",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e2,
      },

      // ===== PAGE 3 (4 cards) =====
      {
        id: 9,
        day: "01",
        month: "AUG",
        title: "Best Moments Of The Year",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e3,
      },
      {
        id: 10,
        day: "06",
        month: "AUG",
        title: "How To Plan Like A Pro",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e4,
      },
      {
        id: 11,
        day: "14",
        month: "AUG",
        title: "Things You Must Try",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e5,
      },
      {
        id: 12,
        day: "22",
        month: "AUG",
        title: "A Guide For Beginners",
        place: "89 NEWYORK CITY.",
        desc:
          "Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.",
        img: e6,
      },
    ],
    []
  );

  const pageSize = 4;
  const totalPages = Math.ceil(allEvents.length / pageSize);
  const [page, setPage] = useState(1);

  const current = useMemo(() => {
    const start = (page - 1) * pageSize;
    return allEvents.slice(start, start + pageSize);
  }, [allEvents, page]);

  const go = (p) => setPage(Math.min(totalPages, Math.max(1, p)));

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__grid`}>
          {current.map((e) => (
            <article key={e.id} className={`${base}__card`}>
              <div className={`${base}__imgWrap`}>
                <img className={`${base}__img`} src={e.img} alt={e.title} />
              </div>

              <div className={`${base}__body`}>
                {/* date badge */}
                <div className={`${base}__date`}>
                  <div className={`${base}__day`}>{e.day}</div>
                  <div className={`${base}__month`}>{e.month}</div>
                </div>

                <h3 className={`${base}__title`}>{e.title}</h3>

                <div className={`${base}__place`}>
                  <span className={`${base}__pin`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.2c-1.2 0-2.2-1-2.2-2.2S10.8 6.8 12 6.8s2.2 1 2.2 2.2S13.2 11.2 12 11.2z"
                      />
                    </svg>
                  </span>
                  <span>{e.place}</span>
                </div>

                <p className={`${base}__desc`}>{e.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* pagination */}
        <div className={`${base}__pager`}>
          <button
            className={`${base}__pgBtn`}
            onClick={() => go(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <div className={`${base}__pgNums`}>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <button
                  key={n}
                  className={`${base}__pgNum ${active ? `${base}__pgNum--active` : ""}`}
                  onClick={() => go(n)}
                >
                  {n}
                </button>
              );
            })}
          </div>

          <button
            className={`${base}__pgBtn`}
            onClick={() => go(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default EVentDetails;