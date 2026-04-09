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
          <h2>1K+</h2>
          <p>Success Stories</p>
        </div>

        <div className="home2-divider" />

        <div className="home2-stat">
          <h2>10+</h2>
          <p>Expert Instructor</p>
        </div>

        <div className="home2-divider" />

        <div className="home2-stat">
          <h2>100+</h2>
          <p>Students</p>
        </div>

        <div className="home2-divider" />

        <div className="home2-stat">
          <h2>50+</h2>
          <p>Trendy Subjects</p>
        </div>

      </div>


      {/* ===== CONTENT ===== */}

      <div className="home2-content">

        <h2 className="home2-title">
          Welcome to Sai Kids Pre School
        </h2>

        <p className="home2-text">
          Sai Kids is a trusted Kids Pre School in Bhubaneswar, known as one of the Best Pre Schools in Bhubaneswar, offering fun learning and safe Day Care in Bhubaneswar.
        </p>

        {/* cloud */}

        <img src={cloud} className="home2-cloud" alt="" />

        <div className="home2-section">

        {/* icon grid */}

 <div className="home2-icons">

  <div className="home2-item">
    <div className="home2-img-wrap">
      <img src={starBlue} className="home2-star" />
      <img src={icon1} className="home2-icon" />
    </div>
    <h3>Preschool</h3>
    <p>Sai Kids is a trusted Kids Pre School in Bhubaneswar where children learn and grow through fun activities.</p>
  </div>

  <div className="home2-item">
    <div className="home2-img-wrap">
      <img src={starPink} className="home2-star" />
      <img src={icon2} className="home2-icon" />
    </div>
    <h3>Nursery</h3>
    <p>Our nursery program builds communication and social skills at one of the Best Pre Schools in Bhubaneswar.</p>
  </div>

  <div className="home2-item">
    <div className="home2-img-wrap">
      <img src={starBlue} className="home2-star" />
      <img src={icon3} className="home2-icon" />
    </div>
    <h3>LKG</h3>
    <p>The LKG program encourages independence and early learning at a Top Pre School in Bhubaneswar.</p>
  </div>

  <div className="home2-item">
    <div className="home2-img-wrap">
      <img src={starLight} className="home2-star" />
      <img src={icon4} className="home2-icon" />
    </div>
    <h3>UKG</h3>
    <p>UKG prepares children for primary school at a trusted Play School in Bhubaneswar.</p>
  </div>

  <div className="home2-item">
    <div className="home2-img-wrap">
      <img src={starBlue} className="home2-star" />
      <img src={icon1} className="home2-icon" />
    </div>
    <h3>Day Care</h3>
    <p>We offer safe and caring Day Care in Bhubaneswar for working parents.</p>
  </div>

</div>

      </div>

      {/* train decoration */}

      <img src={train} className="home2-train" alt="" />

      </div>

    </section>
  );
};

export default HomeSecondCompo;