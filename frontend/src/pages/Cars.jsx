import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Car } from "lucide-react";

const Cars = () => {
  const [filter, setFilter] = useState("all");

  const cars = [
    {
      id: 1,
      name: "Nightcrawler SUV",
      price: "45,900",
      type: "SUV",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Shadow Sport",
      price: "38,500",
      type: "Sport",
      image:
        "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Specter Estate",
      price: "32,900",
      type: "Estate",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Phantom Sedan",
      price: "28,900",
      type: "Sedan",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Ghost Coupe",
      price: "55,000",
      type: "Coupe",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ed5fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "Dark Knight 4x4",
      price: "62,000",
      type: "SUV",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            INVENTORY
          </h1>
          <p className="text-gray-500 max-w-xl">
            Select your vehicle. All units are verified and ready for immediate
            deployment.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search ID..."
              className="pl-12 pr-6 py-3 bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-red-900 w-64 transition-colors"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Link
            key={car.id}
            to={`/car/${car.id}`}
            className="group block bg-gray-900/50 border border-gray-800 hover:border-red-900/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 uppercase tracking-wider border border-gray-700">
                {car.type}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                {car.name}
              </h3>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-light text-gray-300">
                  €{car.price}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                  View Specs →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cars;
