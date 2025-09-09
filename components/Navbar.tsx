"use client";
import { useState } from "react";

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
          <div className="flex items-center space-x-4">
            {/* Custom SVG shapes icon */}
            <div className="w-5 h-5 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-full h-full" fill="currentColor">
                <path d="M320 64C331.2 64 341.7 69.9 347.4 79.5L443.4 239.5C449.3 249.4 449.5 261.7 443.8 271.7C438.1 281.7 427.5 288 416 288L224 288C212.5 288 201.8 281.8 196.2 271.8C190.6 261.8 190.7 249.5 196.6 239.6L292.6 79.6C298.3 69.9 308.8 64 320 64zM192 336C253.9 336 304 386.1 304 448C304 509.9 253.9 560 192 560C130.1 560 80 509.9 80 448C80 386.1 130.1 336 192 336zM392 352L504 352C526.1 352 544 369.9 544 392L544 504C544 526.1 526.1 544 504 544L392 544C369.9 544 352 526.1 352 504L352 392C352 369.9 369.9 352 392 352z"/>
              </svg>
            </div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-base text-gray-700 font-light">
              gauravkapur596@gmail.com
            </span>
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
