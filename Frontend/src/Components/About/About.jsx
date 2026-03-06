import "./About.css";

/* images */
import bird from "../../assets/bird-about.png";
import starBlue from "../../assets/blue-star.webp";
import starPink from "../../assets/lightpink-star.webp";
import icon1 from "../../assets/icon1-about.png";
import icon2 from "../../assets/icon2-about.png";
import train from "../../assets/train.webp";

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT CONTENT */}

        <div className="about-left">

          <h2 className="about-title">
            Do you dream that your child will become intelligent?
          </h2>

          <p className="about-text">
            The concept of school and pre-school education consists of 3 programs
            of development and training in our academy
          </p>

          <button className="about-btn">Learn More</button>

        </div>


        {/* CENTER BIRD */}

        <div className="about-bird-wrap">
          <img src={bird} alt="" className="about-bird" />
        </div>


        {/* RIGHT CARDS */}

        <div className="about-cards">

          {/* CARD 1 */}

          <div className="about-card about-card-yellow">

            <div className="about-card-icon">
              <img src={starBlue} className="about-star" />
              <img src={icon1} className="about-icon" />
            </div>

            <div>
              <h3>Active Learning</h3>
              <p>
                The concept of school and pre-school education consists of
                3 programs of
              </p>
            </div>

          </div>


          {/* CARD 2 */}

          <div className="about-card about-card-pink">

            <div className="about-card-icon">
              <img src={starPink} className="about-star" />
              <img src={icon2} className="about-icon" />
            </div>

            <div>
              <h3>Full Day Programs</h3>
              <p>
                The concept of school and pre-school education consists of
                3 programs of
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* TRAIN */}

      <img src={train} className="about-train" alt="" />

    </section>
  );
};

export default About;