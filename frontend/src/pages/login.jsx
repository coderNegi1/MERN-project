
import React from "react";
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-[inter]">
      {/* Left Side */}
      <div className="hidden md:flex flex-col text-start justify-center pl-10 md:pl-24 w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-950 text-white p-6 md:p-10">
        <div>
          <img src="/images/star-png.png" alt="*" className="w-96 " />
        </div>
        <div className="p-4 mt-1">
          <h1 className="text-3xl md:text-4xl font-bold mt-2 ">Welcome To <span className="uppercase">mern</span>mart</h1>
          <p className="mt-4 text-base md:text-lg max-w-md">
            Skip repetitive and manual sales-marketing tasks. Get highly productive
            through automation and save tons of time!
          </p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-32 flex flex-col justify-center align-middle">
        <h2 className="text-2xl  text-start mb-4 uppercase font-bold">Welcome Back !</h2>
        <p className="text-start mb-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur velit tempora tempore nesciunt quisquam, minima dolorem facere ipsam nemo?
        </p>
        <hr />
        <form className="w-full ">
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
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
          >
            Login Now
          </button>
        </form>
        <button className="mt-4 w-full  flex justify-center items-center gap-2 border py-3 rounded-lg hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
          Login with Google
        </button>
        <p className="text-md md:text-md mb-4 text-start mt-4">
         <p><span> Don't have an account?</span ><span className="ml-9">|</span> <span className="ml-3">or forgot your password?</span></p>
          <NavLink to="/register" className="text-blue-600"> Create a new account now</NavLink>
          <span className="mx-2 md:mx-4">|</span>
          <NavLink to="/forgot-password" className="text-blue-600 font-medium text-center">Forget password?</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
