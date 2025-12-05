import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <a href="#">
          <img
            className="w-12 h-12 object-cover"
            src="/adcc-logo-transparent.png"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
          >
            Who We Are
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#programs"
            className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
          >
            Programs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#events"
            className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
          >
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* <a
            href="#store"
            className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
          >
            Store
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
          </a> */}

          <a
            href="#contact"
            className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-amber-800 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-amber-800 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </a>

            <a
              href="#programs"
              className="text-gray-700 hover:text-amber-800 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>

            <a
              href="#events"
              className="text-gray-700 hover:text-amber-800 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>

            {/* <a
              href="#store"
              className="text-gray-700 hover:text-amber-800 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </a> */}

            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-800 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
