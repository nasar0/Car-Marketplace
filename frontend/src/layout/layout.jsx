import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300 font-sans selection:bg-red-900 selection:text-white overflow-x-hidden relative">
      {/* Global Fog Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black"></div>
        <div className="absolute top-0 left-0 w-[200%] h-full bg-[url('https://raw.githubusercontent.com/daniel-j-h/fog-shader/master/fog.png')] bg-repeat-x animate-fog opacity-30"></div>
        <div className="absolute top-20 left-0 w-[200%] h-full bg-[url('https://raw.githubusercontent.com/daniel-j-h/fog-shader/master/fog.png')] bg-repeat-x animate-fog animation-delay-2000 opacity-20"></div>
      </div>

      <Header />
      <main className="flex-grow relative z-10">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
