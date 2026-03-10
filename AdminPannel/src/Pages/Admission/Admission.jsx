import React, { useRef, useState } from "react";
import "./Admission.css";

const Admission = () => {
  const base = "admission-panel";
  const fileInputRef = useRef(null);

  const createAdmissionNo = () =>
    `ADM${Math.floor(1000 + Math.random() * 9000)}`;

  const getEmptyForm = () => ({
    admissionNo: createAdmissionNo(),
    admissionDate: "",
    studentName: "",
    gender: "",
    dob: "",
    photo: "",
    className: "",
    section: "",
    rollNo: "",
    bloodGroup: "",
    fatherName: "",
    phone: "",
    address: "",
  });

  const [form, setForm] = useState(getEmptyForm());

  const [records, setRecords] = useState([
    {
      id: 1,
      admissionNo: "1001",
      photo: "",
      studentName: "Rahul Sharma",
      className: "5",
      section: "A",
      fatherName: "Rajesh",
      phone: "9876543210",
      admissionDate: "12/04/2026",
      gender: "Male",
      dob: "2015-05-12",
      rollNo: "12",
      bloodGroup: "B+",
      address: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      admissionNo: "1002",
      photo: "",
      studentName: "Priya Singh",
      className: "3",
      section: "B",
      fatherName: "Suresh",
      phone: "9998877665",
      admissionDate: "13/04/2026",
      gender: "Female",
      dob: "2017-03-10",
      rollNo: "8",
      bloodGroup: "A+",
      address: "Pune, Maharashtra",
    },
  ]);

  const [editId, setEditId] = useState(null);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const convertDisplayDateToInput = (dateStr) => {
    if (!dateStr || !dateStr.includes("/")) return dateStr || "";
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        photo: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    setForm(getEmptyForm());
    setEditId(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    if (!form.admissionNo.trim()) {
      alert("Please enter admission number");
      return false;
    }
    if (!form.admissionDate.trim()) {
      alert("Please select admission date");
      return false;
    }
    if (!form.studentName.trim()) {
      alert("Please enter student name");
      return false;
    }
    if (!form.gender.trim()) {
      alert("Please select gender");
      return false;
    }
    if (!form.dob.trim()) {
      alert("Please select date of birth");
      return false;
    }
    if (!form.className.trim()) {
      alert("Please select class");
      return false;
    }
    if (!form.section.trim()) {
      alert("Please select section");
      return false;
    }
    if (!String(form.rollNo).trim()) {
      alert("Please enter roll number");
      return false;
    }
    if (!form.bloodGroup.trim()) {
      alert("Please select blood group");
      return false;
    }
    return true;
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      id: editId || Date.now(),
      admissionNo: form.admissionNo,
      photo: form.photo,
      studentName: form.studentName,
      className: form.className,
      section: form.section,
      fatherName: form.fatherName || "—",
      phone: form.phone || "—",
      admissionDate: formatDate(form.admissionDate),
      gender: form.gender,
      dob: form.dob,
      rollNo: form.rollNo,
      bloodGroup: form.bloodGroup,
      address: form.address || "—",
    };

    if (editId) {
      setRecords((prev) =>
        prev.map((item) => (item.id === editId ? payload : item))
      );
      alert("Admission updated successfully");
    } else {
      setRecords((prev) => [payload, ...prev]);
      alert("Admission saved successfully");
    }

    handleClear();
  };

  const handleEdit = (row) => {
    setEditId(row.id);

    setForm({
      admissionNo: row.admissionNo || "",
      admissionDate: convertDisplayDateToInput(row.admissionDate),
      studentName: row.studentName || "",
      gender: row.gender || "",
      dob: row.dob || "",
      photo: row.photo || "",
      className: row.className || "",
      section: row.section || "",
      rollNo: row.rollNo || "",
      bloodGroup: row.bloodGroup || "",
      fatherName: row.fatherName === "—" ? "" : row.fatherName || "",
      phone: row.phone === "—" ? "" : row.phone || "",
      address: row.address === "—" ? "" : row.address || "",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const ok = window.confirm("Are you sure you want to delete this record?");
    if (!ok) return;

    setRecords((prev) => prev.filter((item) => item.id !== id));

    if (editId === id) {
      handleClear();
    }
  };

  return (
    <div className={base}>
      <div className={`${base}__top`}>
        <section className={`${base}__card ${base}__formCard`}>
          <div className={`${base}__cardHead`}>
            <div>
              <p className={`${base}__eyebrow`}>Admission Form</p>
              <h2 className={`${base}__title`}>Student Basic Information</h2>
            </div>

            <div className={`${base}__badge`}>
              {editId ? "Edit Mode" : "New Admission"}
            </div>
          </div>

          <form className={`${base}__form`} onSubmit={handleSave}>
            <div className={`${base}__grid`}>
              <div className={`${base}__field`}>
                <label htmlFor="admissionNo">Admission No</label>
                <input
                  id="admissionNo"
                  type="text"
                  name="admissionNo"
                  placeholder="Enter admission no"
                  value={form.admissionNo}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="admissionDate">Admission Date</label>
                <input
                  id="admissionDate"
                  type="date"
                  name="admissionDate"
                  value={form.admissionDate}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field ${base}__field--full`}>
                <label htmlFor="studentName">Student Name</label>
                <input
                  id="studentName"
                  type="text"
                  name="studentName"
                  placeholder="Enter student name"
                  value={form.studentName}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field ${base}__field--full`}>
                <label htmlFor="photo">Photo Section</label>
                <div className={`${base}__photoInputWrap`}>
                  <input
                    id="photo"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="className">Class</label>
                <select
                  id="className"
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                >
                  <option value="">Select class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="section">Section</label>
                <select
                  id="section"
                  name="section"
                  value={form.section}
                  onChange={handleChange}
                >
                  <option value="">Select section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="rollNo">Roll No</label>
                <input
                  id="rollNo"
                  type="number"
                  name="rollNo"
                  placeholder="Enter roll no"
                  value={form.rollNo}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="bloodGroup">Blood Group</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={form.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="fatherName">Father Name</label>
                <input
                  id="fatherName"
                  type="text"
                  name="fatherName"
                  placeholder="Enter father name"
                  value={form.fatherName}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field`}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={`${base}__field ${base}__field--full`}>
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Enter address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={`${base}__actions`}>
              <button
                type="submit"
                className={`${base}__btn ${base}__btn--save`}
              >
                {editId ? "Update" : "Save"}
              </button>

              <button
                type="button"
                className={`${base}__btn ${base}__btn--clear`}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        <aside className={`${base}__card ${base}__previewCard`}>
          <div className={`${base}__cardHead`}>
            <div>
              <p className={`${base}__eyebrow`}>Live Preview</p>
              <h2 className={`${base}__title`}>Student Preview Section</h2>
            </div>
          </div>

          <div className={`${base}__previewTop`}>
            <div className={`${base}__avatarWrap`}>
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.studentName || "Student"}
                  className={`${base}__avatar`}
                />
              ) : (
                <div className={`${base}__avatarPlaceholder`}>👤</div>
              )}
            </div>

            <div className={`${base}__previewNameWrap`}>
              <h3>{form.studentName || "Rahul Sharma"}</h3>
              <p>
                Admission No: <span>{form.admissionNo || "ADM1001"}</span>
              </p>
            </div>
          </div>

          <div className={`${base}__previewTable`}>
            <div className={`${base}__previewRow`}>
              <span>Student Name</span>
              <strong>{form.studentName || "Rahul Sharma"}</strong>
            </div>

            <div className={`${base}__previewRow`}>
              <span>Class</span>
              <strong>{form.className || "5"}</strong>
            </div>

            <div className={`${base}__previewRow`}>
              <span>Section</span>
              <strong>{form.section || "A"}</strong>
            </div>

            <div className={`${base}__previewRow`}>
              <span>Father Name</span>
              <strong>{form.fatherName || "Rajesh Sharma"}</strong>
            </div>

            <div className={`${base}__previewRow`}>
              <span>Phone</span>
              <strong>{form.phone || "9876543210"}</strong>
            </div>

            <div className={`${base}__previewRow`}>
              <span>Address</span>
              <strong>{form.address || "Mumbai, Maharashtra"}</strong>
            </div>
          </div>
        </aside>
      </div>

      <section className={`${base}__card ${base}__tableCard`}>
        <div className={`${base}__cardHead`}>
          <div>
            <p className={`${base}__eyebrow`}>Admission Records</p>
            <h2 className={`${base}__title`}>Student Admission List</h2>
          </div>

          <div className={`${base}__countPill`}>
            Total Records: {records.length}
          </div>
        </div>

        <div className={`${base}__tableWrap`}>
          <table className={`${base}__table`}>
            <thead>
              <tr>
                <th>Admission No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Father Name</th>
                <th>Phone</th>
                <th>Admission Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records.length > 0 ? (
                records.map((row) => (
                  <tr key={row.id}>
                    <td>{row.admissionNo}</td>
                    <td>
                      {row.photo ? (
                        <img
                          src={row.photo}
                          alt={row.studentName}
                          className={`${base}__tablePhoto`}
                        />
                      ) : (
                        <div className={`${base}__tablePhotoFallback`}>👤</div>
                      )}
                    </td>
                    <td>{row.studentName}</td>
                    <td>{row.className}</td>
                    <td>{row.section}</td>
                    <td>{row.fatherName}</td>
                    <td>{row.phone}</td>
                    <td>{row.admissionDate}</td>
                    <td>
                      <div className={`${base}__tableActions`}>
                        <button
                          type="button"
                          className={`${base}__actionBtn ${base}__actionBtn--edit`}
                          onClick={() => handleEdit(row)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className={`${base}__actionBtn ${base}__actionBtn--delete`}
                          onClick={() => handleDelete(row.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className={`${base}__empty`}>
                    No admission records available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Admission;