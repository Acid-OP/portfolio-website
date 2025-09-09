"use client";
import { useState } from "react";
import EmailLink from "./EmailLink";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="w-full h-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left side - Logo section */}
          <div className="flex items-end space-x-4">
            {/* Triangle PNG icon */}
            <div className="w-14 h-14">
              <img 
                src="/triangle.png" 
                alt="Triangle logo" 
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0) drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)' }}
              />
            </div>
            <div className="w-3 h-3 bg-orange-500 rounded-full mb-1"></div>
            <EmailLink />
          </div>

          {/* Right side - Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-12 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              {/* Sun icon */}
              <svg
                className={`absolute inset-0 w-5 h-5 text-gray-600 transition-all duration-500 transform ${
                  isDark ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {/* Moon icon */}
              <svg
                className={`absolute inset-0 w-5 h-5 text-gray-600 transition-all duration-500 transform ${
                  isDark ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}