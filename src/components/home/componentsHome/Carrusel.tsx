
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/carrusel.css"
import img1 from "../image/slider1.png"
import img2 from "../image/slider2.png"
import img3 from "../image/slider3.png"
import img4 from "../image/slider4.png"

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="slick-prev">⟨</button>,
    nextArrow: <button className="slick-next">⟩</button>
  };

  return (
    <div className="carrusel-container">
      <Slider {...settings}>
        <div><img src={img1} alt="Imagen 1" className="carrusel-image" /></div>
        <div><img src={img2} alt="Imagen 2" className="carrusel-image" /></div>
        <div><img src={img3} alt="Imagen 3" className="carrusel-image" /></div>
        <div><img src={img4} alt="Imagen 4" className="carrusel-image" /></div>
      </Slider>
    </div>
  );
};

export default Carrusel;