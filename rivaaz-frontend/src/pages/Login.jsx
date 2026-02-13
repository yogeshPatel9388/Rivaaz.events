import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Heart, Mail, Lock, Loader2, ArrowRight } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Capture success message from Signup redirect
  const successMsg = location.state?.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      // Send them to the dashboard or where they were trying to go
      const origin = location.state?.from?.pathname || "/";
      navigate(origin);
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-rivaaz-rose flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-romantic p-10 space-y-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rivaaz-red/5 rounded-full blur-3xl"></div>

        <div className="text-center">
          <div className="inline-flex p-4 bg-rivaaz-rose rounded-3xl text-rivaaz-red mb-4">
            <Heart fill="currentColor" size={32} />
          </div>
          <h2 className="text-4xl font-black font-tradition text-rivaaz-dark">
            Welcome Back
          </h2>
          <p className="text-slate-400 font-modern font-bold uppercase tracking-widest text-[10px] mt-2">
            Continue planning your dream wedding
          </p>
        </div>

        {/* Success/Error Alerts */}
        {successMsg && !error && (
          <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl text-xs font-bold font-modern border border-emerald-100 text-center animate-bounce">
            {successMsg}
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold font-modern border border-red-100 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-modern focus:ring-2 focus:ring-rivaaz-red/20 outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-modern focus:ring-2 focus:ring-rivaaz-red/20 outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-rivaaz-red text-white rounded-2xl font-black text-lg font-modern shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Login to Rivaaz
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-slate-400 font-modern text-xs font-bold">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-rivaaz-red hover:underline decoration-2 underline-offset-4"
            >
              Create your registry
            </Link>
          </p>
          <p className="text-[10px] text-slate-300 uppercase font-black tracking-tighter">
            Join 2,500+ couples planning today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
