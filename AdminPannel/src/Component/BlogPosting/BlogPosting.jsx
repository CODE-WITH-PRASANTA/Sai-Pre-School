import React, { useState, useEffect } from "react";
import "./BlogPosting.css";
import API, { IMAGE_URL } from "../../api/axios";

const BlogPosting = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    description: "",
    image: null,
  });

  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null); // 🔥 backend id

  /* ================= FETCH NEWS ================= */
  const fetchBlogs = async () => {
    try {
      const res = await API.get("/news");
      setBlogs(res.data.data || []);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
        image: file, // 🔥 store file (not URL)
      });
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.author) {
      alert("Please fill required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("author", form.author);
      formData.append("date", form.date);
      formData.append("description", form.description);
      if (form.image) formData.append("image", form.image);

      if (editId) {
        // 🔥 UPDATE
        await API.put(`/news/${editId}`, formData);
      } else {
        // 🔥 CREATE
        await API.post("/news", formData);
      }

      fetchBlogs(); // refresh

      setForm({
        title: "",
        author: "",
        date: "",
        description: "",
        image: null,
      });

      setEditIndex(null);
      setEditId(null);
    } catch (error) {
      console.log("Submit error:", error);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (blog, index) => {
    setForm({
      title: blog.title,
      author: blog.author,
      date: blog.date?.slice(0, 10),
      description: blog.description,
      image: null,
    });

    setEditIndex(index);
    setEditId(blog._id);
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await API.delete(`/news/${id}`);
      fetchBlogs();
    } catch (error) {
      console.log("Delete error:", error);
    }
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

          {form.image && typeof form.image !== "string" && (
            <img
              src={URL.createObjectURL(form.image)}
              alt="preview"
              className="preview-img"
            />
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
            {editId ? "Update Blog" : "Submit Blog"}
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
                  <tr key={blog._id}>
                    <td>{index + 1}</td>

                    <td>
                      {blog.image && (
                        <img
                          src={`${IMAGE_URL}${blog.image}`}
                          alt=""
                          className="table-img"
                        />
                      )}
                    </td>

                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date?.slice(0, 10)}</td>
                    <td className="desc">{blog.description}</td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(blog, index)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(blog._id)}
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