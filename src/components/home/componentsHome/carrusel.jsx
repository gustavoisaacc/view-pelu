import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../style/carrusel.css"

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
        <div><img src="https://st.depositphotos.com/16122460/55798/i/450/depositphotos_557980912-stock-photo-professional-hairdresser-cutting-man-hair.jpg" alt="Imagen 1" className="carrusel-image" /></div>
        <div><img src="https://img.freepik.com/fotos-premium/hombre-esta-dando-vueltas-salon-belleza-corte-pelo-peinado-peluqueria-cuidado-masculino-barba-cabello_217333-1222.jpg" alt="Imagen 2" className="carrusel-image" /></div>
        <div><img src="https://cdn.euroinnova.edu.es/img/subidasEditor/dise%C3%B1o%20sin%20t%C3%ADtulo(5)-1617156169.webp" alt="Imagen 3" className="carrusel-image" /></div>
        <div><img src="https://cdn.euroinnova.edu.es/img/subidasEditor/haircut-4019676_1920-1631066974.webp" alt="Imagen 4" className="carrusel-image" /></div>
      </Slider>
    </div>
  );
};

export default Carrusel;