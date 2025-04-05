import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Intro */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase">MERNMart</h2>
          <p className="text-sm mt-2 text-gray-400">
            Your one-stop shop for all things tech and more!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
          <NavLink to="/policy" className="hover:text-gray-400">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:text-gray-400">Terms</NavLink>
        </div>
      </div>
      
      <hr className="border-gray-700 my-6" />
      
      {/* Social Media and Copyright */}
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} MERNMart. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

