import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="h-[calc(100vh_-_90px)] flex text-white">
      <div className="w-[40%] h-[calc(100vh_-_90px)] flex flex-col justify-around px-13 py-8 bg-white/10 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <div>
        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all"
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
          <div className="flex gap-3">
            <button className="w-[75%] flex items-center justify-center gap-3 bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
              <FaGoogle /> Google
            </button>
            <button className="w-[75%] flex items-center justify-center gap-3 bg-black text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all">
              <FaApple /> Apple
            </button>
          </div>
        </div>
        </div>
        <p className="mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-400 hover:underline ml-1"
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
      <div className="w-[60%] h-[calc(100vh_-_90px)] bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">Join the Creative Network</h1>
      </div>
    </div>
  );
}