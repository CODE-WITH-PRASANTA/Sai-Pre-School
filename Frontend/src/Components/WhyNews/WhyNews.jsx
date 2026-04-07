import React, { useState, useEffect } from "react";
import "./WhyNews.css";
import { Link } from "react-router-dom";
import API, { IMAGE_URL } from "../../api/axios";

const WhyNews = () => {
  const base = "why-news";

  const [newsData, setNewsData] = useState([]); // 🔥 dynamic data
  const [page, setPage] = useState(1);

  const cardsPerPage = 3;

  /* ================= FETCH NEWS ================= */
  const fetchNews = async () => {
    try {
      const res = await API.get("/news");
      setNewsData(res.data.data || []);
    } catch (error) {
      console.log("Fetch news error:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  /* ================= PAGINATION ================= */
  const lastIndex = page * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  const currentCards = newsData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(newsData.length / cardsPerPage);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <h2 className={`${base}__heading`}>News</h2>

        <div className={`${base}__wrapper`}>
          {/* LEFT BUTTON */}
          <button
            className={`${base}__sideBtn ${base}__sideBtnLeft`}
            onClick={prevPage}
          >
            ‹
          </button>

          {/* GRID */}
          <div className={`${base}__grid`}>
            {currentCards.map((item) => (
              <div className={`${base}__card`} key={item._id}>
                <div className={`${base}__image`}>
                  <img
                    src={
                      item.image
                        ? `${IMAGE_URL}${item.image}`
                        : "https://via.placeholder.com/300"
                    }
                    alt={item.title}
                  />
                </div>

                <div className={`${base}__content`}>
                  <h3>{item.title}</h3>

                  <div className={`${base}__meta`}>
                    <span>
                      📅{" "}
                      {item.date
                        ? new Date(item.date).toLocaleDateString()
                        : "N/A"}
                    </span>
                    <span>|</span>
                    <span>👤 {item.author || "Admin"}</span>
                  </div>

                  <p>
                    {item.description
                      ? item.description.slice(0, 80) + "..."
                      : "No description available"}
                  </p>

                  <Link
                    to={`/news-details/${item._id}`} // 🔥 dynamic route
                    className={`${base}__btn`}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            className={`${base}__sideBtn ${base}__sideBtnRight`}
            onClick={nextPage}
          >
            ›
          </button>
        </div>

        {/* PAGINATION */}
        <div className={`${base}__pagination`}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={page === index + 1 ? "active" : ""}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNews;