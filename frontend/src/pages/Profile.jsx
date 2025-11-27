import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MyAds from "../components/MyAds";
import { User, Settings, Shield, Star } from "lucide-react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("garage");

  // Mock user data if context is empty during dev
  const userData = user || {
    name: "Bruce Wayne",
    email: "bruce@wayne.ent",
    role: "Vigilante",
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl text-center backdrop-blur-sm">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-700">
              <User size={40} className="text-gray-500" />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">
              {userData.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{userData.email}</p>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-900/50">
              <Shield size={12} />
              Verified Trader
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("garage")}
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all ${
                activeTab === "garage"
                  ? "bg-red-900/20 text-red-500 border border-red-900/50"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              My Garage
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all ${
                activeTab === "favorites"
                  ? "bg-red-900/20 text-red-500 border border-red-900/50"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Watchlist
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all ${
                activeTab === "settings"
                  ? "bg-red-900/20 text-red-500 border border-red-900/50"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {activeTab === "garage" && <MyAds />}

          {activeTab === "favorites" && (
            <div className="text-center py-20 bg-gray-900/30 border border-gray-800 rounded-xl border-dashed">
              <p className="text-gray-500">
                Your watchlist is empty. Start hunting.
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Account Settings
              </h2>
              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.name}
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={userData.email}
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <button className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
