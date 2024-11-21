
import "../style/cardCuadruple.css";
import imagen1 from "../image/tajetas.png";
import imagen2 from "../image/usuario.png";
import imagen3 from "../image/agenda.png";
import imagen4 from "../image/pelo.png";
import { Link } from "react-router-dom";

const CardCuadruple = () => {
  return (
    <div className="cards-grid">
      <div className="card">
        <img src={imagen1} alt="Imagen 1" className="card-image" />
        <h2 className="card-title">Forma de Pagos</h2>
        <p></p>
      </div>
      <div className="card">
        <Link to="profile">
        <img src={imagen2} alt="Imagen 2" className="card-image" />
        <h2 className="card-title">Perfil de Peluquero</h2>
        <p></p>
        </Link>
      </div>
      <div className="card">
        <Link to="/cita">
        <img src={imagen3} alt="Imagen 3" className="card-image" />
        <h2 className="card-title">Sacar turno</h2>
        <p></p>
        </Link>
      </div>
      <div className="card">
        <img src={imagen4}alt="Imagen 4" className="card-image" />
        <h2 className="card-title">Recomendacion!</h2>
        <p></p>
      </div>
    </div>
  );
};

export default CardCuadruple;