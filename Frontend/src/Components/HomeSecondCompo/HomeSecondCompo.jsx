import "./HomeSecondCompo.css";

/* background pattern */
import pattern from "../../assets/bg-pattren1.webp";

/* stars */
import starBlue from "../../assets/blue-star.webp";
import starPink from "../../assets/pink-star.webp";
import starLight from "../../assets/lightpink-star.webp";

/* icons */
import icon1 from "../../assets/home-icon.webp";
import icon2 from "../../assets/home-icon2.webp";
import icon3 from "../../assets/home-icon3.webp";
import icon4 from "../../assets/home-icon4.webp";

/* decoration */
import cloud from "../../assets/blue_cld.png";
import train from "../../assets/train.webp";

const HomeSecondCompo = () => {
  return (
    <section className="home2">

      {/* ===== STATS BAR ===== */}

      <div
        className="home2-stats"
        style={{ backgroundImage: `url(${pattern})` }}
      >

        <div className="home2-stat">
          <h2>8K+</h2>
          <p>Success Stories</p>
        </div>

        <div className="home2-divider" />

        <div className="home2-stat">
          <h2>200+</h2>
          <p>Expert Instructor</p>
        </div>

        <div className="home2-divider" />

        <div className="home2-stat">
          <h2>108K+</h2>
          <p>Worldwide Students</p>
        </div>

        <div className="home2-divider" />

        <div className="home2-stat">
          <h2>310+</h2>
          <p>Trendy Subjects</p>
        </div>

      </div>


      {/* ===== CONTENT ===== */}

      <div className="home2-content">

        <h2 className="home2-title">
          Welcome to Kids Center
        </h2>

        <p className="home2-text">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>

        {/* cloud */}

        <img src={cloud} className="home2-cloud" alt="" />

        {/* icon grid */}

        <div className="home2-icons">

          <div className="home2-item">
            <img src={starBlue} className="home2-star" />
            <img src={icon1} className="home2-icon" />
            <p>To Think Creatively and Create</p>
          </div>

          <div className="home2-item">
            <img src={starPink} className="home2-star" />
            <img src={icon2} className="home2-icon" />
            <p>To Feel Fine and to Understand Emotions</p>
          </div>

          <div className="home2-item">
            <img src={starBlue} className="home2-star" />
            <img src={icon3} className="home2-icon" />
            <p>To be Independent and Active</p>
          </div>

          <div className="home2-item">
            <img src={starLight} className="home2-star" />
            <img src={icon4} className="home2-icon" />
            <p>To Apply Knowledge in Life</p>
          </div>

        </div>

      </div>

      {/* train decoration */}

      <img src={train} className="home2-train" alt="" />

    </section>
  );
};

export default HomeSecondCompo;