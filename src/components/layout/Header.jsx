
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


// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import talentData from "./../../api/talentData.json";
//
// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//
//   return (
//       <header className="bg-white border-b  border-gray-100 sticky top-0 z-50">
//         <div className=" max-w-container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="h-[92px] flex justify-between items-center">
//             <div className="flex-shrink-0">
//               <Link to="/" className="flex items-center">
//                 <img
//                     src="/images/logo.png"
//                     alt="GeoEspace"
//                     className="object-contain"
//                     style={{ width: "240px", height: "40px" }}
//                 />
//               </Link>
//             </div>
//
//             <nav className="hidden lg:flex items-center space-x-6">
//               <Link
//                   to="/top-5"
//                   className="g-15 text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap "
//               >
//                 Top 5%
//               </Link>
//               <div className="relative group" ref={dropdownRef}>
//                 <button
//                     className="g-15 text-gray-700 hover:text-emerald-600  flex items-center transition-colors duration-200 whitespace-nowrap"
//                     onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   Hire Talent
//                   <svg
//                       className={`w-3 h-3 ml-1 transition-transform duration-200 ${
//                           isDropdownOpen ? "rotate-180" : ""
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                   >
//                     <path
//                         fillRule="evenodd"
//                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//
//                 {isDropdownOpen && (
//                     <div
//                         className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
//                         onMouseLeave={() => setIsDropdownOpen(false)}
//                     >
//                       {Object.keys(talentData).map((roleKey, index) => {
//                         const role = talentData[roleKey];
//                         return (
//                             <Link
//                                 key={roleKey}
//                                 to={`/hire/${roleKey}`}
//                                 className={`g-15 block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-emerald-600 transition-colors duration-200 ${
//                                     index === 0 ? "rounded-t-lg" : ""
//                                 }`}
//                                 onClick={() => setIsDropdownOpen(false)}
//                             >
//                               {role.singularTitle}
//                             </Link>
//                         );
//                       })}
//
//                       <Link
//                           to="/hire-team"
//                           className="g-15 block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-emerald-600 transition-colors duration-200 rounded-b-lg"
//                           onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Hire a Team
//                       </Link>
//                     </div>
//                 )}
//               </div>
//               <Link
//                   to="/consulting-services"
//                   className="g-15 text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap "
//               >
//                 Consulting & Service
//               </Link>
//               <Link
//                   to="/clients"
//                   className="g-15 text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap"
//               >
//                 Clients
//               </Link>
//               <Link
//                   to="/blog"
//                   className="g-15 text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap"
//               >
//                 Blog
//               </Link>
//               <Link
//                   to="/about"
//                   className="text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap g-15"
//               >
//                 About Us
//               </Link>
//             </nav>
//
//             <div className="hidden lg:flex items-center space-x-3">
//               <a
//                   href="#"
//                   className="text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap g-16"
//               >
//                 Apply as a Freelancer
//               </a>
//               <button className="bg-[#0B8468] text-white px-[24px] py-[14px] rounded-lg  hover:bg-emerald-700 transition-colors duration-200 whitespace-nowrap g-16">
//                 Hire Top Talent
//               </button>
//               <button className="text-gray-700 hover:text-emerald-600  transition-colors duration-200 whitespace-nowrap" g-16>
//                 Log In
//               </button>
//             </div>
//
//             <div className="lg:hidden">
//               <button
//                   onClick={toggleMobileMenu}
//                   className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 p-2"
//                   aria-label="Toggle mobile menu"
//               >
//                 <svg
//                     className={`h-6 w-6 transition-transform duration-300 ${
//                         isMobileMenuOpen ? "rotate-90" : ""
//                     }`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                   {isMobileMenuOpen ? (
//                       <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                       />
//                   ) : (
//                       <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4 6h16M4 12h16M4 18h16"
//                       />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//
//           <div
//               className={`lg:hidden transition-all duration-300 ease-in-out ${
//                   isMobileMenuOpen
//                       ? "max-h-96 opacity-100 visible"
//                       : "max-h-0 opacity-0 invisible overflow-hidden"
//               }`}
//           >
//             <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
//               <Link
//                   to="/top-5"
//                   className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Top 5%
//               </Link>
//               <a
//                   href="#"
//                   className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//               >
//                 Hire Talent
//               </a>
//               <Link
//                   to="/consulting-services"
//                   className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Consulting & Service
//               </Link>
//               <Link
//                   to="/clients"
//                   className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Clients
//               </Link>
//               <Link
//                   to="/blog"
//                   className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Blog
//               </Link>
//               <Link
//                   to="/about"
//                   className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//
//               <div className="pt-4 space-y-3 border-t border-gray-200">
//                 <a
//                     href="#"
//                     className="block px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                 >
//                   Apply as a Freelancer
//                 </a>
//                 <button className="w-full text-left bg-[#0B8468] text-white px-3 py-2 rounded-lg  hover:bg-emerald-700 transition-colors duration-200">
//                   Hire Top Talent
//                 </button>
//                 <button className="block w-full text-left px-3 py-2 g-15  text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
//                   Log In
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//   );
// };
//
// export default Header;
