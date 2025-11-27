import React from "react";
import { Link } from "react-router-dom";
import { Search, Car, Shield, TrendingUp, Ghost, CloudFog } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2574&auto=format&fit=crop"
            alt="Dark City Street"
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-block mb-4 animate-pulse">
            <span className="px-4 py-1 border border-red-900/50 bg-red-950/30 text-red-500 text-sm tracking-[0.3em] uppercase rounded-full backdrop-blur-sm">
              Welcome to the Underworld
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
            DOMINATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-600 text-glow">
              THE SHADOWS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            In a city that never sleeps, you need a machine that survives.
            <span className="block mt-2 text-gray-500 italic">
              Find your beast in the fog.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
            <Link
              to="/buscador"
              className="group relative px-8 py-4 bg-transparent border border-gray-600 text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Search size={20} />
                Initiate Search
              </span>
              <div className="absolute inset-0 bg-blue-900/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>

            <Link
              to="/cars"
              className="group relative px-8 py-4 bg-red-900/20 border border-red-900/50 text-red-100 font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-red-900/40 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
            >
              <span className="relative z-10">View Inventory</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - "The Garage" */}
      <section className="relative py-32 px-6 bg-black z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              WHY SURVIVE WITH US?
            </h2>
            <div className="h-1 w-24 bg-red-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Car size={40} />,
                title: "Armored Selection",
                desc: "Vehicles verified for durability and performance in the harshest conditions.",
                color: "text-blue-500",
                border: "group-hover:border-blue-500/50",
              },
              {
                icon: <Shield size={40} />,
                title: "Ironclad Guarantee",
                desc: "150-point inspection. If it breaks, we fix it. No questions asked.",
                color: "text-green-500",
                border: "group-hover:border-green-500/50",
              },
              {
                icon: <Ghost size={40} />,
                title: "Phantom Financing",
                desc: "Invisible approval process. Get funded in 24 hours with 0% stress.",
                color: "text-purple-500",
                border: "group-hover:border-purple-500/50",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group p-8 bg-gray-900/40 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${feature.border}`}
              >
                <div
                  className={`mb-6 ${feature.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-200 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars - "New Arrivals" */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                FRESH FROM THE FACTORY
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Untouched machines ready for the streets.
              </p>
            </div>
            <Link
              to="/cars"
              className="text-red-500 hover:text-red-400 font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              See All Models <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nightcrawler SUV",
                price: "45,900",
                badge: "BEST SELLER",
              },
              { name: "Shadow Sport", price: "38,500", badge: "NEW ARRIVAL" },
              { name: "Specter Estate", price: "32,900", badge: "LIMITED" },
            ].map((car, index) => (
              <Link
                key={index}
                to="/cars"
                className="group relative block bg-gray-900 border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 z-20 bg-red-900/80 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-md">
                  {car.badge}
                </div>

                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <Car
                      size={80}
                      className="text-gray-600 group-hover:text-gray-400 transition-colors"
                    />
                  </div>
                  {/* Glitch effect overlay on hover could go here */}
                </div>

                <div className="p-8 relative z-20 -mt-12">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {car.name}
                  </h3>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-light text-gray-300">
                      €{car.price}
                    </span>
                  </div>
                  <div className="w-full py-3 border border-gray-700 text-center text-gray-400 text-sm uppercase tracking-widest group-hover:bg-gray-800 group-hover:text-white transition-all">
                    View Details
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter">
            ARE YOU READY?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The city is waiting. Your ride is here. Don't let the fog consume
            you before you make your move.
          </p>

          <Link
            to="/buscador"
            className="inline-flex items-center justify-center gap-3 bg-red-700 hover:bg-red-600 text-white px-12 py-6 text-lg font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(185,28,28,0.4)] clip-path-polygon"
            style={{
              clipPath:
                "polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)",
            }}
          >
            <Search size={24} />
            Start Your Hunt
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
