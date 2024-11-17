import "../style/cardParticular.css";

type CardParticularProsps = {
  title: string
  description: string
  backgroundImage: string
}

const CardParticular = ({ title, description, backgroundImage }: CardParticularProsps) => {


  return (
    <div className="card-unica" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card-unica-content">
        <h2 className="card-unica-title">{title}</h2>
        <p className="card-unica-description">{description}</p>
        <button className="card-unica-button">Ver más</button>
      </div>
    </div>
  );
};

export default CardParticular;