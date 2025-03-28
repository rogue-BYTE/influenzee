import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="h-[calc(100vh_-_90px)] flex flex-col md:flex-row text-white">
      <div className="w-full md:w-[40%] h-auto md:h-[calc(100vh_-_90px)] flex flex-col justify-around px-8 md:px-20 py-8 bg-white/10 backdrop-blur-lg">
        <div className="mb-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <h5 className="text-lg md:text-xl font-semibold text-md capitalize bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Influencing made easy with Influenzee
          </h5> 
        </div>
        <div>
          <form className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:opacity-90 transition-all"
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </form>
          <div>
            <div className="my-6 relative text-gray-600 text-center w-full">
              <span className="text-xs before:absolute before:left-0 before:top-1/2 before:w-1/3 before:border-t before:border-gray-600 after:absolute after:right-0 after:top-1/2 after:w-1/3 after:border-t after:border-gray-600">
                or register with
              </span>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row">
              <button className="flex items-center justify-center gap-2 w-full sm:w-[50%] px-5 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all">
                <FaGoogle /> Google
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-[50%] px-5 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-all">
                <FaApple /> Apple
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-400 hover:underline ml-1"
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
      {/* Right Side - Responsive Animated Background */}
      <div className="w-full md:w-[60%] h-[calc(50vh)] md:h-[calc(100vh_-_90px)] animate-gradient flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
          Join the Creative Network
        </h1>
      </div>
    </div>
  );
}