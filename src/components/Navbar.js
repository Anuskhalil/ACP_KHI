import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const location = useLocation();
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setIsSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleSubSubMenu = (parentMenu, subMenu) => {
    setIsSubMenuOpen((prevState) => ({
      ...prevState,
      [`${parentMenu}-${subMenu}`]: !prevState[`${parentMenu}-${subMenu}`],
    }));
  };

  const closeAllSubMenus = () => {
    setIsSubMenuOpen({});
  };

  const isActiveLink = (path) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        closeAllSubMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    closeAllSubMenus();
  }, [location]);

  // Helper function to create nested submenus
  const renderSubMenu = (parentMenu, items) => {
    return (
      <ul className={`absolute left-full top-0 mt-0 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50 ${isSubMenuOpen[parentMenu] ? "block" : "hidden"}`}>
        {items.map((item) => (
          <li key={item.to} className="relative group">
            <Link
              to={item.to}
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${item.subItems ? "flex items-center justify-between" : ""}`}
              onClick={closeAllSubMenus} // Close all when a direct link is clicked
            >
              {item.label}
              {item.subItems && (
                <svg className={`h-4 w-4 ml-1 transition-transform ${isSubMenuOpen[`${parentMenu}-${item.label}`] ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </Link>
            {item.subItems && <div className={` ${isSubMenuOpen[`${parentMenu}-${item.label}`] ? "block" : "hidden"}`}>{renderSubMenu(`${parentMenu}-${item.label}`, item.subItems)}</div>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="bg-[#111827] shadow fixed w-full z-50" ref={navbarRef}>
      <nav className="bg-[#111827] shadow-lg relative">
        <div className="container mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src="https://acpkhi.com/logo.png" alt="Arts Council Logo" className="w-14 h-14" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className={`text-white hover:text-[#15803D] ${isActiveLink("/") ? "font-bold text-green-700" : ""}`}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/Events" className={`text-white hover:text-[#15803D] ${isActiveLink("/Events") ? "font-bold text-green-700" : ""}`}>
                  Events
                </Link>
              </li>

              {/* Production Dropdown */}
              <li className="relative group">
                <button className="text-white hover:text-[#15803D]" onClick={() => toggleSubMenu("production")}>
                  Production
                  <svg className={`inline-block h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["production"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* First Level Submenu */}
                <ul className={`absolute left-0 mt-4 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50 ${isSubMenuOpen["production"] ? "block" : "hidden"}`}>
                  <li>
                    <Link to="/production/films" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeAllSubMenus}>
                      Festival
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      to="/production/theatre"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center justify-between"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        toggleSubSubMenu("production", "events");
                      }}
                    >
                      Events
                      <svg className={`h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["production-events"] ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    {/* Second Level Submenu */}
                    {renderSubMenu("production-events", [
                      { to: "/production/theatre/event1", label: "Event 1" },
                      { to: "/production/theatre/event2", label: "Event 2" },
                    ])}
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/AcademiesPage" className={`text-white hover:text-[#15803D] ${isActiveLink("/AcademiesPage") ? "font-bold text-[#15803D]" : ""}`}>
                  Academies
                </Link>
              </li>

              <li>
                <Link to="/VenuesPage" className={`text-white hover:text-[#15803D] ${isActiveLink("/VenuesPage") ? "font-bold text-[#15803D]" : ""}`}>
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/cafeteria" className={`text-white hover:text-[#15803D] ${isActiveLink("/cafeteria") ? "font-bold text-[#15803D]" : ""}`}>
                  Cafeteria
                </Link>
              </li>

              {/* About Us Dropdown */}
              <li className="relative group">
                <button className="text-white hover:text-[#15803D]" onClick={() => toggleSubMenu("about")}>
                  About Us
                  <svg className={`inline-block h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["about"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* First-level submenu */}
                <ul className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50 ${isSubMenuOpen["about"] ? "block" : "hidden"}`}>
                  <li>
                    <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeAllSubMenus}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/GoverningBody" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeAllSubMenus}>
                      Governing Body
                    </Link>
                  </li>
                  {/* Example of a nested submenu item */}
                  <li className="relative group">
                    <Link
                      to="/TeamMembers"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center justify-between" // Add flex for the arrow
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        toggleSubSubMenu("about", "team"); // Use the new function
                      }}
                    >
                      Team
                      {/* Right-pointing arrow for nested submenu */}
                      <svg className={`h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["about-team"] ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    {/* Second Level Submenu */}
                    {renderSubMenu("about-team", [
                      { to: "/TeamMembers/member1", label: "Member 1" },
                      { to: "/TeamMembers/member2", label: "Member 2" },
                    ])}
                  </li>
                </ul>
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
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-[#111827] shadow-lg w-full left-0  px-6 py-4 z-50`}>
          <ul>
            <li className="py-2">
              <Link to="/" className="text-[#F5F1E1] hover:text-[#15803D]" onClick={closeAllSubMenus}>
                Home
              </Link>
            </li>

            {/* Production Dropdown (Mobile) */}
            <li className="py-2 relative">
              <button onClick={() => toggleSubMenu("mobileProduction")} className="w-full text-left text-[#F5F1E1] hover:text-[#15803D]">
                Production
                <svg className={`inline-block h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["mobileProduction"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSubMenuOpen["mobileProduction"] && (
                <ul className="pl-4 mt-2 space-y-2 z-50">
                  <li>
                    <Link to="/production/films" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                      Films
                    </Link>
                  </li>
                  {/* Nested Submenu for Events (Mobile) */}
                  <li className="relative">
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default link behavior (if any)
                        toggleSubSubMenu("mobileProduction", "events");
                      }}
                      className="w-full text-left block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700 flex items-center justify-between"
                    >
                      Theatre
                      <svg
                        className={`h-4 w-4 ml-1 transition-transform ${
                          isSubMenuOpen["mobileProduction-events"] ? "rotate-90" : "" // Correct key
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7" // Correct arrow direction
                        />
                      </svg>
                    </button>
                    {/* Render the nested submenu */}
                    {isSubMenuOpen["mobileProduction-events"] && (
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <Link to="/production/theatre/event1" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                            Event 1
                          </Link>
                        </li>
                        <li>
                          <Link to="/production/theatre/event2" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                            Event 2
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li className="py-2">
              <Link to="/Events" className="text-[#F5F1E1] hover:text-[#15803D]" onClick={closeAllSubMenus}>
                Events
              </Link>
            </li>
            <li className="py-2">
              <Link to="/AcademiesPage" className="text-[#F5F1E1] hover:text-[#15803D]" onClick={closeAllSubMenus}>
                Academies
              </Link>
            </li>
            <li className="py-2">
              <Link to="/VenuesPage" className="text-[#F5F1E1] hover:text-[#15803D]" onClick={closeAllSubMenus}>
                Venue
              </Link>
            </li>
            <li className="py-2">
              <Link to="/cafeteria" className="text-[#F5F1E1] hover:text-[#15803D]" onClick={closeAllSubMenus}>
                Cafeteria
              </Link>
            </li>
            {/* About Us Dropdown (Mobile) */}
            <li className="py-2 relative">
              <button onClick={() => toggleSubMenu("mobileAbout")} className="w-full text-left text-[#F5F1E1] hover:text-[#15803D]">
                About Us
                <svg className={`inline-block h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["mobileAbout"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSubMenuOpen["mobileAbout"] && (
                <ul className="pl-4 mt-2 space-y-2 z-50">
                  <li>
                    <Link to="/about" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/GoverningBody" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                      Governing Body
                    </Link>
                  </li>
                  {/* Nested Team Submenu (Mobile) */}
                  <li className="relative">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubSubMenu("mobileAbout", "team");
                      }}
                      className="w-full text-left block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700 flex items-center justify-between"
                    >
                      Team
                      {/* Right-pointing arrow */}
                      <svg className={`h-4 w-4 ml-1 transition-transform ${isSubMenuOpen["mobileAbout-team"] ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {/* Team Members */}
                    {isSubMenuOpen["mobileAbout-team"] && (
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <Link to="/TeamMembers/member1" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                            Member 1
                          </Link>
                        </li>
                        <li>
                          <Link to="/TeamMembers/member2" className="block px-4 py-2 text-[#F5F1E1] hover:bg-gray-700" onClick={closeAllSubMenus}>
                            Member 2
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2">
              <Link to="#contact" className="text-[#F5F1E1] hover:text-[#15803D]" onClick={closeAllSubMenus}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
