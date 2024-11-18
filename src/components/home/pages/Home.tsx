
import CardCuadruple from "../componentsHome/CardCuadruple";
import CardParticular from "../componentsHome/CardParticular";
import Carrusel from "../componentsHome/Carrusel";
import Footer from "../componentsHome/Footer";
import Navbar from "../componentsHome/Navbar";
import img1 from "../image/image.png"
import img2 from "../image/image2.png"
import img3 from "../image/image3.png"

function Home() {
    return (
        <>
        <Navbar/>
        <Carrusel/>
        <CardCuadruple/>
        <CardParticular title="PROMO PARA CABALLEROS" description="Todos los martes 2x1 en cortes" backgroundImage={img1}/>
        <CardParticular title="PROMO PARA DAMAS" description="Todos los jueves 15% de descuento " backgroundImage={img2}/>
        <CardParticular title="PROMO EN COLOMETRIA" description="10% de descuento todo lo que resta del mes" backgroundImage={img3}/>
        <Footer/>
        </>   
    )
}

export default Home;