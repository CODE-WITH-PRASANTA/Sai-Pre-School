import API, { IMAGE_URL } from "../../api/axios";
import { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaEdit,
  FaTrash,
  FaImage,
  FaUserTie,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TeacherPost() {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    image: null,
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

  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teachers");
      setTeachers(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file }); // 🔥 important
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("designation", form.designation);
      formData.append("facebook", form.facebook);
      formData.append("google", form.google);
      formData.append("linkedin", form.linkedin);
      formData.append("instagram", form.instagram);
      formData.append("twitter", form.twitter);

      if (form.image) {
        formData.append("image", form.image);
      }

      if (editId) {
        await API.put(`/teachers/${editId}`, formData);
      } else {
        await API.post("/teachers", formData);
      }

      fetchTeachers(); // 🔥 refresh list

      setForm({
        image: null,
        name: "",
        designation: "",
        facebook: "",
        google: "",
        linkedin: "",
        instagram: "",
        twitter: "",
      });

      setEditId(null);

      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    try {
      await API.delete(`/teachers/${id}`);
      fetchTeachers();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (teacher) => {
    setForm({
      image: teacher.image || null,
      name: teacher.name,
      designation: teacher.designation,
      facebook: teacher.facebook,
      google: teacher.google,
      linkedin: teacher.linkedin,
      instagram: teacher.instagram,
      twitter: teacher.twitter,
    });

    setEditId(teacher._id);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleClear = () => {
    setForm({
      image: null,
      name: "",
      designation: "",
      facebook: "",
      google: "",
      linkedin: "",
      instagram: "",
      twitter: "",
    });
    setEditId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const socialButtons = [
    { icon: <FaFacebookF />, link: form.facebook, label: "Facebook" },
    { icon: <FaGooglePlusG />, link: form.google, label: "Google" },
    { icon: <FaLinkedinIn />, link: form.linkedin, label: "LinkedIn" },
    { icon: <FaInstagram />, link: form.instagram, label: "Instagram" },
    { icon: <FaXTwitter />, link: form.twitter, label: "Twitter" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-3 py-3 md:px-4 md:py-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-3 rounded-[24px] bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:justify-between md:px-5 md:py-5">
          <div>
            <span className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              Teacher Management
            </span>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
              Teacher Post Dashboard
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Create teacher cards, preview them live, and manage all profiles
              in one clean admin panel.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            Total Teachers : {teachers.length}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[24px] bg-white px-4 py-4 shadow-sm md:px-5 md:py-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FaUserTie className="text-base" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {editId ? "Update Teacher" : "Add New Teacher"}
                </h2>
                <p className="text-sm text-slate-500">
                  Fill the form and generate teacher card
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Teacher Image
                  </label>

                  <label className="flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-[22px] border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center transition hover:border-blue-400 hover:bg-blue-50">
                    <FaImage className="mb-2 text-2xl text-blue-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      Upload Teacher Image
                    </span>
                    <span className="mt-1 text-xs text-slate-500">
                      PNG, JPG or WEBP supported
                    </span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImage}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter teacher name"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={form.designation}
                    onChange={handleChange}
                    placeholder="Enter designation"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FaGlobe />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Social Media Links
                    </h3>
                    <p className="text-xs text-slate-500">
                      Add teacher social profile links
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="url"
                    name="facebook"
                    value={form.facebook}
                    onChange={handleChange}
                    placeholder="Facebook URL"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-pink-500"
                  />

                  <input
                    type="url"
                    name="google"
                    value={form.google}
                    onChange={handleChange}
                    placeholder="Google+ URL"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-pink-500"
                  />

                  <input
                    type="url"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-pink-500"
                  />

                  <input
                    type="url"
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    placeholder="Instagram URL"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-pink-500"
                  />

                  <input
                    type="url"
                    name="twitter"
                    value={form.twitter}
                    onChange={handleChange}
                    placeholder="X / Twitter URL"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-pink-500 md:col-span-2"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700">
                  {editId ? "Update Teacher" : "Submit Teacher"}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-[24px] bg-white px-4 py-4 shadow-sm md:px-5 md:py-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Live Preview
                </h2>
                <p className="text-sm text-slate-500">Teacher card preview</p>
              </div>

              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                Preview
              </span>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-[320px]">
                <div className="overflow-hidden rounded-[28px] bg-slate-200 shadow-md">
                  {form.image ? (
                    <img
                      src={
                        typeof form.image === "string"
                          ? `${IMAGE_URL}${form.image}`
                          : URL.createObjectURL(form.image)
                      }
                      alt={form.name || "Teacher preview"}
                      className="h-[360px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[360px] w-full items-center justify-center bg-slate-100 text-slate-400">
                      <div className="text-center">
                        <FaImage className="mx-auto mb-2 text-3xl" />
                        <p className="text-sm font-medium">
                          Teacher Image Preview
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative z-10 mx-auto -mt-14 w-[88%] rounded-[24px] bg-white px-4 py-4 text-center shadow-md">
                  <h3 className="text-lg font-extrabold uppercase tracking-wide text-pink-500">
                    {form.name || "Teacher Name"}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {form.designation || "Designation"}
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                    {socialButtons.map((item, index) => (
                      <a
                        key={index}
                        href={item.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-sm text-white transition hover:-translate-y-0.5"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] bg-white px-4 py-4 shadow-sm md:px-5 md:py-5">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Teacher List</h2>
              <p className="text-sm text-slate-500">
                Manage teacher records with edit and delete actions
              </p>
            </div>

            <div className="inline-flex w-fit items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Total Teachers : {teachers.length}
            </div>
          </div>

          <div className="overflow-x-auto rounded-[20px] border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Image</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Teacher Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Designation
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {teachers.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-8 text-center text-slate-400"
                    >
                      No Teachers Added
                    </td>
                  </tr>
                )}

                {teachers.map((t) => (
                  <tr
                    key={t._id}
                    className="border-t border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-4 py-3">
                      {t.image ? (
                        <img
                          src={`${IMAGE_URL}${t.image}`}
                          alt={t.name}
                          className="h-14 w-20 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-20 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                          <FaImage />
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {t.name}
                    </td>

                    <td className="px-4 py-3 text-slate-500">
                      {t.designation}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(t)}
                          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-amber-600"
                        >
                          <FaEdit /> Edit
                        </button>

                        <button
                          onClick={() => handleDelete(t._id)}
                          className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
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
    </div>
  );
}
