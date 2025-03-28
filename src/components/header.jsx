import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-[85px] sticky top-0 z-50 w-full backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center">
      <div className="w-full flex items-center justify-between py-4 px-6 md:px-12 relative z-10">
        {/* Logo or Brand Name */}
        <NavLink to="/">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            INFLUENZEE
          </div>
        </NavLink>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="p-[2px] w-[350px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full">
            <input
              type="text"
              placeholder="Search something..."
              aria-label="Search"
              className="input w-full bg-gray-900 text-white rounded-full border-none focus:outline-none focus:ring-0 px-4 py-2"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center font-semibold space-x-4">
          <NavLink to="/content" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            Trending
          </NavLink>
          <NavLink to="/about" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            About us
          </NavLink>
          {location.pathname !== "/login" && (
            <NavLink to="/login">
              <button className="btn btn-md bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all px-4 py-2">
                Join
              </button>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden">
            <nav className="flex flex-col space-y-4 p-6">
              <NavLink to="/content" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                Trending
              </NavLink>
              <NavLink to="/about" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                About us
              </NavLink>
              {location.pathname !== "/login" && (
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all px-4 py-2">
                    Join
                  </button>
                </NavLink>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
