import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} CarPlace - Alquiler de Coches. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
