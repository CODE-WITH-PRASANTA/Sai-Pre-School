import { NavLink } from "react-router-dom";

import {
  FaTimes,
  FaHome,
  FaNewspaper,
  FaImages,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserTie,
  FaCommentDots,
} from "react-icons/fa";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "News", path: "/admin/news", icon: <FaNewspaper /> },
    { name: "Gallery", path: "/admin/gallery", icon: <FaImages /> },
    { name: "Event", path: "/admin/event", icon: <FaCalendarAlt /> },
    { name: "Classes", path: "/admin/classes", icon: <FaChalkboardTeacher /> },
    { name: "Teacher Post", path: "/admin/teachers", icon: <FaUserTie /> },
    { name: "Testimonials Post", path: "/admin/testimonials", icon: <FaCommentDots /> },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white
        transition-all duration-300 z-50
        ${sidebarOpen ? "w-64 translate-x-0" : "w-20 -translate-x-full"}
        lg:translate-x-0`}
      >

        <div className="flex items-center justify-between p-6 border-b border-gray-700">

          <span className="font-bold text-lg">
            {sidebarOpen ? "Admin Panel" : "AP"}
          </span>

          <button
            className="text-xl lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        <nav className="p-4 space-y-2">

          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded transition
                ${isActive ? "bg-blue-600" : "hover:bg-gray-800"}`
              }
            >

              {item.icon}

              {sidebarOpen && item.name}

            </NavLink>
          ))}

        </nav>

      </div>
    </>
  );
}