import React from "react";
import "./Kids.css";

// images
import mainImg from "../../assets/NewsDetails1.webp";
import user1 from "../../assets/Comment1.webp";
import user2 from "../../assets/Comment2.webp";
import user3 from "../../assets/Comment3.webp";

const Kids = () => {

  const base = "kids";

  const comments = [
    {
      id: 1,
      name: "Stacy Poe",
      date: "October 6, 2025 At 7:15 Am",
      img: user1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet."
    },
    {
      id: 2,
      name: "Stacy Poe",
      date: "October 6, 2025 At 7:15 Am",
      img: user2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra dictum justo in vehicula."
    },
    {
      id: 3,
      name: "Stacy Poe",
      date: "October 6, 2025 At 7:15 Am",
      img: user3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum sem felis."
    },
    {
      id: 4,
      name: "Stacy Poe",
      date: "October 6, 2025 At 7:15 Am",
      img: user1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum sem felis."
    }
  ];

  const tags = [
    "Child",
    "Education",
    "Money",
    "Resturent",
    "Child",
    "Education",
    "Money",
    "Resturent"
  ];

  return (
    <section className={base}>
      <div className={`${base}__container`}>

        <div className={`${base}__image`}>
          <img src={mainImg} alt="Kids Activity"/>
        </div>

        <h1 className={`${base}__title`}>
          Asertivelly recaptiualize best profesionally
        </h1>

        <div className={`${base}__meta`}>
          <span>📅 10 DEC 2025</span>
          <span> | </span>
          <span>👤 BY DEMONGO</span>
          <span> | </span>
          <span>💬 0 COMMENTS</span>
        </div>

        <p className={`${base}__text`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className={`${base}__quote`}>
          <div className={`${base}__quoteIcon`}>❝</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <p className={`${base}__text`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <h2 className={`${base}__subTitle`}>
          Funny Kids
        </h2>

        <p className={`${base}__text`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className={`${base}__tags`}>
          {tags.map((tag,index)=>(
            <span key={index} className={`${base}__tag`}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className={`${base}__commentTitle`}>
          8 Comments
        </h3>

        <div className={`${base}__comments`}>
          {comments.map((item)=>(
            <div key={item.id} className={`${base}__comment`}>

              <img src={item.img} alt=""/>

              <div className={`${base}__commentContent`}>
                <h4>{item.name}</h4>

                <span className={`${base}__commentDate`}>
                  {item.date}
                </span>

                <p>{item.text}</p>

                <button className={`${base}__reply`}>
                  REPLY →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Kids;