import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import talentData from "../../api/talentData.json";

const navLinks = [
  { path: "/top-5", label: "Top 5%" },
  { path: "/consulting-services", label: "Consulting & Service" },
  { path: "/clients", label: "Clients" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About Us" },
];

const actionLinks = [
  { path: "/apply-freelancer", label: "Apply as a Freelancer", type: "link" },
  { path: "/hire-top-talent", label: "Hire Top Talent", type: "button" },
  { path: "/login", label: "Log In", type: "link" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLinkClick = (isDropdownLink = false) => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    if (isDropdownLink) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hireTalentLinks = [
    ...Object.keys(talentData).map((key) => ({
      path: `/hire/${key}`,
      label: talentData[key].singularTitle,
    })),
    { path: "/hire-team", label: "Hire a Team" },
  ];

  const ActionButton = ({ to, children, className }) => (
    <Link to={to} onClick={() => handleLinkClick()} className={className}>
      {children}
    </Link>
  );

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            onClick={() => handleLinkClick()}
            className="flex-shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="GeoEspace"
              className="h-10 w-60 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink
              to="/top-5"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              Top 5%
            </NavLink>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="text-sm font-medium text-gray-700 hover:text-emerald-600 flex items-center"
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {hireTalentLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => handleLinkClick(true)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-700 hover:text-emerald-600"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <ActionButton
              to="/apply-freelancer"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              Apply as a Freelancer
            </ActionButton>
            <ActionButton
              to="/hire-top-talent"
              className="bg-[#0B8468] text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 text-sm"
            >
              Hire Top Talent
            </ActionButton>
            <ActionButton
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              Log In
            </ActionButton>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
              <NavLink
                to="/top-5"
                onClick={() => handleLinkClick()}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Top 5%
              </NavLink>
              <div className="block px-3 py-2 text-base font-medium text-gray-700">
                Hire Talent
              </div>
              <div className="pl-3">
                {hireTalentLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(true)}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick()}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                {actionLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick()}
                    className={`block w-full text-left px-3 py-2 rounded-lg font-medium text-base ${
                      link.type === "button"
                        ? "bg-[#0B8468] text-white hover:bg-emerald-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
