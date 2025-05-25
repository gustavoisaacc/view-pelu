
import "../style/cardCuadruple.css";
import imagen1 from "../image/cortePelo.png";
import imagen2 from "../image/tinte.png";
import imagen3 from "../image/hidratante.png";
import imagen4 from "../image/pelo.png";
import imagen5 from "../image/informacion.png";

const CardCuadruple = () => {
  return (
    <>
    <div className="title-card" id="informacion"><h1>Nuestros Servicios</h1></div>
    <div className="cards-grid" >
      <div className="card">
        <img src={imagen1} alt="Imagen 1" className="card-image" />
        <h2 className="card-title">Cortes de cabello</h2>
        <p>Ofrecemos cortes modernos y clasicos para todos los estilos y edades.</p>
      </div>
      <div className="card">
        <img src={imagen2} alt="Imagen 2" className="card-image" />
        <h2 className="card-title">Colorimetria</h2>
        <p>Desde tintes naturales hasta colores vibrantes, nuestros expertos te daran el look que deseas.</p>
      </div>
      <div className="card">
        <img src={imagen3} alt="Imagen 3" className="card-image" />
        <h2 className="card-title">Tratamientos</h2>
        <p>Revitaliza tu cabello con nuestros tratamientos de hidratacion, reparacion y brillo.</p>
      </div>
      <div className="card">
        <img src={imagen5}alt="Imagen 4" className="card-image" />
        <h2 className="card-title">Informacion</h2>
        <p>Lunes a Viernes de 08:00 AM - 22:OO PM
           Sabado y Domingo de 10:00 AM - 20:00 PM
        </p>
      </div>
    </div>
    </>
  );
};

export default CardCuadruple;