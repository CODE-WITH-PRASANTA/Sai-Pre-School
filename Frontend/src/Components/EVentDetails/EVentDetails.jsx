// EVentDetails.jsx
import React, { useMemo, useState, useEffect } from "react";
import "./EVentDetails.css";
import API, { IMAGE_URL } from "../../api/axios";

const EVentDetails = () => {
  const base = "event-details";

  const [allEvents, setAllEvents] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 2;

  /* =========================
     FETCH EVENTS FROM BACKEND
  ========================= */

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");

      setAllEvents(res.data.data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const totalPages = Math.ceil((allEvents?.length || 0) / pageSize);

  const current = useMemo(() => {
    const start = (page - 1) * pageSize;
    return Array.isArray(allEvents)
      ? allEvents.slice(start, start + pageSize)
      : [];
  }, [allEvents, page]);

  const go = (p) => setPage(Math.min(totalPages, Math.max(1, p)));

  return (
    <section className={base}>
      <div className={`${base}__container`}>

        {/* ================= EVENTS HEADING ================= */}

        <div className={`${base}__heading`}>
          <h2 className={`${base}__headingTitle`}>Our Events</h2>
          <p className={`${base}__headingText`}>
            Explore our exciting school events where children learn, celebrate,
            and grow through fun activities, cultural programs, and educational
            experiences.
          </p>
        </div>

        {/* ================= EVENTS GRID ================= */}

        <div className={`${base}__grid`}>
          {current.map((e) => {
            const date = new Date(e.date || e.createdAt);
            const day = date.getDate();
            const month = date
              .toLocaleString("default", { month: "short" })
              .toUpperCase();

            return (
              <article key={e._id} className={`${base}__card`}>
                <div className={`${base}__imgWrap`}>
                  <img
                    className={`${base}__img`}
                    src={
                      e.image ? `${IMAGE_URL}${e.image}` : "/placeholder.png"
                    }
                    alt={e.title}
                  />
                </div>

                <div className={`${base}__body`}>
                  <div className={`${base}__date`}>
                    <div className={`${base}__day`}>{day}</div>
                    <div className={`${base}__month`}>{month}</div>
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
                    <span>{e.location}</span>
                  </div>

                  <p className={`${base}__desc`}>{e.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= PAGINATION ================= */}

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
                  className={`${base}__pgNum ${
                    active ? `${base}__pgNum--active` : ""
                  }`}
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
