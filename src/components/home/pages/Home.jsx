import CardCuadruple from "../componentsHome/cardCuadruple";
import CardParticular from "../componentsHome/cardParticular";
import Carrusel from "../componentsHome/carrusel";
import Footer from "../componentsHome/footer";
import Navbar from "../componentsHome/navbar";

function Home() {
    return (
        <>
            <Navbar/>
            <Carrusel/>
            <CardCuadruple />
            <CardParticular title="Reservas online" description="Compras aparir de $49.999" backgroundImage="https://www.flowww.es/hubfs/Q32022%20Septiembre/Espa%C3%B1a/dia-de-la-infancia-como-atraer-mas-padres-y-ninos-a-tu-peluqueria-y-duplicar-tus-ventas.webp"/>
            <CardParticular title="Promociones" description="Descuentos niños 30% OFF" backgroundImage="https://lh5.googleusercontent.com/p/AF1QipPnyeYrbpN9eKHq70k842cuHk0C6SQvAqo5kQKe"/>
            <CardParticular title="Promociones" description="Descuentos hasta 20% OFF" backgroundImage="https://lh5.googleusercontent.com/p/AF1QipPnyeYrbpN9eKHq70k842cuHk0C6SQvAqo5kQKe"/>
            <Footer/>
        </>   
    )
}

export default Home;