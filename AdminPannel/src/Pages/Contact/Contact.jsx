import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const base = "contact-page";

  const initialForm = useMemo(
    () => ({
      academyTitle: "Umang Academy",
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
  const [contactList, setContactList] = useState([
    {
      id: 1,
      academyTitle: "Umang Academy",
      phone: "+91 9876543210",
      alternatePhone: "+91 9123456780",
      email: "info@umangacademy.com",
      address: "Mumbai, Maharashtra",
      facebook: "facebook.com/umangacademy",
      instagram: "instagram.com/umangacademy",
      linkedin: "linkedin.com/company/umangacademy",
      youtube: "youtube.com/@umangacademy",
      subscribeTitle: "Subscribe For Updates",
      subscribeEmail: "subscribe@umangacademy.com",
      description:
        "Umang Academy provides quality education with a modern, caring, and inspiring learning environment for every student.",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const actionRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (actionRef.current && !actionRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditId(null);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      !form.academyTitle.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.address.trim() ||
      !form.description.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editId) {
      setContactList((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...form, id: editId } : item
        )
      );
    } else {
      const newItem = {
        id: Date.now(),
        ...form,
      };
      setContactList((prev) => [newItem, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setForm({
      academyTitle: item.academyTitle,
      phone: item.phone,
      alternatePhone: item.alternatePhone,
      email: item.email,
      address: item.address,
      facebook: item.facebook,
      instagram: item.instagram,
      linkedin: item.linkedin,
      youtube: item.youtube,
      subscribeTitle: item.subscribeTitle,
      subscribeEmail: item.subscribeEmail,
      description: item.description,
    });
    setEditId(item.id);
    setOpenMenuId(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete this contact?");
    if (!confirmDelete) return;

    setContactList((prev) => prev.filter((item) => item.id !== id));

    if (editId === id) {
      resetForm();
    }

    setOpenMenuId(null);
  };

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topGrid`}>
          {/* LEFT FORM BOX */}
          <div className={`${base}__card`}>
            <form className={`${base}__form`} onSubmit={handleSave}>
              <div className={`${base}__sectionTitle`}>Academy Title</div>
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

              <div className={`${base}__sectionTitle`}>Contact Info Fields</div>
              <div className={`${base}__gridTwo`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${base}__input`}
                    placeholder="Enter phone number"
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
                    placeholder="Enter alternate phone"
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
                    placeholder="Enter email"
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
                    placeholder="Enter address"
                  />
                </div>
              </div>

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
                    placeholder="Enter Facebook link"
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
                    placeholder="Enter Instagram link"
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
                    placeholder="Enter LinkedIn link"
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
                    placeholder="Enter YouTube link"
                  />
                </div>
              </div>

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
                    placeholder="Enter subscribe title"
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
                    placeholder="Enter subscribe email"
                  />
                </div>
              </div>

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
                  placeholder="Enter contact description"
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

          {/* RIGHT LIVE PREVIEW BOX */}
          <div className={`${base}__card`}>
            <div className={`${base}__cardHead`}>
              <h2 className={`${base}__title`}>Live Preview</h2>
              <p className={`${base}__subtitle`}>
                Preview the contact box before saving
              </p>
            </div>

            <div className={`${base}__preview`}>
              <div className={`${base}__previewHead`}>
                <h3 className={`${base}__previewTitle`}>
                  {form.academyTitle || "Umang Academy"}
                </h3>
                <p className={`${base}__previewText`}>
                  {form.description ||
                    "Contact description preview will appear here."}
                </p>
              </div>

              <div className={`${base}__previewBlock`}>
                <div className={`${base}__previewLabel`}>Contact Info</div>
                <ul className={`${base}__previewList`}>
                  <li>
                    <span>Phone:</span> {form.phone || "—"}
                  </li>
                  <li>
                    <span>Alternate:</span> {form.alternatePhone || "—"}
                  </li>
                  <li>
                    <span>Email:</span> {form.email || "—"}
                  </li>
                  <li>
                    <span>Address:</span> {form.address || "—"}
                  </li>
                </ul>
              </div>

              <div className={`${base}__previewBlock`}>
                <div className={`${base}__previewLabel`}>Social Links</div>
                <ul className={`${base}__previewList`}>
                  <li>
                    <span>Facebook:</span> {form.facebook || "—"}
                  </li>
                  <li>
                    <span>Instagram:</span> {form.instagram || "—"}
                  </li>
                  <li>
                    <span>LinkedIn:</span> {form.linkedin || "—"}
                  </li>
                  <li>
                    <span>YouTube:</span> {form.youtube || "—"}
                  </li>
                </ul>
              </div>

              <div className={`${base}__previewBlock`}>
                <div className={`${base}__previewLabel`}>
                  Subscribe / Email Section
                </div>
                <ul className={`${base}__previewList`}>
                  <li>
                    <span>Title:</span> {form.subscribeTitle || "—"}
                  </li>
                  <li>
                    <span>Email:</span> {form.subscribeEmail || "—"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT LIST */}
        <div className={`${base}__card`}>
          <div className={`${base}__cardHead ${base}__cardHead--table`}>
            <div>
              <h2 className={`${base}__title`}>Contact List</h2>
              <p className={`${base}__subtitle`}>
                Manage saved contact boxes here
              </p>
            </div>

            <div className={`${base}__badge`}>
              Total Records: {contactList.length}
            </div>
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
                    <tr key={item.id}>
                      <td>{item.academyTitle}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.subscribeEmail || "—"}</td>
                      <td>
                        <div className={`${base}__actionWrap`} ref={actionRef}>
                          <button
                            type="button"
                            className={`${base}__actionBtn`}
                            onClick={() => toggleMenu(item.id)}
                          >
                            Action
                            <span className={`${base}__actionCaret`}>▾</span>
                          </button>

                          {openMenuId === item.id && (
                            <div className={`${base}__dropdown`}>
                              <button
                                type="button"
                                className={`${base}__dropdownItem`}
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                className={`${base}__dropdownItem} ${base}__dropdownItem--danger`}
                                onClick={() => handleDelete(item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className={`${base}__empty`}>
                      No contact data available.
                    </td>
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