import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Utensils } from "lucide-react";

interface HeaderProps {
  onDemoClick?: (demo: "menu" | "pos" | "cms") => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const currentPage = location.pathname.substring(1);

  const getPageTitle = () => {
    switch (currentPage) {
      case "menu":
        return "Digital Menu";
      case "pos":
        return "POS System";
      case "cms":
        return "CMS Platform";
      default:
        return "";
    }
  };

  const getActivePage = () => {
    switch (currentPage) {
      case "menu":
        return "menu";
      case "pos":
        return "pos";
      case "cms":
        return "cms";
      default:
        return "";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-4 px-4" : "bg-white shadow-sm"
      }`}
    >
      <div
        className={`${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200/20 max-w-7xl mx-auto"
            : "max-w-7xl mx-auto"
        }`}
      >
        <div
          className={`flex justify-between items-center ${
            isScrolled ? "py-3 px-6" : "py-4 px-4 sm:px-6 lg:px-8"
          }`}
        >
          {/* Left side - Logo and navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">TableTap</span>
            </Link>

            {!isHomePage && (
              <div className="hidden sm:block text-gray-400">
                <span className="mx-2">•</span>
                <span className="text-orange-500 font-semibold">
                  {getPageTitle()}
                </span>
              </div>
            )}
          </div>

          {/* Center navigation - only on home page */}
          {isHomePage && (
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#why-us"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Why TableTap
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </nav>
          )}

          {/* Product navigation - on product pages */}
          {!isHomePage && (
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/menu"
                className={`transition-colors ${
                  getActivePage() === "menu"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                Digital Menu
              </Link>
              <Link
                to="/pos"
                className={`transition-colors ${
                  getActivePage() === "pos"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                POS System
              </Link>
              <Link
                to="/cms"
                className={`transition-colors ${
                  getActivePage() === "cms"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                CMS Platform
              </Link>
            </nav>
          )}

          {/* Right side - CTA button */}
          <div className="flex items-center space-x-4">
            {isHomePage ? (
              <button
                onClick={() => onDemoClick?.("menu")}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Try Demo
              </button>
            ) : (
              <button
                onClick={() => {
                  const currentDemo = getActivePage() as "menu" | "pos" | "cms";
                  onDemoClick?.(currentDemo);
                }}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Try Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
