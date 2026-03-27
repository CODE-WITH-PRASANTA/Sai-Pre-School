import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import API from "../api/axios";
import Swal from "sweetalert2";
import {
  FaTimes,
  FaHome,
  FaNewspaper,
  FaImages,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserTie,
  FaCommentDots,
  FaBullhorn,
  FaUserPlus,
  FaPhoneAlt,
  FaUserGraduate,
  FaMoneyBillWave,
  FaChevronDown,
  FaRegGem,
  FaSignOutAlt,
    
} from "react-icons/fa";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Teacher Post", path: "/admin/teachers", icon: <FaUserTie /> },
    { name: "Blog Posting", path: "/admin/news", icon: <FaNewspaper /> },
    {
      name: "Advertisements",
      path: "/admin/advertisement",
      icon: <FaBullhorn />,
    },
    {
      name: "Cold Leads",
      path: "/admin/cold-lead",
      icon: <FaUserPlus />,
    },
    {
      name: "Gallery",
      icon: <FaImages />,
      submenu: [
        { name: "Gallery Post", path: "/admin/gallery-post" },
        { name: "Gallery View", path: "/admin/gallery-view" },
      ],
    },
    { name: "Classes", path: "/admin/classes", icon: <FaChalkboardTeacher /> },
    { name: "Event", path: "/admin/event", icon: <FaCalendarAlt /> },

    {
      name: "Testimonials Post",
      path: "/admin/testimonials",
      icon: <FaCommentDots />,
    },
    { name: "Contact", path: "/admin/contact", icon: <FaPhoneAlt /> },
    { name: "Admission", path: "/admin/admission", icon: <FaUserGraduate /> },
    { name: "Fees", path: "/admin/fees", icon: <FaMoneyBillWave /> },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  // 🔥 LOGOUT FUNCTION

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
    });

    if (!confirm.isConfirmed) return;

    try {
      await API.post("/auth/logout");
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.clear();

      Swal.fire("Logged out!", "", "success");

      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      <style>
        {`
          .sidebarScrollHide {
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .sidebarScrollHide::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
          }

          .submenuWrap {
            display: grid;
            grid-template-rows: 0fr;
            opacity: 0;
            transition: grid-template-rows 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease;
            margin-top: 0;
          }

          .submenuWrap.open {
            grid-template-rows: 1fr;
            opacity: 1;
            margin-top: 8px;
          }

          .submenuInner {
            overflow: hidden;
          }
        `}
      </style>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[2px]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 flex flex-col border-r border-white/10
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="shrink-0 border-b border-white/10 px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 text-lg shadow-lg shadow-blue-500/25">
                <FaRegGem />
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-lg font-bold tracking-wide text-white">
                  Admin Panel
                </h2>
                <p className="truncate text-xs text-slate-400">
                  Premium Dashboard
                </p>
              </div>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-base text-white transition hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="sidebarScrollHide flex-1 px-4 py-4">
          <nav className="space-y-2 pb-6">
            {menu.map((item) => {
              const isDropdownOpen = openMenu === item.name;

              return (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMenu(item.name)}
                        className={`group flex w-full items-center justify-between rounded-2xl border px-3 py-3 transition-all duration-300
                        ${
                          isDropdownOpen
                            ? "border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-violet-600/20 shadow-lg shadow-blue-900/10"
                            : "border-transparent bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[17px] transition-all duration-300
                            ${
                              isDropdownOpen
                                ? "bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-md"
                                : "bg-white/5 text-slate-200 group-hover:bg-white/10"
                            }`}
                          >
                            {item.icon}
                          </div>

                          <span className="truncate text-[15px] font-medium text-slate-100">
                            {item.name}
                          </span>
                        </div>

                        <span
                          className={`ml-3 shrink-0 text-xs text-slate-300 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <FaChevronDown />
                        </span>
                      </button>

                      <div
                        className={`submenuWrap ${isDropdownOpen ? "open" : ""}`}
                      >
                        <div className="submenuInner">
                          <div className="ml-6 space-y-2 border-l border-white/10 pl-4">
                            {item.submenu.map((sub) => (
                              <NavLink
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                  `group flex items-center rounded-xl border px-3 py-2.5 text-sm transition-all duration-300
                                  ${
                                    isActive
                                      ? "border-cyan-400/20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300"
                                      : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
                                  }`
                                }
                              >
                                <span className="mr-3 h-2 w-2 rounded-full bg-current opacity-70"></span>
                                <span className="truncate">{sub.name}</span>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-2xl border px-3 py-3 transition-all duration-300
                        ${
                          isActive
                            ? "border-blue-400/30 bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-950/30"
                            : "border-transparent bg-white/[0.03] text-slate-200 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[17px] transition-all duration-300
                            ${
                              isActive
                                ? "bg-white/15 text-white"
                                : "bg-white/5 text-slate-200 group-hover:bg-white/10"
                            }`}
                          >
                            {item.icon}
                          </div>

                          <span className="truncate text-[15px] font-medium tracking-[0.2px]">
                            {item.name}
                          </span>
                        </>
                      )}
                    </NavLink>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* 🔥 LOGOUT BUTTON (BOTTOM) */}
        <div className="mt-auto p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl 
            bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-300"
          >
            <FaSignOutAlt />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
