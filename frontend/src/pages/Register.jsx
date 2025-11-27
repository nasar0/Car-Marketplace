import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Lock, Mail, User, ArrowRight, ShieldAlert } from "lucide-react";

const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock register logic
    login({ name: "New Agent", email: "agent@gotham.net" });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000"
          alt="Dark Garage"
          className="w-full h-full object-cover opacity-20 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-blue-900/20 border border-blue-900/50 mb-4">
            <ShieldAlert size={32} className="text-blue-500" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
            NEW CLEARANCE
          </h1>
          <p className="text-gray-500 uppercase tracking-widest text-xs">
            Join the Network. Buy. Sell. Survive.
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="bg-black/60 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="space-y-5">
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                Codename (Full Name)
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-900 transition-all placeholder:text-gray-700"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                Comms Channel (Email)
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-900 transition-all placeholder:text-gray-700"
                  placeholder="agent@gotham.net"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                Encryption Key (Password)
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="password"
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-900 transition-all placeholder:text-gray-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 text-gray-500 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 bg-gray-900 border-gray-700 rounded text-blue-600 focus:ring-0"
                />
                <span>
                  I accept the{" "}
                  <span className="text-blue-500 hover:underline">
                    Protocol Terms
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-500 hover:underline">
                    Secrecy Agreement
                  </span>
                  .
                </span>
              </label>
            </div>

            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold uppercase tracking-widest py-4 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(30,58,138,0.4)] flex items-center justify-center gap-2 group/btn">
              <span>Grant Access</span>
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="block text-gray-500 hover:text-white text-sm transition-colors"
            >
              Already have clearance?{" "}
              <span className="text-blue-500 font-bold">Log In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
