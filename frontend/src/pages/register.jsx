import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-[inter]">
      {/* Left Side */}
      <div className="hidden md:flex flex-col text-start justify-center pl-10 md:pl-24 w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-950 text-white p-6 md:p-10">
        <div>
          <img src="/images/star-png.png" alt="*" className="w-96 " />
        </div>
        <div className="p-4 mt-1">
          <h1 className="text-3xl md:text-4xl font-bold mt-2 ">Join <span className="uppercase">mern</span>mart</h1>
          <p className="mt-4 text-base md:text-lg max-w-md">
            Create an account to start your journey with us. Enjoy exclusive deals and seamless shopping!
          </p>
        </div>
      </div>

      {/* Right Side (Register Form) */}
      <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-32 flex flex-col justify-center align-middle">
        <h2 className="text-2xl  text-start mb-4 uppercase font-bold my-3">Create an Account</h2>
        <p className="text-start mb-5 text-xl mt-4">
          Fill in the details below to register and start shopping with us.
        </p>
        <hr />
        <form className="w-full ">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border-b-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border-b-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border-b-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="mobile number"
            className="w-full p-3 border-b-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <input
            type="text"
            placeholder="address"
            className="w-full p-3 border-b-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
          >
            Register Now
          </button>
        </form>
        <p className="text-md md:text-md mb-4 text-start mt-4 flex">
          <p><span> Already have an account?</span ></p>
          <NavLink to="/login" className="text-blue-600 ms-4"> Login here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
