import React, { useState } from "react";
import "./BlogPosting.css";

const BlogPosting= () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    description: "",
    image: null,
  });

  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= IMAGE ================= */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: URL.createObjectURL(file),
      });
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author) {
      alert("Please fill required fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...blogs];
      updated[editIndex] = form;
      setBlogs(updated);
      setEditIndex(null);
    } else {
      setBlogs([...blogs, form]);
    }

    setForm({
      title: "",
      author: "",
      date: "",
      description: "",
      image: null,
    });
  };

  /* ================= EDIT ================= */
  const handleEdit = (index) => {
    setForm(blogs[index]);
    setEditIndex(index);
  };

  /* ================= DELETE ================= */
  const handleDelete = (index) => {
    if (!window.confirm("Delete this blog?")) return;

    const updated = blogs.filter((_, i) => i !== index);
    setBlogs(updated);
  };

  return (
    <div className="blogAdmin">
      {/* LEFT FORM */}
      <div className="blogAdmin-form">
        <h2>Blog Posting</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="News Title"
            value={form.title}
            onChange={handleChange}
          />

          <input type="file" onChange={handleImage} />

          {form.image && (
            <img src={form.image} alt="preview" className="preview-img" />
          )}

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={form.description}
            onChange={handleChange}
          />

          <button type="submit">
            {editIndex !== null ? "Update Blog" : "Submit Blog"}
          </button>
        </form>
      </div>

      {/* RIGHT TABLE */}
      <div className="blogAdmin-table">
        <h2>Blog List</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">
                    No Blogs Added
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>
                      {blog.image && (
                        <img
                          src={blog.image}
                          alt=""
                          className="table-img"
                        />
                      )}
                    </td>

                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td className="desc">{blog.description}</td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogPosting;