import React, { useState } from 'react';
import "../style/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
        <a href="#promo" className="nav-item" onClick={() => setIsOpen(false)}>Promos</a>
        <Link to="/Informacion" className="nav-item">Informacion</Link>
        <Link to="/profile" className="nav-item">Profesionales</Link>
      </div>
    </nav>
  );
};

export default Navbar;

