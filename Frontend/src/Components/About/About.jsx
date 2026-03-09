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
            Want the Best Start for Your Child’s Future?
          </h2>

          <p className="about-text">
            Sai Kids Pre School is a trusted Kids Pre School in Bhubaneswar, known for providing a safe, playful, and caring learning environment. As one of the Best and Top Pre Schools in Bhubaneswar, we offer creative learning programs and reliable Day Care in Bhubaneswar, making us a preferred Play School in Bhubaneswar for young children.
          </p>

          <button className="about-btn">Contact Us</button>

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
                At Sai Kids, a trusted Kids Pre School in Bhubaneswar, children learn through fun activities, creativity, and play-based learning that helps them grow with confidence.
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
                Sai Kids offers caring full-day programs and Day Care in Bhubaneswar, making it one of the Best and Top Pre Schools in Bhubaneswar for safe learning and play.
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