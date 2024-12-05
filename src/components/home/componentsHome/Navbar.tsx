import React, { useState } from 'react';
import "../style/navbar.css";
import img1 from "../image/carrito.png"
import img2 from "../image/acceso.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/dashboard">
        <img src={img2} alt="" className="img-nav"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;