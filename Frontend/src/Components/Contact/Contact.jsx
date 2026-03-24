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
                <p>91786 81922</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon address" />
              <div>
                <h4>Address</h4>
                <p>Plot No.: 526, Haridaspur, Naharkanta,</p>
                <p>Bhubaneswar</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon email" />
              <div>
                <h4>Email</h4>
                <p>preschoolsaikids@gmail.com</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form">

            <h2>Contact Me</h2>

            <p className="contact-desc">
              Contact Sai Kids Pre School, a trusted Kids Pre School in Bhubaneswar, offering quality early education and safe Day Care in Bhubaneswar.
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
  src="https://maps.google.com/maps?q=Plot%20No.%20526,%20Haridaspur,%20Naharkanta,%20Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed"
  loading="lazy"
></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contact;