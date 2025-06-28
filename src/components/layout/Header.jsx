import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import talentData from "../../api/talentData.json";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="GeoEspace"
                className="object-contain"
                style={{ width: "240px", height: "40px" }}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/top-5"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Top 5%
            </Link>
            <div className="relative group" ref={dropdownRef}>
              <button
                className="text-gray-700 hover:text-emerald-600 font-medium flex items-center transition-colors duration-200 whitespace-nowrap text-sm"
                onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Hire Talent
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {Object.keys(talentData).map((roleKey, index) => {
                    const role = talentData[roleKey];
                    return (
                      <Link
                        key={roleKey}
                        to={`/hire/${roleKey}`}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 transition-colors duration-200 ${
                          index === 0 ? "rounded-t-lg" : ""
                        }`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {role.singularTitle}
                      </Link>
                    );
                  })}

                  <Link
                    to="/hire-team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 transition-colors duration-200 rounded-b-lg"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Hire a Team
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/consulting-services"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Consulting & Service
            </Link>
            <Link
              to="/clients"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Clients
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
            >
              About Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Apply as a Freelancer
            </a>
            <button className="bg-[#0B8468] text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 whitespace-nowrap text-sm">
              Hire Top Talent
            </button>
            <button className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm">
              Log In
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
            <Link
              to="/top-5"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Top 5%
            </Link>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Hire Talent
            </a>
            <Link
              to="/consulting-services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consulting & Service
            </Link>
            <Link
              to="/clients"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Apply as a Freelancer
              </a>
              <button className="w-full text-left bg-[#0B8468] text-white px-3 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">
                Hire Top Talent
              </button>
              <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
