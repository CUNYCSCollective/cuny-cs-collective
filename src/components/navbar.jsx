import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../imgs/cuny-logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="CUNY logo" className="logo-img" />
          </Link>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/campus"
              className={location.pathname === "/campus" ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={location.pathname === "/events" ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={location.pathname === "/resources" ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
