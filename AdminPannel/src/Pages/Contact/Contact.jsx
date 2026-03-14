import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Contact.css";
import API from "../../api/axios";

const Contact = () => {
  const base = "contact-page";

  const initialForm = useMemo(
    () => ({
      academyTitle: "Sai Pre School",
      phone: "",
      alternatePhone: "",
      email: "",
      address: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      subscribeTitle: "",
      subscribeEmail: "",
      description: "",
    }),
    []
  );

  const [form, setForm] = useState(initialForm);
  const [contactList, setContactList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const wrapperRef = useRef(null);

  /* ================= FETCH CONTACTS ================= */

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contact");
      setContactList(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* ================= CLOSE DROPDOWN ON OUTSIDE CLICK ================= */

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  /* ================= INPUT CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= RESET FORM ================= */

  const resetForm = () => {
    setForm(initialForm);
    setEditId(null);
  };

  /* ================= SAVE / UPDATE ================= */

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await API.put(`/contact/${editId}`, form);
        alert("Contact updated successfully");
      } else {
        await API.post("/contact", form);
        alert("Contact created successfully");
      }

      fetchContacts();
      resetForm();
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Something went wrong");
    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (item) => {
    setForm({
      academyTitle: item.academyTitle || "",
      phone: item.phone || "",
      alternatePhone: item.alternatePhone || "",
      email: item.email || "",
      address: item.address || "",
      facebook: item.facebook || "",
      instagram: item.instagram || "",
      linkedin: item.linkedin || "",
      youtube: item.youtube || "",
      subscribeTitle: item.subscribeTitle || "",
      subscribeEmail: item.subscribeEmail || "",
      description: item.description || "",
    });

    setEditId(item._id);
    setOpenMenuId(null);
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this contact?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/contact/${id}`);
      fetchContacts();
      setOpenMenuId(null);
      alert("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  /* ================= TOGGLE DROPDOWN ================= */

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={base}>
      <div className={`${base}__container`} ref={wrapperRef}>
        <div className={`${base}__topGrid`}>

          {/* ================= FORM ================= */}

          <div className={`${base}__card`}>
            <form className={`${base}__form`} onSubmit={handleSave}>
              <div className={`${base}__sectionTitle`}>
                Contact Info Fields
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Academy Title</label>
                <input
                  type="text"
                  name="academyTitle"
                  value={form.academyTitle}
                  onChange={handleChange}
                  className={`${base}__input`}
                  placeholder="Enter academy title"
                />
              </div>

              <div className={`${base}__gridTwo`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>

                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Alternate Phone</label>
                  <input
                    type="text"
                    name="alternatePhone"
                    value={form.alternatePhone}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>
              </div>

              <div className={`${base}__gridTwo`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>

                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>
              </div>

              {/* ================= SOCIAL LINKS ================= */}

              <div className={`${base}__sectionTitle`}>Social Link Fields</div>

              <div className={`${base}__gridTwo`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Facebook</label>
                  <input
                    type="text"
                    name="facebook"
                    value={form.facebook}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>

                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Instagram</label>
                  <input
                    type="text"
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>
              </div>

              <div className={`${base}__gridTwo`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>LinkedIn</label>
                  <input
                    type="text"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>

                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>YouTube</label>
                  <input
                    type="text"
                    name="youtube"
                    value={form.youtube}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>
              </div>

              {/* ================= SUBSCRIBE ================= */}

              <div className={`${base}__sectionTitle`}>
                Subscribe / Email Section
              </div>

              <div className={`${base}__gridTwo`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Subscribe Title</label>
                  <input
                    type="text"
                    name="subscribeTitle"
                    value={form.subscribeTitle}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>

                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Subscribe Email</label>
                  <input
                    type="email"
                    name="subscribeEmail"
                    value={form.subscribeEmail}
                    onChange={handleChange}
                    className={`${base}__input`}
                  />
                </div>
              </div>

              {/* ================= DESCRIPTION ================= */}

              <div className={`${base}__sectionTitle`}>
                Contact Description Box
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className={`${base}__textarea`}
                />
              </div>

              <div className={`${base}__btnRow`}>
                <button type="submit" className={`${base}__saveBtn`}>
                  {editId ? "Update Contact" : "Save"}
                </button>

                <button
                  type="button"
                  className={`${base}__clearBtn`}
                  onClick={resetForm}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* ================= LIVE PREVIEW ================= */}

          <div className={`${base}__card`}>
            <div className={`${base}__cardHead`}>
              <h2 className={`${base}__title`}>Live Preview</h2>
            </div>

            <div className={`${base}__preview`}>
              <h3 className={`${base}__previewTitle`}>
                {form.academyTitle || "Sai Pre School"}
              </h3>

              <p className={`${base}__previewText`}>
                {form.description || "Contact description preview"}
              </p>
            </div>
          </div>

        </div>

        {/* ================= CONTACT LIST ================= */}

        <div className={`${base}__card`}>
          <div className={`${base}__cardHead`}>
            <h2 className={`${base}__title`}>Contact List</h2>
          </div>

          <div className={`${base}__tableWrap`}>
            <table className={`${base}__table`}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Subscribe Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {contactList.length > 0 ? (
                  contactList.map((item) => (
                    <tr key={item._id}>
                      <td>{item.academyTitle}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.subscribeEmail || "—"}</td>

                      <td>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No contact data available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;