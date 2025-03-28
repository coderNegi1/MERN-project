import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for client-side routing

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          MinimalNav
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>

        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button 
            className="text-gray-300 hover:text-white focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-gray-300 hover:text-white py-2 px-4">Home</Link>
          <Link to="/about" className="block text-gray-300 hover:text-white py-2 px-4">About</Link>
          <Link to="/services" className="block text-gray-300 hover:text-white py-2 px-4">Services</Link>
          <Link to="/contact" className="block text-gray-300 hover:text-white py-2 px-4">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
