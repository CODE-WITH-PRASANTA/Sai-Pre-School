import { useState } from "react";
import { FaThLarge, FaList } from "react-icons/fa";

export default function GalleryView() {

  const [viewMode, setViewMode] = useState("grid");

  /* Dummy Images */

  const galleryImages = [
    { id: 1, img: "https://picsum.photos/400/300?1" },
    { id: 2, img: "https://picsum.photos/400/300?2" },
    { id: 3, img: "https://picsum.photos/400/300?3" },
    { id: 4, img: "https://picsum.photos/400/300?4" },
    { id: 5, img: "https://picsum.photos/400/300?5" },
    { id: 6, img: "https://picsum.photos/400/300?6" },
    { id: 7, img: "https://picsum.photos/400/300?7" },
    { id: 8, img: "https://picsum.photos/400/300?8" },
    { id: 9, img: "https://picsum.photos/400/300?9" },
  ];

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
                <p className="font-medium">
                  Image #{item.id}
                </p>
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