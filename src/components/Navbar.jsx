import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);

  const toggleDropdown = (index) => {
    if (isMobile) {
      setDropdownOpen(dropdownOpen === index ? null : index);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>FourSight<span>Learning</span></h1>
        </div>

        <div className={`nav-menu ${menuActive ? "active" : ""}`}>
          <div className={`nav-item dropdown ${dropdownOpen === 1 ? "active" : ""}`} onClick={() => toggleDropdown(1)}>
            ABOUT US <FaChevronDown />
            <div className="dropdown-content">
              <a href="./Pages/About.html">THE COMPANY</a>
              <a href="#">OUR TEAM</a>
              <a href="#">WHY 4SightLearning</a>
            </div>
          </div>

          <div className={`nav-item dropdown ${dropdownOpen === 2 ? "active" : ""}`} onClick={() => toggleDropdown(2)}>
            SERVICES <FaChevronDown />
          </div>
          <a href="#" className="nav-item">COURSES</a>
          <a href="#" className="nav-item">EVENTS</a>
          <a href="#" className="nav-item">RESOURCES</a>
          <a href="#" className="nav-item">BLOG</a>
          <a href="#" className="nav-item">GALLERY</a>
          <div className={`nav-item dropdown ${dropdownOpen === 3 ? "active" : ""}`} onClick={() => toggleDropdown(3)}>
            CONTACT US <FaChevronDown />
          </div>
        </div>

        <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
