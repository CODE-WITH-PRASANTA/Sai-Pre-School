import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="adminLogin">

      {/* Header */}
      <div className="adminLogin-header">
        <h1>Admin Profile</h1>
        <p>Manage your personal information</p>
      </div>

      {/* Main Section */}
      <div className="adminLogin-container">

        {/* Left Card */}
        <div className="adminLogin-leftCard">
          <div className="adminLogin-avatarWrapper">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="avatar"
              className="adminLogin-avatar"
            />
          </div>

          <h2 className="adminLogin-name">Admin User</h2>

          <div className="adminLogin-roleTag">
            Administrator
          </div>

          <button className="adminLogin-changeAvatar">
            Change Avatar
          </button>
        </div>

        {/* Right Card */}
        <div className="adminLogin-rightCard">

          <div className="adminLogin-formGrid">

            <div className="adminLogin-inputGroup">
              <label>Full Name</label>
              <input type="text" value="Admin User" />
            </div>

            <div className="adminLogin-inputGroup">
              <label>Email</label>
              <input type="email" value="admin@school.com" />
            </div>

            <div className="adminLogin-inputGroup">
              <label>Phone</label>
              <input type="text" value="9876543210" />
            </div>

            <div className="adminLogin-inputGroup">
              <label>Role</label>
              <input type="text" value="Administrator" disabled />
            </div>

          </div>

          <div className="adminLogin-inputGroup fullWidth">
            <label>Bio</label>
            <textarea>
Managing school operations and academic activities.
            </textarea>
          </div>

          <div className="adminLogin-btnWrapper">
            <button className="adminLogin-saveBtn">
              Save Changes
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminLogin;