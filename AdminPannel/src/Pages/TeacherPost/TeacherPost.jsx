import { useState, useRef } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TeacherPost() {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    image: "",
    name: "",
    designation: "",
    facebook: "",
    google: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  });

  const [teachers, setTeachers] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) return;

    if (editId) {
      setTeachers(
        teachers.map((t) => (t.id === editId ? { ...form, id: editId } : t))
      );
      setEditId(null);
    } else {
      setTeachers([...teachers, { ...form, id: Date.now() }]);
    }

    setForm({
      image: "",
      name: "",
      designation: "",
      facebook: "",
      google: "",
      linkedin: "",
      instagram: "",
      twitter: "",
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };

  const handleEdit = (teacher) => {
    setForm(teacher);
    setEditId(teacher.id);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Teacher Post</h1>

      {/* FORM + PREVIEW */}

      <div className="grid lg:grid-cols-2 gap-6 items-start">

        {/* FORM */}

        <div className="bg-white shadow-lg rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Image Upload */}

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Teacher Image
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImage}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Name */}

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Teacher Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter teacher name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Designation */}

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="Enter designation"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Social Links */}

            <input
              type="url"
              name="facebook"
              value={form.facebook}
              onChange={handleChange}
              placeholder="Facebook URL"
              className="w-full border p-2 rounded"
            />

            <input
              type="url"
              name="google"
              value={form.google}
              onChange={handleChange}
              placeholder="Google+ URL"
              className="w-full border p-2 rounded"
            />

            <input
              type="url"
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="w-full border p-2 rounded"
            />

            <input
              type="url"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="Instagram URL"
              className="w-full border p-2 rounded"
            />

            <input
              type="url"
              name="twitter"
              value={form.twitter}
              onChange={handleChange}
              placeholder="X / Twitter URL"
              className="w-full border p-2 rounded"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              {editId ? "Update Teacher" : "Submit Teacher"}
            </button>

          </form>
        </div>

        {/* LIVE PREVIEW */}

        <div className="bg-white shadow-lg rounded-xl p-6 flex justify-center">

          <div className="relative w-72">

            {form.image ? (
              <img
                src={form.image}
                alt=""
                className="w-full h-64 object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-xl"></div>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg p-4 w-64 text-center">

              <h3 className="font-bold text-pink-500 uppercase">
                {form.name || "Teacher Name"}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {form.designation || "Designation"}
              </p>

              <div className="flex justify-center gap-3 text-white">

                <a className="bg-pink-500 p-2 rounded-full"><FaFacebookF /></a>
                <a className="bg-pink-500 p-2 rounded-full"><FaGooglePlusG /></a>
                <a className="bg-pink-500 p-2 rounded-full"><FaLinkedinIn /></a>
                <a className="bg-pink-500 p-2 rounded-full"><FaInstagram /></a>
                <a className="bg-pink-500 p-2 rounded-full"><FaXTwitter /></a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TEACHER TABLE */}

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">

        <div className="flex justify-between items-center mb-4">

          <div>
            <h2 className="text-xl font-semibold">Teacher List</h2>
            <p className="text-gray-500 text-sm">
              Manage teacher records
            </p>
          </div>

          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
            Total Teachers : {teachers.length}
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">

              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Teacher Name</th>
                <th className="p-3 text-left">Designation</th>
                <th className="p-3 text-left">Action</th>
              </tr>

            </thead>

            <tbody>

              {teachers.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-400">
                    No Teachers Added
                  </td>
                </tr>
              )}

              {teachers.map((t) => (

                <tr key={t.id} className="border-b hover:bg-gray-50">

                  <td className="p-3">
                    <img
                      src={t.image}
                      alt=""
                      className="w-16 h-12 object-cover rounded"
                    />
                  </td>

                  <td className="p-3 font-medium">{t.name}</td>

                  <td className="p-3 text-gray-600">
                    {t.designation}
                  </td>

                  <td className="p-3">

                    <div className="flex gap-2">

                      <button
                        onClick={() => handleEdit(t)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                      >
                        <FaEdit /> Edit
                      </button>

                      <button
                        onClick={() => handleDelete(t.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                      >
                        <FaTrash /> Delete
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