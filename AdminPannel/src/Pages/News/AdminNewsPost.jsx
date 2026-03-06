import { useState, useEffect } from "react";
import API, { IMAGE_URL } from "../../api/axios";

export default function AdminNewsPost() {

  const [news, setNews] = useState({
    title: "",
    image: null,
    imagePreview: "",
    description: "",
    author: "",
    date: "",
  });

  const [newsList, setNewsList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null);

  /* ================= FETCH NEWS ================= */

  const fetchNews = async () => {
    try {
      const res = await API.get("/news");
      setNewsList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  /* ================= INPUT ================= */

  const handleChange = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= IMAGE ================= */

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setNews({
        ...news,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {

    const formData = new FormData();

    formData.append("title", news.title);
    formData.append("description", news.description);
    formData.append("author", news.author);
    formData.append("date", news.date);

    if (news.image) {
      formData.append("image", news.image);
    }

    try {

      if (editIndex !== null) {

        await API.put(`/news/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setEditIndex(null);
        setEditId(null);

      } else {

        await API.post("/news", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

      }

      fetchNews();

      setNews({
        title: "",
        image: null,
        imagePreview: "",
        description: "",
        author: "",
        date: "",
      });

    } catch (err) {
      console.log(err);
    }
  };

  /* ================= DELETE ================= */

  const deleteNews = async (id) => {
    try {

      await API.delete(`/news/${id}`);

      fetchNews();

    } catch (err) {
      console.log(err);
    }
  };

  /* ================= EDIT ================= */

  const editNews = (item, index) => {

    setNews({
      title: item.title,
      description: item.description,
      author: item.author,
      date: item.date,
      image: null,
      imagePreview: `${IMAGE_URL}${item.image}`,
    });

    setEditIndex(index);
    setEditId(item._id);
  };

  return (
    <div className="space-y-10 w-full">

      {/* FORM + PREVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-6">
            {editIndex !== null ? "Edit News" : "Create News"}
          </h2>

          <div className="flex flex-col gap-5">

            <div>
              <label className="text-sm font-medium">News Title</label>
              <input
                type="text"
                name="title"
                value={news.title}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="border p-2 rounded w-full"
                onChange={handleImageChange}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Author</label>
              <input
                type="text"
                name="author"
                value={news.author}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Publish Date</label>
              <input
                type="date"
                name="date"
                value={news.date}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={news.description}
                rows="5"
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              {editIndex !== null ? "Update News" : "Publish News"}
            </button>

          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-6">Live Preview</h2>

          <div className="border rounded overflow-hidden">

            {news.imagePreview && (
              <img
                src={news.imagePreview}
                alt="preview"
                className="w-full h-52 object-cover"
              />
            )}

            <div className="p-4">

              <h3 className="text-lg font-bold break-words">
                {news.title || "News Title"}
              </h3>

              <p className="text-sm text-gray-500 break-words">
                {news.author && `By ${news.author}`}{" "}
                {news.date && `• ${news.date}`}
              </p>

              <p className="text-gray-700 mt-2 break-words">
                {news.description || "News description will appear here"}
              </p>

            </div>
          </div>
        </div>

      </div>

      {/* NEWS LIST TABLE */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-6">News List</h2>

        <div className="overflow-x-auto max-h-[400px] overflow-y-auto">

          <table className="w-full border">

            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Author</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {newsList.map((item, index) => (
                <tr key={item._id} className="text-center">

                  <td className="border p-2">
                    {item.image && (
                      <img
                        src={`${IMAGE_URL}${item.image}`}
                        alt=""
                        className="w-16 h-12 object-cover mx-auto"
                      />
                    )}
                  </td>

                  <td className="border p-2 break-words">{item.title}</td>
                  <td className="border p-2 break-words">{item.author}</td>
                  <td className="border p-2">{item.date}</td>

                  <td className="border p-2">
                    <div className="flex flex-wrap justify-center gap-2">
                      <button
                        onClick={() => editNews(item, index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteNews(item._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}