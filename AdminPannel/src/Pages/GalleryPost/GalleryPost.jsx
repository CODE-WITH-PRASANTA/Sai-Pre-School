import { useState, useRef, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

export default function GalleryPost() {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [editId, setEditId] = useState(null);

  const fileInputRef = useRef(null);

  const rowsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FETCH GALLERY ================= */

  const fetchGallery = async () => {
    try {
      const res = await API.get("/photo-gallery");
      setGallery(res.data.data || []);
    } catch (error) {
      console.error("Fetch gallery error:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================= IMAGE PREVIEW ================= */

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  /* ================= CREATE / UPDATE ================= */

 const handleSubmit = async (e) => {
  e.preventDefault();

  const file = fileInputRef.current.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);

  try {
    if (editId) {
      await API.put(`/photo-gallery/${editId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEditId(null);
    } else {
      await API.post("/photo-gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    fetchGallery();

    setImage(null);
    fileInputRef.current.value = "";

  } catch (error) {
    console.error("Upload error:", error.response?.data || error);
  }
};
  /* ================= DELETE ================= */

  const handleDelete = async (id) => {
    try {
      await API.delete(`/photo-gallery/${id}`);
      fetchGallery();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (item) => {
    setEditId(item._id);
    setImage(`${IMAGE_URL}${item.image}`);
  };

  /* ================= PAGINATION ================= */

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = gallery.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(gallery.length / rowsPerPage);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Gallery Post</h1>

      <div className="grid lg:grid-cols-3 gap-6 items-start">

        {/* LEFT FORM */}

        <div className="bg-white shadow-lg rounded-xl p-6 lg:col-span-1 self-start">
          <h2 className="font-semibold text-lg mb-4">Upload Image</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImage}
              className="w-full border p-2 rounded"
            />

            {image && (
              <img
                src={image}
                alt=""
                className="w-full h-40 object-cover rounded"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              {editId ? "Update Image" : "Upload Image"}
            </button>
          </form>
        </div>

        {/* RIGHT TABLE */}

        <div className="bg-white shadow-lg rounded-xl p-6 lg:col-span-2">
          <h2 className="font-semibold text-lg mb-4">Gallery Preview</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Sl No</th>
                  <th className="p-3 border">Image</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>

              <tbody>

                {currentRows.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center p-4">
                      No Images Uploaded
                    </td>
                  </tr>
                ) : (
                  currentRows.map((item, index) => (
                    <tr key={item._id} className="text-center">

                      <td className="border p-2">
                        {indexOfFirst + index + 1}
                      </td>

                      <td className="border p-2">
                        <img
                          src={`${IMAGE_URL}${item.image}`}
                          className="w-20 h-12 object-cover mx-auto rounded"
                        />
                      </td>

                      <td className="p-2 border">

                        <div className="flex flex-col items-center gap-2">

                          <button
                            onClick={() => handleEdit(item)}
                            className="flex items-center justify-center gap-2 w-28 bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1.5 rounded-md"
                          >
                            <FaEdit size={13} />
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(item._id)}
                            className="flex items-center justify-center gap-2 w-28 bg-red-500 hover:bg-red-600 text-white text-sm py-1.5 rounded-md"
                          >
                            <FaTrash size={13} />
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>
          </div>

          {/* PAGINATION */}

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 gap-2 flex-wrap">

              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1 border rounded hover:bg-gray-200"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded border
                  ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className="px-3 py-1 border rounded hover:bg-gray-200"
              >
                Next
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}