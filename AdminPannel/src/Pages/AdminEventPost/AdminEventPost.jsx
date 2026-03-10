import { useState, useEffect } from "react";
import API, { IMAGE_URL } from "../../api/axios";

export default function AdminEventPost() {

  const [event, setEvent] = useState({
    title: "",
    image: null,
    imagePreview: "",
    location: "",
    date: "",
    description: ""
  });

  const [eventList, setEventList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null);

  /* ================= FETCH EVENTS ================= */

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEventList(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  /* ================= INPUT CHANGE ================= */

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  /* ================= IMAGE ================= */

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setEvent({
        ...event,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {

    const formData = new FormData();

    formData.append("title", event.title);
    formData.append("location", event.location);
    formData.append("date", event.date);
    formData.append("description", event.description);

    if (event.image) {
      formData.append("image", event.image);
    }

    try {

      if (editIndex !== null) {

        await API.put(`/events/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

        setEditIndex(null);
        setEditId(null);

      } else {

        await API.post("/events", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

      }

      fetchEvents();

      setEvent({
        title: "",
        image: null,
        imagePreview: "",
        location: "",
        date: "",
        description: ""
      });

    } catch (err) {
      console.log(err);
    }

  };

  /* ================= DELETE ================= */

  const deleteEvent = async (id) => {

    try {

      await API.delete(`/events/${id}`);

      fetchEvents();

    } catch (err) {
      console.log(err);
    }

  };

  /* ================= EDIT ================= */

  const editEvent = (item, index) => {

    setEvent({
      title: item.title,
      location: item.location,
      date: item.date,
      description: item.description,
      image: null,
      imagePreview: item.image ? `${IMAGE_URL}${item.image}` : ""
    });

    setEditIndex(index);
    setEditId(item._id);

  };

  return (
    <div className="space-y-10 w-full max-w-full">

      {/* FORM + PREVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

        {/* FORM */}
        <div className="bg-white p-6 rounded shadow w-full">

          <h2 className="text-xl font-semibold mb-6">
            {editIndex !== null ? "Edit Event" : "Create Event"}
          </h2>

          <div className="flex flex-col gap-4 w-full">

            <div className="w-full">
              <label className="text-sm font-medium">Event Title</label>
              <input
                type="text"
                name="title"
                value={event.title}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={event.location}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-medium">Event Date</label>
              <input
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-medium">Description</label>
              <textarea
                name="description"
                rows="5"
                value={event.description}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-3 rounded"
            >
              {editIndex !== null ? "Update Event" : "Publish Event"}
            </button>

          </div>

        </div>

        {/* LIVE PREVIEW */}
        <div className="bg-white p-6 rounded shadow w-full">

          <h2 className="text-xl font-semibold mb-6">
            Live Preview
          </h2>

          <div className="border rounded overflow-hidden w-full">

            {event.imagePreview && (
              <img
                src={event.imagePreview}
                alt=""
                className="w-full h-52 object-cover"
              />
            )}

            <div className="p-4">

              <h3 className="text-lg font-bold break-words">
                {event.title || "Event Title"}
              </h3>

              <p className="text-sm text-gray-500 break-words">
                {event.location && `${event.location}`} {event.date && `• ${event.date}`}
              </p>

              <p className="text-gray-700 mt-2 break-words">
                {event.description || "Event description preview"}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* EVENT TABLE */}
      <div className="bg-white p-6 rounded shadow w-full">

        <h2 className="text-xl font-semibold mb-6">
          Event List
        </h2>

        <div className="overflow-x-auto max-h-[400px] overflow-y-auto w-full">

          <table className="w-full border">

            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="border p-3">Image</th>
                <th className="border p-3">Title</th>
                <th className="border p-3">Location</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {eventList.map((item, index) => (
                <tr key={item._id} className="text-center">

                  <td className="border p-2">
                    {item.image && (
                      <img
                        src={`${IMAGE_URL}${item.image}`}
                        className="w-16 h-12 object-cover mx-auto"
                        alt=""
                      />
                    )}
                  </td>

                  <td className="border p-2 break-words">{item.title}</td>
                  <td className="border p-2 break-words">{item.location}</td>
                  <td className="border p-2">{item.date}</td>

                  <td className="border p-2">
                    <div className="flex flex-wrap justify-center gap-2">

                      <button
                        onClick={() => editEvent(item, index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteEvent(item._id)}
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