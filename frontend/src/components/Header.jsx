import React from "react";
import { Link } from "react-router-dom";
import { Heart, Search, User, MessageCircleMore } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gray-200">
      <header className="bg-black shadow-[0_5px_5px_rgba(0,0,0,0.6)]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-white">
            Car<span className="text-blue-600">Place</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-white">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/cars" className="hover:text-blue-600 transition">
              Coches
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/buscador" className=" p-2 rounded-full transition ">
              <Search className="text-white hover:text-blue-600" size={20} />
            </Link>

            <Link to="/favorites" className=" p-2 rounded-full transition ">
              <Heart className="text-white hover:text-blue-600" size={20} />
            </Link>

            <Link to="/profile" className=" p-2 rounded-full transition ">
              <User className="text-white hover:text-blue-600" size={20} />
            </Link>
          </div>
        </nav>
      </header>
        <Link to="/chat" className="bg-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 p-2 rounded-full fixed z-50 bottom-10 right-10">
              <MessageCircleMore className="text-black hover:text-white transition-all duration-300 " size={20}/>
          </Link>
    </div>
  );
};

export default Header;
