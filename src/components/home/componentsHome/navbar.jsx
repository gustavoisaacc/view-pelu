import React, { useState } from 'react';
import "../style/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title">Mi Sitio</h1>
      </div>
    </nav>
  );
};

export default Navbar;