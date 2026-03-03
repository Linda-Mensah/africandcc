import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll tracking
  useEffect(() => {
    const sections = ["home", "about", "programs", "getInvolved"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (type, value) => {
    if (type === "route") {
      return location.pathname === value;
    }

    if (type === "section") {
      return location.pathname === "/" && activeSection === value;
    }

    return false;
  };

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

  const navItemClass = (type, value) =>
    `relative text-sm tracking-wide transition-colors cursor-pointer ${
      isActive(type, value)
        ? "text-[#2C2A27]"
        : "text-[#5C5548] hover:text-[#2C2A27]"
    }`;

  const renderIndicator = (type, value) =>
    isActive(type, value) && (
      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#9B8B78] rounded-full transition-all duration-300" />
    );

  return (
    <nav className="fixed w-full bg-[#f5f0ea]/95 backdrop-blur-md z-50 border-b border-[#9B8B78]/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        <button
          onClick={() => goToSection("home")}
          className="shrink-0 cursor-pointer bg-white"
        >
          <img
            className="w-10 h-10 object-cover"
            src="/adcc-logo-transparent.png"
            alt="ADCC Logo"
          />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "programs", "getInvolved"].map((section) => (
            <button
              key={section}
              onClick={() => goToSection(section)}
              className={navItemClass("section", section)}
            >
              {section === "home"
                ? "Home"
                : section === "about"
                  ? "Who We Are"
                  : section === "programs"
                    ? "Programs"
                    : "Get Involved"}

              {renderIndicator("section", section)}
            </button>
          ))}

          <Link to="/jobs" className={navItemClass("route", "/jobs")}>
            Jobs
            {renderIndicator("route", "/jobs")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#5C5548] hover:text-[#2C2A27]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f5f0ea] border-t border-[#9B8B78]/20 py-4 px-6">
          <div className="flex flex-col space-y-4 items-center">
            {["home", "about", "programs", "getInvolved"].map((section) => (
              <button
                key={section}
                onClick={() => goToSection(section)}
                className={navItemClass("section", section)}
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                    ? "Who We Are"
                    : section === "programs"
                      ? "Programs"
                      : "Get Involved"}
              </button>
            ))}

            <Link
              to="/jobs"
              className={navItemClass("route", "/jobs")}
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
