import { FaBars } from "react-icons/fa";
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="flex h-[74px] w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-base text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-200 hover:bg-slate-50 hover:text-blue-600 hover:shadow-md"
          >
            <FaBars />
          </button>

          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold text-slate-800 sm:text-2xl">
              Admin Dashboard
            </h2>
            <p className="hidden truncate text-sm text-slate-500 sm:block">
              Welcome back, manage everything smoothly
            </p>
          </div>
        </div>

        <div className="mx-8 hidden flex-1 xl:flex xl:max-w-xl">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
              <HiOutlineSearch />
            </span>

            <input
              type="text"
              placeholder="Search dashboard..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:shadow-md"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
          >
            <HiOutlineBell className="text-xl" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-violet-200 hover:text-violet-600 hover:shadow-md sm:flex"
          >
            <FiSettings className="text-lg" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm transition-all duration-300 hover:shadow-md">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="h-10 w-10 rounded-2xl object-cover ring-2 ring-blue-100 sm:h-11 sm:w-11"
            />

            <div className="hidden leading-tight md:block">
              <h4 className="text-sm font-semibold text-slate-800">
                Admin User
              </h4>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}