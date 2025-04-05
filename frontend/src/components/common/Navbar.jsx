import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categoriesnav from './Categoriesnav';
import { useAuth } from '../../contexts/AuthContext'

function Navbar() {
  const { isLoggedIn, logout } = useAuth(); // Use useAuth hook
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black px-4">
        <div className="mx-auto flex justify-between space-x-2 items-center">
          <div className="text-white font-bold">MERNMart</div>
          <marquee className="text-green-600 hidden lg:block p-2 w-96 font-bold text-2xl">
            Delivery on your Next Day from 09:00 AM to 07:00 PM
          </marquee>

          <div className="hidden md:flex md:space-x-14 uppercase text-[16px]">
            <div className="relative group">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            </div>

            <div className="relative group">
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            </div>

            <div className="relative group">
              <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
            </div>

            <div className="relative group">
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>

            {!isLoggedIn ? (
              <div className="relative group">
                <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
              </div>
            ) : (
              <div className="relative group">
                <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
              </div>
            )}

            {!isLoggedIn ? (
              <div className="relative group">
                <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              </div>
            ) : (
              <div className="relative group">
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white uppercase"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="">
          <marquee className="text-green-600 md:block lg:hidden w-full font-bold text-2xl pb-4">
            Delivery on your Next Day from 09:00 AM to 07:00 PM
          </marquee>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <Link to="/" className="block text-gray-300 hover:text-white py-2 px-4">Home</Link>
            <Link to="/about" className="block text-gray-300 hover:text-white py-2 px-4">About</Link>
            <Link to="/services" className="block text-gray-300 hover:text-white py-2 px-4">Services</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white py-2 px-4">Contact</Link>

            {!isLoggedIn ? (
              <Link to="/register" className="block text-gray-300 hover:text-white py-2 px-4">Register</Link>
            ) : (
              <Link to="/dashboard" className="block text-gray-300 hover:text-white py-2 px-4">Dashboard</Link>
            )}

            {!isLoggedIn ? (
              <Link to="/login" className="block text-gray-300 hover:text-white py-2 px-4">Login</Link>
            ) : (
              <button
                onClick={handleLogout}
                className="block text-gray-300 hover:text-white py-2 px-4"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
      <Categoriesnav />
    </>
  );
}

export default Navbar;