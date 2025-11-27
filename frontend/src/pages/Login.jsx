import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    login({ name: "Bruce Wayne", email: "bruce@wayne.ent" });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
          alt="Night City"
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-red-900/20 border border-red-900/50 mb-4 animate-pulse">
            <ShieldCheck size={32} className="text-red-500" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
            SYSTEM ACCESS
          </h1>
          <p className="text-gray-500 uppercase tracking-widest text-xs">
            Restricted Area. Authorized Personnel Only.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-black/60 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
        >
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                Identity Token (Email)
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-red-500 focus:bg-gray-900 transition-all placeholder:text-gray-700"
                  placeholder="agent@gotham.net"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                Security Key (Password)
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="password"
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-red-500 focus:bg-gray-900 transition-all placeholder:text-gray-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-widest py-4 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(153,27,27,0.4)] flex items-center justify-center gap-2 group/btn">
              <span>Initiate Session</span>
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="mt-8 text-center space-y-4">
            <Link
              to="/register"
              className="block text-gray-500 hover:text-white text-sm transition-colors"
            >
              New Agent?{" "}
              <span className="text-red-500 font-bold">Request Clearance</span>
            </Link>
            <a
              href="#"
              className="block text-xs text-gray-600 hover:text-gray-400"
            >
              Lost Security Key?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
