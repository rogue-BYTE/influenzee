import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="h-[85px] sticky top-0 z-50 w-full backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center">
      <div className="w-full flex items-center justify-between py-4 px-12 relative z-10">
        {/* Logo or Brand Name */}
        <NavLink to="/">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            INFLUENZEE
          </div>
        </NavLink>

        {/* Search Bar - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="p-[2px] w-[350px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full">
            <input
              type="text"
              placeholder="Search something..."
              aria-label="Search"
              className="w-full px-5 py-3 font-semibold bg-gray-900 text-white rounded-full border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center font-semibold space-x-4">
          <NavLink to="/content" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            Trending
          </NavLink>
          <NavLink to="/about" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            About us
          </NavLink>
          {location.pathname === "/login" ? null : <NavLink to="/login">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-all">Join</button>
          </NavLink>}
        </nav>
      </div>
    </header>
  );
}