import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // ================= LOGIN =================
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem("admin", JSON.stringify(res.data.admin));
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  // ================= REGISTER =================
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        alert("Registration successful 🎉");
        setIsLogin(true); // switch to login
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          {isLogin ? "Admin Login" : "Admin Register"}
        </h2>

        <p className="text-center text-gray-300 mb-6">
          {isLogin ? "Welcome back! Please login" : "Create your account"}
        </p>

        {/* Form */}
        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="space-y-5"
        >

          {/* Name (Register only) */}
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold shadow-lg"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-gray-400 text-sm mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 cursor-pointer ml-1 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-4">
          © 2026 Admin Panel
        </p>

      </div>
    </div>
  );
};

export default Auth;