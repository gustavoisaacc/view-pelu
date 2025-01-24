import React, { useState } from 'react';
import "../style/navbar.css";
import img2 from "../image/acceso.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/dashboard">
          <img src={img2} alt="Logo" className="img-nav" />
        </Link>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
        <a href="#promo" className="nav-item" onClick={() => setIsOpen(false)}>Promos</a>
        <a href="#informacion" className="nav-item" onClick={() => setIsOpen(false)}>Información</a>
        <Link to="/profile" className="nav-item">Profesionales</Link>
      </div>
    </nav>
  );
};

export default Navbar;

