import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#2C2A27] border-t border-[#9B8B78]/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          {/* Logo & Mission - 5 columns */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <img
              className="w-12 h-12 object-cover opacity-80 mb-4 md:mb-2"
              src="/adcc-logo.png"
              alt="ADCC"
            />
            <div>
              <h3 className="text-[#E5D9CC] text-sm font-medium mb-2 tracking-wide">
                African Diaspora Civic Center
              </h3>
              <p className="text-[#B5AA9C] text-xs leading-relaxed">
                Strengthening Our Global African Identity through cultural
                preservation, community engagement, and leadership development.
              </p>
            </div>
          </div>

          {/* Quick Links - 3 columns */}
          <div className="md:col-span-3 mt-8 md:mt-0">
            <h4 className="text-[#E5D9CC] text-xs font-medium uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {[
                { name: "Home", id: "home" },
                { name: "Who We Are", id: "about" },
                { name: "Programs", id: "programs" },
                { name: "Jobs", path: "/jobs" },
                { name: "Get Involved", id: "getInvolved" },
              ].map((item) => (
                <li key={item.name}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="text-[#B5AA9C] hover:text-[#E5D9CC] text-xs transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => goToSection(item.id)}
                      className="text-[#B5AA9C] hover:text-[#E5D9CC] cursor-pointer text-xs transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 4 columns */}
          <div className="md:col-span-4 mt-8 md:mt-0">
            <h4 className="text-[#E5D9CC] text-xs font-medium uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="mailto:info@africandcc.org"
                  className="flex items-center gap-2 text-[#B5AA9C] hover:text-[#E5D9CC] text-xs transition-colors group"
                >
                  <Mail
                    className="w-3.5 h-3.5 text-[#9B8B78] group-hover:text-[#E5D9CC]"
                    strokeWidth={1.5}
                  />
                  info@africandcc.org
                </a>
              </li>
              <li>
                <a
                  href="tel:360-682-1998"
                  className="flex items-center gap-2 text-[#B5AA9C] hover:text-[#E5D9CC] text-xs transition-colors group"
                >
                  <Phone
                    className="w-3.5 h-3.5 text-[#9B8B78] group-hover:text-[#E5D9CC]"
                    strokeWidth={1.5}
                  />
                  360-682-1998
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-[#B5AA9C] text-xs">
                  <MapPin
                    className="w-3.5 h-3.5 text-[#9B8B78] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span>
                    1235 Pennsylvania Ave SE - #0710
                    <br />
                    Washington, DC 20003
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mt-12 pt-6 border-t border-[#9B8B78]/10 text-center">
          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              // check later
              <a
                key={label}
                href={href}
                className="text-[#9B8B78] hover:text-[#E5D9CC] transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#9B8B78] text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} African Diaspora Civic Center. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
