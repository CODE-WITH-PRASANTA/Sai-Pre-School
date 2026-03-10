import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          {/* Contact Info */}
          <div className="contact-info">

            <div className="info-box">
              <FaPhoneAlt className="icon phone" />
              <div>
                <h4>Phone</h4>
                <p>(+032) 3456 7890</p>
                <p>(+032) 3427 7670</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon address" />
              <div>
                <h4>Address</h4>
                <p>Spring Store London Oxford Street</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon email" />
              <div>
                <h4>Email</h4>
                <p>example@email.com</p>
                <p>info@email.com</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form">

            <h2>Contact Me</h2>

            <p className="contact-desc">
              Meh synth Schlitz, tempor duis single-origin coffee ea next
              level ethnic fingerstache fanny pack nostrud.
            </p>

            <form>

              <div className="input-row">
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Your Email Address" />
              </div>

              <input type="text" placeholder="Phone" />

              <textarea
                rows="6"
                placeholder="Your message here"
              ></textarea>

              <button type="submit">SEND MESSAGE</button>

            </form>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-right">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contact;