import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Nabar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="https://png.pngtree.com/png-clipart/20220922/original/pngtree-letter-v-icon-png-image_8627704.png" alt="Volvo Logo" />
          <span>olvo</span>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          <li className="dropdown">
            <Link to="/rooms">Rooms ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/rooms/single">Single Room</Link></li>
              <li><Link to="/rooms/double">Double Room</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/news">News ▼</Link>
            <ul className="dropdown-menu">
              <li><Link to="/news/latest">Latest News</Link></li>
              <li><Link to="/news/updates">Updates</Link></li>
            </ul>
          </li>

       
          <li><Link to="/contact" className="contact-btn">Contacts</Link></li>
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
