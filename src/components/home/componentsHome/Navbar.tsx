import React, { useState } from 'react';
import "../style/navbar.css";
import img1 from "../image/carrito.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img src={img1} alt="" className="img-nav"/>
      </div>
    </nav>
  );
};

export default Navbar;