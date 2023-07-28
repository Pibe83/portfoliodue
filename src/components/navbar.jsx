import React from 'react';
import '../App.css';
import logo from '../immagini/Black and White Monochrome Tech Logo-PhotoRoom.png-PhotoRoom (1).png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={logo} className="logo"/>
          </div>
          <div className="hidden sm:block ml-auto">
            <div className="flex space-x-4">
              <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium linknavbar" href="#portfolio">Portfolio</a>
              <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium linknavbar" href="chisono">Chi sono</a>

              {/* Terzo link a destra */}
              <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium linknavbar" href="#contatti">Contatti</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
