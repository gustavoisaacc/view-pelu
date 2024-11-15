import React from 'react';
import "../style/cardCuadruple.css";
import imagen1 from "../image/tajetas.png";
//import imagen2 from "../image/megafono.png";
import imagen3 from "../image/ubicacion.png";
import imagen4 from "../image/whatsapp.png";

const CardCuadruple = () => {
  return (
    <div className="cards-grid">
      <div className="card">
        <img src={imagen1} alt="Imagen 1" className="card-image" />
        <h2 className="card-title">Pagos online</h2>
        <p>Visa-BNA-Macro</p>
      </div>
      {/* <div className="card">
        <img src={imagen2} alt="Imagen 2" className="card-image" />
        <h2 className="card-title">Promos!</h2>
        <p>Nuestras promos</p>
      </div> */}
      <div className="card">
        <img src={imagen3} alt="Imagen 3" className="card-image" />
        <h2 className="card-title">Ubicacion</h2>
        <p>Calle falsa 123</p>
      </div>
      <div className="card">
        <img src={imagen4}alt="Imagen 4" className="card-image" />
        <h2 className="card-title">Comnunicate</h2>
        <p>11-2423-1232</p>
      </div>
    </div>
  );
};

export default CardCuadruple;