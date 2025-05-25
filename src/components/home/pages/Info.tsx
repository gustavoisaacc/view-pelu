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
                    <h1>Nuestro Servicio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque reprehenderit eum a minima exercitationem voluptatibus aperiam, porro itaque! Accusantium laboriosam animi non, fugit tenetur beatae odio eius est ipsa?
                        Possimus, quibusdam et. Sunt commodi, corrupti possimus voluptatibus quidem ipsam aspernatur? Provident vitae hic voluptas, dolorem natus reiciendis ab distinctio et. Quibusdam libero unde doloremque autem! Placeat tempore autem magni.
                        Nisi aliquam reiciendis iste illum minus doloremque omnis in, nobis molestias, facere, rem sequi repellendus aliquid reprehenderit at recusandae! Dolores sint corrupti saepe! Reiciendis, pariatur amet ea hic architecto nemo!</p>
                </div>
            </section>
            <section className="seccionInfo">
                <div>
                    <h1>Nuestra Mision</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque reprehenderit eum a minima exercitationem voluptatibus aperiam, porro itaque! Accusantium laboriosam animi non, fugit tenetur beatae odio eius est ipsa?
                        Possimus, quibusdam et. Sunt commodi, corrupti possimus voluptatibus quidem ipsam aspernatur? Provident vitae hic voluptas, dolorem natus reiciendis ab distinctio et. Quibusdam libero unde doloremque autem! Placeat tempore autem magni.
                        Nisi aliquam reiciendis iste illum minus doloremque omnis in, nobis molestias, facere, rem sequi repellendus aliquid reprehenderit at recusandae! Dolores sint corrupti saepe! Reiciendis, pariatur amet ea hic architecto nemo!</p>
                </div>
            </section>
            <section className="seccionInfo">
                <div>
                    <h1>Nuestra Historia</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cumque reprehenderit eum a minima exercitationem voluptatibus aperiam, porro itaque! Accusantium laboriosam animi non, fugit tenetur beatae odio eius est ipsa?
                        Possimus, quibusdam et. Sunt commodi, corrupti possimus voluptatibus quidem ipsam aspernatur? Provident vitae hic voluptas, dolorem natus reiciendis ab distinctio et. Quibusdam libero unde doloremque autem! Placeat tempore autem magni.
                        Nisi aliquam reiciendis iste illum minus doloremque omnis in, nobis molestias, facere, rem sequi repellendus aliquid reprehenderit at recusandae! Dolores sint corrupti saepe! Reiciendis, pariatur amet ea hic architecto nemo!</p>
                </div>
            </section>
            <Footer/>
            <CopyRigth/>
        </>
    )
}

export default Informacion;