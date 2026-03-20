import React, { useMemo, useState, useEffect } from "react";
import "./Classes.css";
import API, { IMAGE_URL } from "../../api/axios";

const Classes = () => {

  const base = "classes-page";

  const initialForm = useMemo(() => ({
    className: "",
    classTime: "",
    classSize: "",
    yearsOld: "",
    tuitionFees: "",
    description: "",
    image: null,
    existingImage: ""
  }), []);

  const [form, setForm] = useState(initialForm);
  const [classesData, setClassesData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  /* ================= IMAGE SELECT ================= */

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setForm(prev => ({
      ...prev,
      image: file,
      existingImage: ""
    }));

  };

  /* ================= FETCH CLASSES ================= */

  const fetchClasses = async () => {

    try {

      const res = await API.get("/classes");

      setClassesData(res.data.data || []);

    } catch (error) {

      console.error("Fetch classes error:", error);

    }

  };

  useEffect(() => {

    fetchClasses();

  }, []);

  /* ================= FORM CHANGE ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));

  };

  /* ================= RESET ================= */

  const resetForm = () => {

    setForm(initialForm);
    setEditId(null);

  };

  /* ================= SAVE / UPDATE ================= */

  const handleSave = async (e) => {

    e.preventDefault();

    if (
      !form.className.trim() ||
      !form.classTime.trim() ||
      !form.classSize ||
      !form.yearsOld.trim() ||
      !form.tuitionFees
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      const formData = new FormData();

      formData.append("className", form.className);
      formData.append("classTime", form.classTime);
      formData.append("classSize", form.classSize);
      formData.append("yearsOld", form.yearsOld);
      formData.append("tuitionFees", form.tuitionFees);
      formData.append("description", form.description);

      if (form.image) {
        formData.append("image", form.image);
      }

      if (editId) {

        await API.put(`/classes/${editId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

      } else {

        await API.post("/classes", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

      }

      fetchClasses();
      resetForm();

    } catch (error) {

      console.error("Save class error:", error);

    }

  };

  /* ================= EDIT ================= */

  const handleEdit = (item) => {

    setForm({
      className: item.className,
      classTime: item.classTime,
      classSize: item.classSize,
      yearsOld: item.yearsOld,
      tuitionFees: item.tuitionFees,
      description: item.description || "",
      image: null,
      existingImage: item.image || ""
    });

    setEditId(item._id);
    setOpenMenuId(null);

  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm("Do you want to delete this class?");

    if (!confirmDelete) return;

    try {

      await API.delete(`/classes/${id}`);

      fetchClasses();

      if (editId === id) resetForm();

    } catch (error) {

      console.error("Delete class error:", error);

    }

    setOpenMenuId(null);

  };

  /* ================= DROPDOWN ================= */

  const toggleMenu = (id) => {

    setOpenMenuId(prev => prev === id ? null : id);

  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>

        {/* TOP GRID */}
        <div className={`${base}__topGrid`}>

          {/* FORM */}
          <div className={`${base}__card`}>

            <div className={`${base}__cardHead`}>
              <h2 className={`${base}__title`}>
                {editId ? "Update Class" : "Add New Class"}
              </h2>
              <p className={`${base}__subtitle`}>
                Create class details using the form below
              </p>
            </div>

            <form className={`${base}__form`} onSubmit={handleSave}>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Class Name</label>
                <input
                  type="text"
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                  className={`${base}__input`}
                />
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Class Time</label>
                <input
                  type="text"
                  name="classTime"
                  value={form.classTime}
                  onChange={handleChange}
                  className={`${base}__input`}
                />
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Class Size</label>
                <input
                  type="number"
                  name="classSize"
                  value={form.classSize}
                  onChange={handleChange}
                  className={`${base}__input`}
                />
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Years Old</label>
                <input
                  type="text"
                  name="yearsOld"
                  value={form.yearsOld}
                  onChange={handleChange}
                  className={`${base}__input`}
                />
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Tuition Fees</label>
                <input
                  type="number"
                  name="tuitionFees"
                  value={form.tuitionFees}
                  onChange={handleChange}
                  className={`${base}__input`}
                />
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Class Image</label>
                <input
                  type="file"
                  onChange={handleImage}
                  className={`${base}__input`}
                />
              </div>

              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className={`${base}__input`}
                  style={{ height: "100px", paddingTop: "12px" }}
                />
              </div>

              <div className={`${base}__btnRow`}>
                <button type="submit" className={`${base}__saveBtn`}>
                  {editId ? "Update Class" : "Save"}
                </button>

                <button
                  type="button"
                  className={`${base}__cancelBtn`}
                  onClick={resetForm}
                >
                  Clear
                </button>
              </div>

            </form>
          </div>

          {/* LIVE PREVIEW */}

          <div className={`${base}__card`}>

            <div className={`${base}__cardHead`}>
              <h2 className={`${base}__title`}>Live Preview</h2>
              <p className={`${base}__subtitle`}>
                Preview class details before saving
              </p>
            </div>

            <div className={`${base}__previewTableWrap`}>
              <table className={`${base}__previewTable`}>
                <tbody>

                  <tr>
                    <th>Image</th>
                    <td>
                      {form.image ? (
                        <img
                          src={URL.createObjectURL(form.image)}
                          style={{ width: "80px", borderRadius: "8px" }}
                        />
                      ) : form.existingImage ? (
                        <img
                          src={`${IMAGE_URL}${form.existingImage}`}
                          style={{ width: "80px", borderRadius: "8px" }}
                        />
                      ) : "—"}
                    </td>
                  </tr>

                  <tr>
                    <th>Class Name</th>
                    <td>{form.className || "—"}</td>
                  </tr>

                  <tr>
                    <th>Class Time</th>
                    <td>{form.classTime || "—"}</td>
                  </tr>

                  <tr>
                    <th>Description</th>
                    <td>{form.description || "—"}</td>
                  </tr>

                  <tr>
                    <th>Class Size</th>
                    <td>{form.classSize || "—"}</td>
                  </tr>

                  <tr>
                    <th>Years Old</th>
                    <td>{form.yearsOld || "—"}</td>
                  </tr>

                  <tr>
                    <th>Tuition Fees</th>
                    <td>{form.tuitionFees ? `₹${form.tuitionFees}` : "—"}</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

        </div>

        {/* TABLE */}

        <div className={`${base}__card ${base}__tableCard`}>

          <div className={`${base}__cardHead ${base}__cardHead--table`}>
            <div>
              <h2 className={`${base}__title`}>Classes List</h2>
            </div>

            <div className={`${base}__countBadge`}>
              Total Classes: {classesData.length}
            </div>
          </div>

          <div className={`${base}__tableWrap`}>

            <table className={`${base}__table`}>

              <thead>
                <tr>
                  <th>Image</th>
                  <th>Class Name</th>
                  <th>Class Time</th>
                  <th>Description</th>
                  <th>Class Size</th>
                  <th>Years Old</th>
                  <th>Tuition Fees</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {classesData.length > 0 ? (
                  classesData.map(item => (
                    <tr key={item._id}>

                      <td>
                        {item.image ? (
                          <img
                            src={`${IMAGE_URL}${item.image}`}
                            style={{ width: "60px", borderRadius: "6px" }}
                          />
                        ) : "—"}
                      </td>

                      <td>{item.className}</td>
                      <td>{item.classTime}</td>
                      <td>{item.description}</td>
                      <td>{item.classSize}</td>
                      <td>{item.yearsOld}</td>
                      <td>₹{item.tuitionFees}</td>

                      <td>

                        <div className={`${base}__actionWrap`}>

                          <button
                            type="button"
                            className={`${base}__actionBtn`}
                            onClick={() => toggleMenu(item._id)}
                          >
                            Action ▾
                          </button>

                          {openMenuId === item._id && (
                            <div className={`${base}__dropdown`}>

                              <button
                                className={`${base}__dropdownItem`}
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>

                              <button
                                className={`${base}__dropdownItem ${base}__dropdownItem--danger`}
                                onClick={() => handleDelete(item._id)}
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
                    <td colSpan="8" className={`${base}__empty`}>
                      No class records available.
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

export default Classes;