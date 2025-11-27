import React from 'react'
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 pt-16 pb-8 relative overflow-hidden">
       {/* Background Texture */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50 pointer-events-none"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-red-900/20 p-2 rounded-lg border border-red-900/50">
                <Car className="text-red-500" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                GOTHAM<span className="text-gray-600">CARS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Premium vehicles for the darkest nights. Verified, armored, and ready for anything the city throws at you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Inventory</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Armored SUVs</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Sports & Pursuit</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Classics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact Base</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-red-900" />
                <span>1007 Mountain Dr, Gotham City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-red-900" />
                <span>+1 (555) 0198-BAT</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red-900" />
                <span>secure@gothamcars.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Encrypted Comms</h3>
            <p className="text-xs text-gray-500 mb-4">Join our secure network for new inventory alerts.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter frequency..." 
                className="bg-gray-900 border border-gray-800 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-red-900 transition-colors"
              />
              <button className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 font-bold transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2024 Gotham Cars. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;;
