import React, { useState } from "react";
import "./StudentDetails.css";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

const studentData = [
  {
    id: 1,
    admissionNo: "NLET/232327",
    roll: "1",
    name: "Lavanya",
    class: "5th",
    section: "A",
    gender: "Female",
    dob: "12-11-2006",
    father: "",
    mother: "",
    phone: "1234567986",
  },
  {
    id: 2,
    admissionNo: "NEET/995588",
    roll: "234343",
    name: "Akshay",
    class: "5th",
    section: "A",
    gender: "Male",
    dob: "09-10-2024",
    father: "Akshayhhh",
    mother: "Margaret Parker",
    phone: "7656789845",
  },
  {
    id: 3,
    admissionNo: "NLET/5847",
    roll: "234344",
    name: "ABHAY RAJ",
    class: "5th",
    section: "A",
    gender: "Male",
    dob: "01-01-2015",
    father: "JAMUNA PRASAD",
    mother: "",
    phone: "6396548562",
  },
];

const StudentDetails = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [section, setSection] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleClassSearch = () => {
    const result = studentData.filter(
      (s) =>
        s.class === selectedClass &&
        (section ? s.section === section : true)
    );
    setFiltered(result);
  };

  const handleKeywordSearch = () => {
    const result = studentData.filter(
      (s) =>
        s.name.toLowerCase().includes(keyword.toLowerCase()) ||
        s.roll.includes(keyword) ||
        s.admissionNo.toLowerCase().includes(keyword.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="sd-container">
      {/* HEADER */}
      <div className="sd-header">
        <h2>📘 Student Details</h2>
      </div>

      {/* FILTER */}
      <div className="sd-card">
        <div className="sd-cardHeader">
          <FiSearch /> Select Criteria
        </div>

        <div className="sd-formRow">
          <div className="sd-field">
            <label>Class *</label>
            <select onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="">Select Class</option>
              <option value="1st">5th</option>
              <option value="2nd">5th</option>
              <option value="3rd">5th</option>
              <option value="4th">5th</option>
              <option value="6th">5th</option>
              <option value="7th">5th</option>
            </select>
          </div>

          <div className="sd-field">
            <label>Section</label>
            <select onChange={(e) => setSection(e.target.value)}>
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          <div className="sd-field">
            <label>Search by Keyword</label>
            <input
              type="text"
              placeholder="Admission no, Name, Roll"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>

        <div className="sd-buttonRow">
          <button onClick={handleClassSearch} className="sd-btn">
            <FiSearch /> Search
          </button>

          <button onClick={handleKeywordSearch} className="sd-btn">
            <FiSearch /> Search
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="sd-tableCard">
        <div className="sd-tableHeader">📋 Student List</div>

        <div className="sd-tableWrapper">
          <table className="sd-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Admission No</th>
                <th>Roll</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Father</th>
                <th>Mother</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length > 0 ? (
                filtered.map((s, i) => (
                  <tr key={s.id}>
                    <td>{i + 1}</td>
                    <td>{s.admissionNo}</td>
                    <td>{s.roll}</td>
                    <td className="sd-name">{s.name}</td>
                    <td>{s.class}</td>
                    <td>{s.section}</td>
                    <td>{s.gender}</td>
                    <td>{s.dob}</td>
                    <td>{s.father}</td>
                    <td>{s.mother}</td>
                    <td>{s.phone}</td>

                    <td>
                      <div className="sd-action">
                        <FiMoreVertical />
                        <div className="sd-dropdown">
                          <button>View</button>
                          <button>Edit</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="sd-noData">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;