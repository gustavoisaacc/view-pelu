import React from 'react';
import "../style/footer.css"
import img5 from "../image/grupo.png"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <img src= {img5} alt="Logo" className="footer-image" />
                    <h2 className="footer-title">Acerca de nosotros</h2>
                    <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur nemo quibusdam enim eaque animi quia pariatur. Est, explicabo perspiciatis, aperiam facilis libero, in doloremque suscipit esse totam neque architecto..</p>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;