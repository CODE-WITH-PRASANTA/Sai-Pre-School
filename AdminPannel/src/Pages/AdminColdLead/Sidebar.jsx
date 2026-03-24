import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const AdminColdLeads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");

  /* ================= FETCH LEADS ================= */
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await API.get("/enquiries");

      // ✅ Add feedback field if not exists
      const updatedLeads = (res.data.data || []).map((lead, index) => ({
        ...lead,
        feedback: lead.feedback || "",
      }));

      setLeads(updatedLeads);
    } catch (error) {
      console.error("FETCH ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  /* ================= DELETE ================= */
  const deleteLead = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await API.delete(`/enquiries/${id}`);
      fetchLeads();
    } catch (error) {
      console.error("DELETE ERROR:", error);
    }
  };

  /* ================= UPDATE STATUS ================= */
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/enquiries/${id}/status`, { status });
      fetchLeads();
    } catch (error) {
      console.error("STATUS ERROR:", error);
    }
  };

  /* ================= OPEN POPUP ================= */
  const openFeedbackPopup = (lead) => {
    setSelectedLead(lead);
    setFeedbackText(lead.feedback || "");
    setShowPopup(true);
  };

  /* ================= SAVE FEEDBACK ================= */
  const submitFeedback = () => {
    if (!feedbackText.trim()) {
      alert("Enter feedback");
      return;
    }

    const updatedLeads = leads.map((lead) =>
      lead._id === selectedLead._id
        ? { ...lead, feedback: feedbackText }
        : lead
    );

    setLeads(updatedLeads);
    setShowPopup(false);
    setFeedbackText("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Cold Leads / Enquiries</h2>

      {loading ? (
        <p>Loading...</p>
      ) : leads.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
            }}
          >
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                <th style={thStyle}>SL No.</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Address</th>
                <th style={thStyle}>Message</th>

                {/* ✅ Feedback Heading in middle */}
                <th style={thStyle}>Feedback</th>

                <th style={thStyle}>Status</th>
                <th style={thStyle}>Created</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead, index) => (
                <tr key={lead._id}>
                  {/* ✅ Serial Number */}
                  <td style={tdStyle}>{index + 1}</td>

                  <td style={tdStyle}>{lead.name}</td>
                  <td style={tdStyle}>{lead.phone}</td>
                  <td style={tdStyle}>{lead.address}</td>
                  <td style={tdStyle}>{lead.message}</td>

                  {/* ✅ Feedback Data */}
                  <td style={tdStyle}>
                    {lead.feedback ? (
                      <span>{lead.feedback}</span>
                    ) : (
                      <span style={{ color: "#9ca3af" }}>
                        No Feedback
                      </span>
                    )}
                  </td>

                  <td style={tdStyle}>
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        updateStatus(lead._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>

                  <td style={tdStyle}>
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>

                  <td style={tdStyle}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {/* Delete */}
                      <button
                        onClick={() => deleteLead(lead._id)}
                        style={deleteBtn}
                      >
                        Delete
                      </button>

                      {/* ✅ Feedback Button */}
                      <button
                        onClick={() => openFeedbackPopup(lead)}
                        style={feedbackBtn}
                      >
                        Feedback
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <h3 style={{ marginBottom: "10px" }}>Add Feedback</h3>

            <textarea
              rows="4"
              placeholder="Enter feedback..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              style={textareaStyle}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowPopup(false)} style={cancelBtn}>
                Cancel
              </button>

              <button onClick={submitFeedback} style={submitBtn}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ================= STYLES ================= */

const thStyle = {
  padding: "10px",
  border: "1px solid #e5e7eb",
  textAlign: "left",
  fontWeight: "600",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #e5e7eb",
};

const deleteBtn = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "6px 10px",
  cursor: "pointer",
  borderRadius: "4px",
};

const feedbackBtn = {
  background: "#3b82f6",
  color: "#fff",
  border: "none",
  padding: "6px 10px",
  cursor: "pointer",
  borderRadius: "4px",
};

/* POPUP */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "350px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
};

const cancelBtn = {
  background: "#9ca3af",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
};

const submitBtn = {
  background: "#10b981",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
};

export default AdminColdLeads;