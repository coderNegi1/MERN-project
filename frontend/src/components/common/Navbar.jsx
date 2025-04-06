import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Categoriesnav from './Categoriesnav';
import { useAuth } from '../../contexts/AuthContext.jsx'; // Corrected import path

function Navbar() {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // For dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
              <>
                <div className="relative group">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-300 font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }
                  >
                    Register
                  </NavLink>
                </div>
                <div className="relative group">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-300 font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }
                  >
                    Login
                  </NavLink>
                </div>
              </>
            ) : (
              <li className="relative">
                <button
                  className="text-white hover:text-gray-400"
                  onClick={toggleDropdown}
                >
                  DROPDOWN
                </button>

                {isOpen && (
                  <div className="absolute left-[-130%] bg-gray-700 text-white rounded-md shadow-lg w-48 mt-2 py-4 z-1">
                    <div className="px-4 py-2 hover:bg-gray-600">
                      <NavLink
                        to={`/dashboard/${user?.role === 1 ? 'admin' : 'user'}`}
                        className="block"
                      >
                        Dashboard
                      </NavLink>
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-600">
                      <NavLink onClick={handleLogout} to="/login" className="block">
                        Logout
                      </NavLink>
                    </div>
                    {user?.name && (
                      <div className="mt-2  text-white m-2">
                        <p className='border inline p-2 rounded shadow-2xl '> {user?.name}</p>
                      </div>
                    )}
                  </div>
                )}
              </li>
            )}
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="">
          <marquee className="text-green-600 md:block lg:hidden w-full font-bold text-2xl pb-4">
            Delivery on your Next Day from 09:00 AM to 07:00 PM
          </marquee>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 ">
            <Link to="/" className="block text-gray-300 hover:text-white py-2 px-4">
              Home
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-white py-2 px-4">
              About
            </Link>
            <Link to="/services" className="block text-gray-300 hover:text-white py-2 px-4">
              Services
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white py-2 px-4">
              Contact
            </Link>

            {!isLoggedIn ? (
              <>
                <Link to="/register" className="block text-gray-300 hover:text-white py-2 px-4">
                  Register
                </Link>
                <Link to="/login" className="block text-gray-300 hover:text-white py-2 px-4">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/dashboard/${user?.role === '1' ? 'admin' : 'user'}`}
                  className="block text-gray-300 hover:text-white py-2 px-4"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-gray-300 hover:text-white py-2 px-4"
                >
                  Logout
                </button>
              </>
            )}


            <div className=" text-white ">
              <p className='py-2 px-4  '> {user?.name}</p>
            </div>
          </div>



        )}


      </nav>
      <Categoriesnav />
    </>
  );
}

export default Navbar;