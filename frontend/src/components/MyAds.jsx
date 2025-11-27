import React from "react";
import { Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const MyAds = () => {
  // Mock data - replace with API call
  const myAds = [
    {
      id: 1,
      title: "Armored Batmobile 2024",
      price: "1,500,000",
      status: "Active",
      views: 1240,
    },
    {
      id: 2,
      title: "Gotham PD Cruiser",
      price: "45,000",
      status: "Pending",
      views: 45,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">My Garage Assets</h2>
        <Link
          to="/create-ad"
          className="text-red-500 hover:text-red-400 text-sm font-bold uppercase tracking-wider"
        >
          + Add New Asset
        </Link>
      </div>

      <div className="grid gap-4">
        {myAds.map((ad) => (
          <div
            key={ad.id}
            className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-24 h-16 bg-gray-800 rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=200"
                  alt={ad.title}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{ad.title}</h3>
                <p className="text-gray-500 text-sm">€{ad.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Eye size={16} />
                <span>{ad.views}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  ad.status === "Active"
                    ? "bg-green-900/30 text-green-500 border border-green-900"
                    : "bg-yellow-900/30 text-yellow-500 border border-yellow-900"
                }`}
              >
                {ad.status}
              </span>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-900/20 rounded transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAds;
