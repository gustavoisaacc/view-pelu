import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/cardParticular.css";

const CardParticular = ({ title, description, backgroundImage }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/NotFound'); 
  };

  return (
    <div className="card-unica" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card-unica-content">
        <h2 className="card-unica-title">{title}</h2>
        <p className="card-unica-description">{description}</p>
        <button className="card-unica-button" onClick={handleRedirect}>Ver más</button>
      </div>
    </div>
  );
};

export default CardParticular;