import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X, User, LogOut, Heart, MessageSquare, Car } from "lucide-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-red-900/20 p-2 rounded-lg border border-red-900/50 group-hover:border-red-500 transition-colors">
              <Car className="text-red-500" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-red-500 transition-colors">
              GOTHAM<span className="text-gray-500">CARS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/cars"
              className="text-gray-400 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              Inventory
            </Link>
            <Link
              to="/buscador"
              className="text-gray-400 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              Search
            </Link>

            <Link
              to="/create-ad"
              className="bg-red-900/80 hover:bg-red-800 text-white px-5 py-2 rounded font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_15px_rgba(153,27,27,0.5)] flex items-center gap-2"
            >
              <Car size={16} />
              Sell Car
            </Link>

            {user ? (
              <div className="flex items-center gap-6 pl-6 border-l border-gray-800">
                <Link
                  to="/favorites"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Heart size={20} />
                </Link>
                <Link
                  to="/chat"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <MessageSquare size={20} />
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <span className="font-bold">{user.name}</span>
                    <User size={20} />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors first:rounded-t-lg"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-900/20 transition-colors last:rounded-b-lg flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 pl-6 border-l border-gray-800">
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-red-900/80 hover:bg-red-800 text-white px-5 py-2 rounded font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_15px_rgba(153,27,27,0.5)]"
                >
                  Join
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/cars"
              className="block text-gray-400 hover:text-white py-2 uppercase tracking-wider"
            >
              Inventory
            </Link>
            <Link
              to="/buscador"
              className="block text-gray-400 hover:text-white py-2 uppercase tracking-wider"
            >
              Search
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block text-gray-400 hover:text-white py-2"
                >
                  Profile
                </Link>
                <Link
                  to="/favorites"
                  className="block text-gray-400 hover:text-white py-2"
                >
                  Favorites
                </Link>
                <Link
                  to="/chat"
                  className="block text-gray-400 hover:text-white py-2"
                >
                  Messages
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-red-500 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                <Link
                  to="/login"
                  className="block text-center text-gray-400 hover:text-white py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-center bg-red-900 text-white py-3 rounded font-bold uppercase"
                >
                  Join
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
