import React, { useState } from "react";
import "./WhyNews.css";

import img1 from "../../assets/News1.webp";
import img2 from "../../assets/News2.webp";
import img3 from "../../assets/News3.webp";
import img4 from "../../assets/News4.webp";
import img5 from "../../assets/News5.webp";
import img6 from "../../assets/News6.webp";
import { Link } from "react-router-dom";

const WhyNews = () => {

  const base = "why-news";

  const newsData = [
    { id:1, title:"Why is Early Education Essential?", img:img1 },
    { id:2, title:"Ten Reasons Why People Love Education", img:img2 },
    { id:3, title:"Five Easy Ways To Facilitate Education.", img:img3 },
    { id:4, title:"Education Is So Famous, But Why?", img:img4 },
    { id:5, title:"The Modern Rules Of Education.", img:img5 },
    { id:6, title:"The Shocking Revelation of Education.", img:img6 }
  ];

  const [page,setPage] = useState(1);

  const cardsPerPage = 3;

  const lastIndex = page * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  const currentCards = newsData.slice(firstIndex,lastIndex);
  const totalPages = Math.ceil(newsData.length / cardsPerPage);

  const nextPage = () => {
    if(page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if(page > 1) setPage(page - 1);
  };

  return (

    <section className={base}>

      <div className={`${base}__container`}>

        <h2 className={`${base}__heading`}>News</h2>

        <div className={`${base}__wrapper`}>

          {/* LEFT SIDE BUTTON */}
          <button
            className={`${base}__sideBtn ${base}__sideBtnLeft`}
            onClick={prevPage}
          >
            ‹
          </button>

          {/* GRID */}
          <div className={`${base}__grid`}>

            {currentCards.map((item)=>(
              <div className={`${base}__card`} key={item.id}>

                <div className={`${base}__image`}>
                  <img src={item.img} alt={item.title}/>
                </div>

                <div className={`${base}__content`}>

                  <h3>{item.title}</h3>

                  <div className={`${base}__meta`}>
                    <span>📅 10 DEC 2025</span>
                    <span>|</span>
                    <span>👤 BY JONE</span>
                  </div>

                  <p>
                    All the Lorem Ipsum generators on the Internet
                    tend to repeat predefined chunks.
                  </p>

                  <Link to="/news-details" className={`${base}__btn`}>
                    READ MORE
                  </Link>
                  

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE BUTTON */}
          <button
            className={`${base}__sideBtn ${base}__sideBtnRight`}
            onClick={nextPage}
          >
            ›
          </button>

        </div>


        {/* BOTTOM PAGINATION */}

        <div className={`${base}__pagination`}>

          {[...Array(totalPages)].map((_,index)=>(
            <button
              key={index}
              className={page === index+1 ? "active" : ""}
              onClick={()=>setPage(index+1)}
            >
              {index+1}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyNews;