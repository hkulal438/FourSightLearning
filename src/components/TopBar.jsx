import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-container">
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
        </div>
        <div className="top-links">
          <a href="#" className="top-link">BOOK AN APPOINTMENT</a>
          <a href="#" className="top-link">DOWNLOAD THE APP</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
