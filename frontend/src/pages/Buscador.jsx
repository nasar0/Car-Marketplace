import React, { useState } from "react";
import { Search, Filter, Sliders, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Buscador = () => {
  const [activeFilters, setActiveFilters] = useState({
    brand: "",
    model: "",
    year: "",
    priceRange: "",
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            DATABASE QUERY
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Access the network. Locate specific assets across all districts.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-2xl mb-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-4 relative">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
                size={24}
              />
              <input
                type="text"
                placeholder="Search by keywords (e.g. 'Armored', 'V8', 'Stealth')..."
                className="w-full bg-black border border-gray-700 text-white pl-16 pr-6 py-6 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
              />
            </div>

            {/* Filters */}
            <div className="relative">
              <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">
                Manufacturer
              </label>
              <div className="relative">
                <select className="w-full bg-black border border-gray-700 text-white px-4 py-4 rounded-lg appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option value="">Any Brand</option>
                  <option value="wayne">Wayne Enterprises</option>
                  <option value="lex">LexCorp</option>
                  <option value="kord">Kord Industries</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">
                Asset Type
              </label>
              <div className="relative">
                <select className="w-full bg-black border border-gray-700 text-white px-4 py-4 rounded-lg appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option value="">All Types</option>
                  <option value="suv">Armored SUV</option>
                  <option value="sport">Pursuit Vehicle</option>
                  <option value="sedan">Executive Transport</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">
                District
              </label>
              <div className="relative">
                <select className="w-full bg-black border border-gray-700 text-white px-4 py-4 rounded-lg appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option value="">All Districts</option>
                  <option value="downtown">Downtown</option>
                  <option value="narrows">The Narrows</option>
                  <option value="burnside">Burnside</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(30,58,138,0.4)] h-[58px] mt-auto">
              <Filter size={20} />
              Execute Filter
            </button>
          </div>
        </div>

        {/* Results Placeholder */}
        <div className="text-center py-20 border-2 border-dashed border-gray-800 rounded-3xl bg-gray-900/20">
          <Sliders className="mx-auto text-gray-600 mb-4" size={48} />
          <h3 className="text-2xl font-bold text-gray-400 mb-2">
            Awaiting Query Parameters
          </h3>
          <p className="text-gray-600">
            Initiate a search to retrieve asset data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
