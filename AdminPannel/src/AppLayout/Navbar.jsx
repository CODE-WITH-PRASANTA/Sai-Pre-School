import { FaBars } from "react-icons/fa";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="sticky top-0 z-40 h-16 bg-white shadow flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        {/* Hamburger Menu */}
        <button
          className="text-xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        <h2 className="text-xl font-semibold">
          Admin Dashboard
        </h2>

      </div>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </div>

    </div>
  );
}