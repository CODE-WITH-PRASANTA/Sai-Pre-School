import { useState } from "react";
import { Star, Pencil, Trash2 } from "lucide-react";

const Testimonial = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    designation: "",
    description: "",
    rating: 0,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setPreviewImage(imageURL);

    setFormData({
      ...formData,
      image: imageURL,
    });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setTestimonials(
        testimonials.map((item) =>
          item.id === editId ? { ...formData, id: editId, status: item.status } : item
        )
      );
      setEditId(null);
    } else {
      const newData = {
        ...formData,
        id: Date.now(),
        status: "Unpublished",
      };

      setTestimonials([...testimonials, newData]);
    }

    setFormData({
      image: "",
      name: "",
      designation: "",
      description: "",
      rating: 0,
    });

    setPreviewImage(null);
  };

  const togglePublish = (id) => {
    setTestimonials(
      testimonials.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Published" ? "Unpublished" : "Published",
            }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setFormData(item);
    setPreviewImage(item.image);
    setEditId(item.id);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">
        Testimonial Management
      </h1>

      {/* FORM + PREVIEW */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* FORM */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">
            {editId ? "Edit Testimonial" : "Add Testimonial"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Image */}
            <div>
              <label className="text-sm font-medium">Upload Image</label>
              <input
                type="file"
                onChange={handleImage}
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            {/* Name */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="text-sm font-medium">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full border p-2 rounded mt-1"
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label className="text-sm font-medium">Rating</label>

              <div className="flex gap-2 mt-1">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    onClick={()=>handleRating(star)}
                    className={`cursor-pointer ${
                      formData.rating >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {editId ? "Update Testimonial" : "Submit Testimonial"}
            </button>

          </form>
        </div>

        {/* LIVE PREVIEW */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-center">

          <div className="max-w-sm text-center">

            <h2 className="text-lg font-semibold mb-4">
              Live Preview
            </h2>

            <div className="border rounded-xl p-6 shadow">

              {previewImage ? (
                <img
                  src={previewImage}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
              )}

              <h3 className="font-semibold">
                {formData.name || "Client Name"}
              </h3>

              <p className="text-sm text-gray-500">
                {formData.designation || "Designation"}
              </p>

              <div className="flex justify-center my-2">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      formData.rating >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600">
                {formData.description ||
                  "Customer testimonial preview will appear here."}
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* TABLE */}

      <div className="mt-10 bg-white shadow rounded-xl p-6">

        <h2 className="text-lg font-semibold mb-4">
          Testimonial List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border text-sm">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Designation</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Rating</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.map((item) => (
                <tr key={item.id} className="text-center">

                  <td className="border p-2">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </td>

                  <td className="border p-2">{item.name}</td>

                  <td className="border p-2">
                    {item.designation}
                  </td>

                  <td className="border p-2 max-w-xs truncate">
                    {item.description}
                  </td>

                  <td className="border p-2">
                    ⭐ {item.rating}
                  </td>

                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 text-xs rounded text-white ${
                        item.status === "Published"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* ACTION COLUMN */}

                  <td className="border p-2 space-y-2">

                    <button
                      onClick={() => togglePublish(item.id)}
                      className={`w-full text-xs py-1 rounded text-white ${
                        item.status === "Published"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {item.status === "Published"
                        ? "Unpublish"
                        : "Publish"}
                    </button>

                    <button
                      onClick={() => handleEdit(item)}
                      className="w-full bg-yellow-500 text-white text-xs py-1 rounded flex items-center justify-center gap-1"
                    >
                      <Pencil size={14} /> Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-full bg-red-600 text-white text-xs py-1 rounded flex items-center justify-center gap-1"
                    >
                      <Trash2 size={14} /> Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default Testimonial;