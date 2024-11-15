import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/NotFound.css";
import img1 from "../image/notfound.jpg";

const NotFound = () => {
  const navigate = useNavigate();

  const volver = () => {
    navigate("/")
  };

  return (
    <div className="notfound-container">
      <img src={img1} alt="Página no encontrada" className="notfound-image" />
      <div className="notfound-content">
        <h1 className="notfound-text">404</h1>
        <p className="notfound-message">Lo sentimos, esta página no funciona.</p>
      <button
      onClick={volver}
      className="button"
      >
        volver
      </button>
      </div>
    </div>
  );
};

export default NotFound;