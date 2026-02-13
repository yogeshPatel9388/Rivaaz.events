import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Heart, Mail, Lock, User, Loader2, Sparkles } from "lucide-react";
import api from "../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Direct API call for registration
      await api.post("/auth/register", formData);

      // On success, redirect to login so they can sign in
      // Or you can automatically log them in here
      navigate("/login", {
        state: { message: "Account created! Please login." },
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-rivaaz-rose flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-romantic p-10 space-y-8 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-rivaaz-red/5 rounded-full blur-3xl"></div>

        <div className="text-center">
          <div className="inline-flex p-4 bg-rivaaz-rose rounded-3xl text-rivaaz-red mb-4">
            <Sparkles size={32} />
          </div>
          <h2 className="text-4xl font-black font-tradition text-rivaaz-dark">
            Start Planning
          </h2>
          <p className="text-slate-400 font-modern font-bold uppercase tracking-widest text-[10px] mt-2">
            Create your shared wedding account
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            {/* Names Input (e.g., Michael & Juliet) */}
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="text"
                name="names"
                required
                placeholder="Partner Names (e.g. Michael & Juliet)"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-modern focus:ring-2 focus:ring-rivaaz-red/20 outline-none transition-all"
                value={formData.names}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-modern focus:ring-2 focus:ring-rivaaz-red/20 outline-none transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Create Password"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-modern focus:ring-2 focus:ring-rivaaz-red/20 outline-none transition-all"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-rivaaz-red text-white rounded-2xl font-black text-lg font-modern shadow-lg shadow-rose-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
          </button>
        </form>

        <p className="text-center text-slate-400 font-modern text-xs font-bold">
          Already have an account?{" "}
          <Link to="/login" className="text-rivaaz-red hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
