import React from "react";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-[inter]">
      {/* Left Side */}
      <div className="hidden md:flex flex-col text-start justify-center pl-10 md:pl-24 w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-950 text-white p-6 md:p-10">
        <div>
          <img src="/images/star-png.png" alt="*" className="w-96 " />
        </div>
        <div className="p-4 mt-1">
          <h1 className="text-3xl md:text-4xl font-bold mt-2 ">Forgot Your Password ?</h1>
          <p className="mt-4 text-base md:text-lg max-w-md">
            No worries! Enter your registered email, and we'll send you a link to reset your password.
          </p>
        </div>
      </div>

      {/* Right Side (Forgot Password Form) */}
      <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-32 flex flex-col justify-center align-middle mt-60">
        <h2 className="text-lg md:text-xl text-start mb-5 uppercase font-bold ">Reset Your Password</h2>
        <p className="text-start mb-5 text-xl">
          Enter your email address below, and we will send you a password reset link.
        </p>
        <hr />
        <form className="w-full ">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border-b-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-md md:text-md mb-4 text-start mt-4">
          <NavLink to="/login" className="text-blue-600">Back to Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
