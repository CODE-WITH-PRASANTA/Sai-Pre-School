import React, { useMemo, useState } from "react";
import "./Classes.css";

const Classes = () => {
  const base = "classes-page";

  const initialForm = useMemo(
    () => ({
      className: "",
      classTime: "",
      classSize: "",
      yearsOld: "",
      tuitionFees: "",
    }),
    []
  );

  const [form, setForm] = useState(initialForm);
  const [classesData, setClassesData] = useState([
    {
      id: 1,
      className: "Nursery",
      classTime: "08:00 AM - 10:00 AM",
      classSize: "25",
      yearsOld: "3 - 4",
      tuitionFees: "1500",
    },
    {
      id: 2,
      className: "Junior KG",
      classTime: "10:30 AM - 12:30 PM",
      classSize: "30",
      yearsOld: "4 - 5",
      tuitionFees: "1800",
    },
    {
      id: 3,
      className: "Senior KG",
      classTime: "01:00 PM - 03:00 PM",
      classSize: "28",
      yearsOld: "5 - 6",
      tuitionFees: "2200",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

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
      !form.className.trim() ||
      !form.classTime.trim() ||
      !form.classSize.trim() ||
      !form.yearsOld.trim() ||
      !form.tuitionFees.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editId) {
      setClassesData((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...form, id: editId } : item
        )
      );
    } else {
      const newClass = {
        id: Date.now(),
        ...form,
      };
      setClassesData((prev) => [newClass, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setForm({
      className: item.className,
      classTime: item.classTime,
      classSize: item.classSize,
      yearsOld: item.yearsOld,
      tuitionFees: item.tuitionFees,
    });
    setEditId(item.id);
    setOpenMenuId(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete this class?");
    if (!confirmDelete) return;

    setClassesData((prev) => prev.filter((item) => item.id !== id));

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
                  placeholder="Enter class name"
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
                  placeholder="Enter class time"
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
                  placeholder="Enter class size"
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
                  placeholder="Enter age group"
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
                  placeholder="Enter tuition fees"
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

          {/* RIGHT LIVE PREVIEW */}
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
                    <th>Class Name</th>
                    <td>{form.className || "—"}</td>
                  </tr>
                  <tr>
                    <th>Class Time</th>
                    <td>{form.classTime || "—"}</td>
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

        {/* BOTTOM TABLE */}
        <div className={`${base}__card ${base}__tableCard`}>
          <div className={`${base}__cardHead ${base}__cardHead--table`}>
            <div>
              <h2 className={`${base}__title`}>Classes List</h2>
              <p className={`${base}__subtitle`}>
                Manage all class records from this table
              </p>
            </div>

            <div className={`${base}__countBadge`}>
              Total Classes: {classesData.length}
            </div>
          </div>

          <div className={`${base}__tableWrap`}>
            <table className={`${base}__table`}>
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Class Time</th>
                  <th>Class Size</th>
                  <th>Years Old</th>
                  <th>Tuition Fees</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {classesData.length > 0 ? (
                  classesData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.className}</td>
                      <td>{item.classTime}</td>
                      <td>{item.classSize}</td>
                      <td>{item.yearsOld}</td>
                      <td>₹{item.tuitionFees}</td>
                      <td>
                        <div className={`${base}__actionWrap`}>
                          <button
                            type="button"
                            className={`${base}__actionBtn`}
                            onClick={() => toggleMenu(item.id)}
                          >
                            Action ▾
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
                                className={`${base}__dropdownItem ${base}__dropdownItem--danger`}
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