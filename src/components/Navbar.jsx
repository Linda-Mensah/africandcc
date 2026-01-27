import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <button onClick={() => goToSection("home")}>
          <img
            className="w-12 h-12 object-cover"
            src="/adcc-logo-transparent.png"
            alt="ADCC Logo"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => goToSection("home")}
            className="nav-link cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => goToSection("about")}
            className="nav-link cursor-pointer"
          >
            Who We Are
          </button>

          <button
            onClick={() => goToSection("programs")}
            className="nav-link cursor-pointer"
          >
            Programs
          </button>

          <Link to="/careers" className="nav-link cursor-pointer">
            Careers
          </Link>

          <button
            onClick={() => goToSection("contact")}
            className="nav-link cursor-pointer"
          >
            Contact
          </button>
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
            <button onClick={() => goToSection("home")} className="mobile-link">
              Home
            </button>

            <button
              onClick={() => goToSection("about")}
              className="mobile-link"
            >
              Who We Are
            </button>

            <button
              onClick={() => goToSection("programs")}
              className="mobile-link"
            >
              Programs
            </button>

            <Link
              to="/careers"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>

            <button
              onClick={() => goToSection("contact")}
              className="mobile-link"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
