import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState({});
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSubMenu = (menu) => {
    setIsSubMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleSubSubMenu = (submenu) => {
    setIsSubSubMenuOpen((prev) => ({ ...prev, [submenu]: !prev[submenu] }));
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="bg-[#111827] shadow fixed w-full z-50">
      <nav className="bg-[#111827] shadow-lg relative">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="https://acpkhi.com/logo.png" alt="Arts Council Logo" className="w-14 h-14" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className={`text-white hover:text-[#15803D] ${isActiveLink("/") ? "font-bold text-green-700" : ""}`}>
                  Home
                </Link>
              </li>

              <li className="relative group">
                <button className="text-white hover:text-[#15803D]" onClick={() => toggleSubMenu("production")}>
                  Production
                </button>
                {isSubMenuOpen["production"] && (
                  <ul className="absolute left-0 bg-white shadow-lg mt-2 space-y-2 z-50 w-40">
                    <li className="relative group">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => toggleSubSubMenu("festival")}>
                        Festival ➤
                      </button>
                      {isSubSubMenuOpen["festival"] && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg space-y-2 z-50 w-40">
                          <li>
                            <Link to="/festival/music" className="block px-4 py-2 hover:bg-gray-100">
                              Music
                            </Link>
                          </li>
                          <li>
                            <Link to="/festival/film" className="block px-4 py-2 hover:bg-gray-100">
                              Film
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="/production/events" className="block px-4 py-2 hover:bg-gray-100">
                        Events
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/AcademiesPage" className={`text-white hover:text-[#15803D] ${isActiveLink("/AcademiesPage") ? "font-bold text-green-700" : ""}`}>
                  Academies
                </Link>
              </li>
              <li>
                <Link to="/VenuesPage" className={`text-white hover:text-[#15803D] ${isActiveLink("/VenuesPage") ? "font-bold text-green-700" : ""}`}>
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/cafeteria" className={`text-white hover:text-[#15803D] ${isActiveLink("/cafeteria") ? "font-bold text-green-700" : ""}`}>
                  Cafeteria
                </Link>
              </li>

              <li className="relative group">
                <button className="text-white hover:text-[#15803D]" onClick={() => toggleSubMenu("about")}>
                  About Us
                </button>
                {isSubMenuOpen["about"] && (
                  <ul className="absolute left-0 bg-white shadow-lg mt-2 space-y-2 z-50 w-40">
                    <li>
                      <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/GoverningBody" className="block px-4 py-2 hover:bg-gray-100">
                        Governing Body
                      </Link>
                    </li>
                    <li>
                      <Link to="/TeamMembers" className="block px-4 py-2 hover:bg-gray-100">
                        Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="#contact" className="text-white hover:text-[#15803D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden text-[#F5F1E1] focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#111827] shadow-lg absolute w-full left-0 top-16 px-6 py-4 z-50">
            <ul>
              <li className="py-2">
                <Link to="/" className="text-[#F5F1E1] hover:text-[#15803D]">
                  Home
                </Link>
              </li>

              <li className="py-2 relative">
                <button className="w-full text-left text-[#F5F1E1] hover:text-[#15803D]" onClick={() => toggleSubMenu("mobileProduction")}>
                  Production
                </button>
                {isSubMenuOpen["mobileProduction"] && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <button className="w-full text-left text-[#F5F1E1] hover:text-[#15803D]" onClick={() => toggleSubSubMenu("mobileFestival")}>
                        Festival
                      </button>
                      {isSubSubMenuOpen["mobileFestival"] && (
                        <ul className="pl-4 mt-2 space-y-2">
                          <li>
                            <Link to="/festival/music" className="block text-[#F5F1E1] hover:text-[#15803D]">
                              Music
                            </Link>
                          </li>
                          <li>
                            <Link to="/festival/film" className="block text-[#F5F1E1] hover:text-[#15803D]">
                              Film
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="/production/events" className="block text-[#F5F1E1] hover:text-[#15803D]">
                        Events
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="py-2">
                <Link to="/VenuesPage" className="text-[#F5F1E1] hover:text-[#15803D]">
                  Venue
                </Link>
              </li>
              <li className="py-2">
                <Link to="/cafeteria" className="text-[#F5F1E1] hover:text-[#15803D]">
                  Cafeteria
                </Link>
              </li>
              <li className="py-2">
                <Link to="#contact" className="text-[#F5F1E1] hover:text-[#15803D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
