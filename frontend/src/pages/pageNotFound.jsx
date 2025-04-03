import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-white p-6 md:p-10">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/images/404.jpg" alt="404 Not Found" className="max-w-xs md:max-w-md" />
      </div>
      
      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">OOPS <span className="text-red-600">!</span> PAGE NOT FOUND.</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          You must have picked the wrong door because I haven’t been able to lay my eye on the page you’ve been searching for.
        </p>
        <NavLink to="/" className="mt-6 inline-block  text-white px-6 bg-blue-900 py-3 ring-blue-800 p-2 border-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          BACK TO HOME
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
