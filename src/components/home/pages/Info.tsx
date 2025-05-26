import { Link } from "react-router-dom";
import CopyRigth from "../componentsHome/CopyRigth";
import Footer from "../componentsHome/Footer";
import "../style/Informacion.css"


const Informacion = () => {
    return (
        <>
            <h1>INFORMACION</h1>
            <Link to="/">
                <button className="card-unica-button">Volver</button>
            </Link>
            <section className="seccionInfo">
                <div>
                    <h1>Nuestra Vision</h1>
                    <p>Aspiramos a consolidarnos como la plataforma líder en la gestión de servicios de peluquería y estilismo, expandiendo su alcance a nivel nacional y, en el futuro, integrando otras áreas del rubro de la belleza como maquillaje, manicura y spa. Nuestro objetivo es que Hair App no solo sea una herramienta digital, sino una comunidad de referencia que impulse el crecimiento del sector, generando oportunidades laborales y fortaleciendo la competitividad de los profesionales.

Queremos que esta plataforma represente un cambio significativo en la industria, proporcionando soluciones innovadoras y accesibles que optimicen el trabajo de los peluqueros y mejoren la experiencia de los clientes. A través de la tecnología y la colaboración, buscamos construir un ecosistema digital que revolucione el mercado del estilismo</p>
                </div>
            </section>
            <section className="seccionInfo">
                <div>
                    <h1>Nuestra Mision</h1>
                    <p>Nuestra misión es modernizar el sector de la peluquería mediante una plataforma digital accesible, escalable y eficiente. Buscamos ofrecer a los profesionales una herramienta integral que les permita administrar su trabajo de manera autónoma, promoviendo su visibilidad y reputación. Hair App integra funcionalidades clave como gestión de turnos, geolocalización y venta de productos capilares, brindando soluciones prácticas que responden a las necesidades actuales del mercado.

Desde su concepción, el proyecto ha estado enfocado en fomentar una comunidad digital que fortalezca la relación entre peluqueros y clientes, mejorando la experiencia de ambos. Queremos transformar la manera en que se contratan estos servicios, ofreciendo transparencia, eficiencia y una conexión más fluida entre todas las partes involucradas.</p>
                </div>
            </section>
            <section className="seccionInfo">
                <div>
                    <h1>Nuestra Historia</h1>
                    <p>El proyecto surge de la unión de un grupo de estudiantes de la prestigiosa Universidad Tecnológica Nacional (UTN), quienes comparten una misma visión: desarrollar iniciativas que generen un impacto positivo en la sociedad. A partir de nuestra experiencia académica y el deseo de aportar soluciones innovadoras, decidimos conformar este equipo con el objetivo de abordar problemáticas reales a través de proyectos tecnológicos y comunitarios.

                        Durante nuestra formación en la UTN, detectamos la necesidad de modernizar sectores tradicionales a través de herramientas digitales. Fue así como nació Hair App, un proyecto diseñado para transformar la interacción entre peluqueros y clientes, optimizando la gestión de turnos, la promoción de servicios y la comercialización de productos capilares. Nuestra experiencia y conocimientos técnicos se convirtieron en el eje de una iniciativa que busca mejorar la dinámica del sector de la peluquería y estilismo.</p>
                </div>
            </section>
            <Footer />
            <CopyRigth />
        </>
    )
}

export default Informacion;