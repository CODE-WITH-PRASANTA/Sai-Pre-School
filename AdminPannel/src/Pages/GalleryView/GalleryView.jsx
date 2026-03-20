import { useState, useEffect } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

export default function GalleryView() {

  const [viewMode, setViewMode] = useState("grid");
  const [galleryImages, setGalleryImages] = useState([]);

  /* ================= FETCH GALLERY ================= */

  const fetchGallery = async () => {
    try {

      const res = await API.get("/photo-gallery");

      const images = (res.data.data || []).map((item) => ({
        id: item._id,
        img: `${IMAGE_URL}${item.image}`,
      }));

      setGalleryImages(images);

    } catch (error) {
      console.error("Gallery fetch error:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">

      {/* PAGE HEADER */}

      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">

        <h1 className="text-2xl font-bold">Gallery View</h1>

        {/* VIEW SWITCH BUTTONS */}

        <div className="flex gap-2">

          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              ${viewMode === "grid"
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-100"}
            `}
          >
            <FaThLarge />
            Grid
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              ${viewMode === "list"
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-100"}
            `}
          >
            <FaList />
            List
          </button>

        </div>
      </div>

      {/* GRID VIEW */}

      {viewMode === "grid" && (

        <div className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4">

          {galleryImages.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={item.img}
                alt=""
                className="w-full h-48 object-cover"
              />

            </div>

          ))}

        </div>

      )}

      {/* LIST VIEW */}

      {viewMode === "list" && (

        <div className="space-y-4">

          {galleryImages.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow flex items-center gap-4 p-3 hover:shadow-md transition"
            >

              <img
                src={item.img}
                alt=""
                className="w-24 h-16 object-cover rounded"
              />

              <div>
                {/* <p className="font-medium">
                  Image #{item.id}
                </p> */}
                <p className="text-sm text-gray-500">
                  Gallery Image Preview
                </p>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}