import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import Categoriesnav from './Categoriesnav'
import AppRoutes from '../../routes/publicRoutes';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black ">
        <div className=" mx-auto flex justify-between space-x-4  items-center">
          <div className=''>
            <Logo />
          </div>
          <marquee className="text-green-600 hidden  lg:block  p-2 w-96 font-bold text-2xl ">  Delivery on your Next Day from 09:00 AM to 07:00 PM</marquee>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-14 uppercase text-[16px] ">
            {/* Main Menu Items */}
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

            <div className="relative group">
              <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            </div>
          </div>


          {/* Mobile Hamburger Menu */}
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
        <div className=''>
          <marquee className="text-green-600  md:block lg:hidden w-full font-bold text-2xl pb-4">  Delivery on your Next Day from 09:00 AM to 07:00 PM</marquee>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <Link to="/" className="block text-gray-300 hover:text-white py-2 px-4">Home</Link>
            <Link to="/about" className="block text-gray-300 hover:text-white py-2 px-4">About</Link>
            <Link to="/services" className="block text-gray-300 hover:text-white py-2 px-4">Services</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white py-2 px-4">Contact</Link>
            <Link to="/login" className="block text-gray-300 hover:text-white py-2 px-4">Login</Link>

            {/* <div className="text-white py-3 px-4">  Delivery on your Next Day from 09:00 AM to 07:00 PM</div> */}

          </div>
        )}
      </nav>
      <Categoriesnav />
    </>
  );
}

export default Navbar;
