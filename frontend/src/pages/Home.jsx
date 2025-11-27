import React from "react";
import { Link } from "react-router-dom";
import { Search, Car, Shield, TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Los mejores coches <br />
              <span className="text-blue-400">nuevos y de segunda mano</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Encuentra el coche de tus sueños en CarPlace. Miles de opciones
              verificadas esperándote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/buscador"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Buscar coches
              </Link>
              <Link
                to="/cars"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition"
              >
                Ver todos los coches
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 text-lg">
              La mejor experiencia en compra de vehículos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200  hover:scale-110 ">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6  transition-transform duration-300 shadow-lg">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                +5.000 vehículos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La mayor selección de coches nuevos y de ocasión, todos
                verificados y listos para conducir.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200   hover:scale-110">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                100% Garantizado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Inspección completa de 150 puntos y garantía extendida en todos
                nuestros vehículos.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:scale-110">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Financiación flexible
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Planes de financiación personalizados desde 0% TAE. Aprobación
                en 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coches Nuevos Section - Mejorado */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Coches nuevos
              </h2>
              <p className="text-gray-600 text-lg max-w-xl">
                Estrena tu próximo vehículo con garantía oficial del fabricante
              </p>
            </div>
            <Link
              to="/cars"
              className="hidden md:inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "SUV Premium", price: "45.900", badge: "Más vendido" },
              { name: "Deportivo", price: "38.500", badge: "Nuevo" },
              { name: "Familiar", price: "32.900", badge: "Oferta" },
            ].map((car, index) => (
              <Link
                key={index}
                to="/cars"
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {car.badge}
                </div>

                {/* Image placeholder con gradiente animado */}
                <div className="relative h-56 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <Car
                    className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                    size={80}
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-2xl mb-2 text-gray-900">
                    {car.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {car.price}€
                    </span>
                    <span className="text-gray-500 text-sm">
                      o desde 299€/mes
                    </span>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Ver detalles</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/cars"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
            >
              Ver todos los coches nuevos
            </Link>
          </div>
        </div>
      </section>

      {/* Coches Segunda Mano Section - Mejorado */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                Coches de ocasión
              </h2>
              <p className="text-gray-600 text-lg max-w-xl">
                Vehículos certificados con la mejor relación calidad-precio
              </p>
            </div>
            <Link
              to="/cars"
              className="hidden md:inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sedán 2021",
                price: "18.900",
                km: "45.000 km",
                year: "2021",
              },
              {
                name: "Compacto 2022",
                price: "15.500",
                km: "28.000 km",
                year: "2022",
              },
              {
                name: "Monovolumen 2020",
                price: "22.900",
                km: "52.000 km",
                year: "2020",
              },
            ].map((car, index) => (
              <Link
                key={index}
                to="/cars"
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Certified badge */}
                <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Shield size={14} />
                  Certificado
                </div>

                {/* Image placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <Car
                    className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                    size={80}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">
                    {car.name}
                  </h3>

                  {/* Info badges */}
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {car.year}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {car.km}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      {car.price}€
                    </span>
                    <span className="text-gray-500 text-sm">
                      o desde 189€/mes
                    </span>
                  </div>

                  <div className="flex items-center text-gray-900 font-semibold group-hover:gap-2 transition-all">
                    <span>Ver detalles</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/cars"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
            >
              Ver todos los coches de ocasión
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para encontrar tu coche ideal?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Más de 10.000 clientes satisfechos ya encontraron su vehículo
            perfecto con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buscador"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Search size={24} />
              Comenzar búsqueda
            </Link>
            <Link
              to="/cars"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-white/20"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
