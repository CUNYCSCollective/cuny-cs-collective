import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../imgs/cuny-logo.jpg';

const Navbar = () =>{
    const location = useLocation();

    return(
        <nav className="navbar">
            <div className="logo">
                    <img src={logo} alt="CUNY logo" />
            </div>
            {/* 
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="CUNY logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/campus">Campus</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
            */}
        </nav>
    );
};

export default Navbar;