import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FloatingForm.css";

const FloatingForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  /* Auto open after 5 seconds */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  /* Close form */

  const closeForm = () => {
    setShowForm(false);
    localStorage.setItem("saiFormClosed", "true");
  };

  /* Input change */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Form submit */

  const floatingformSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Enquiry Submitted Successfully!");

      setLoading(false);

      setFormData({
        name: "",
        address: "",
        phone: "",
        message: "",
      });

      closeForm();
    }, 1200);
  };

  if (!showForm) return null;

  return (
    <div className="sai-floating-overlay">
      <div className="sai-floating-container">
        {/* Close Button */}

        <button className="sai-floating-close" onClick={closeForm}>
          ×
        </button>

        {/* Header */}

        <div className="sai-floating-header">
          <h2>Sai Pre School</h2>
          <span>Admission & Enquiry Form</span>
        </div>

        <p className="sai-floating-info">
          Give your child the best start in life. Fill the form and our team
          will contact you shortly.
        </p>

        {/* Form */}

        <form className="sai-floating-form" onSubmit={floatingformSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Parent / Student Name"
            className="sai-floating-input"
            required
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address / City"
            className="sai-floating-input"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            maxLength="10"
            className="sai-floating-input"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="3"
            className="sai-floating-textarea"
            required
          />

          <button
            type="submit"
            className="sai-floating-submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

        {/* Divider */}

        <div className="sai-floating-divider">
          <span>OR</span>
        </div>

        {/* Contact Buttons */}

        <div className="sai-floating-actions">
          <a href="tel:7014627894" className="sai-floating-btn call">
            <FaPhoneAlt />
            Call Us
          </a>

          <a
            href="https://wa.me/919887868746"
            target="_blank"
            rel="noopener noreferrer"
            className="sai-floating-btn whatsapp"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingForm;
