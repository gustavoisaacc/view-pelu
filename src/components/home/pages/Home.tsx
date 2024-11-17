
import CardCuadruple from "../componentsHome/CardCuadruple";
import CardParticular from "../componentsHome/CardParticular";
import Carrusel from "../componentsHome/Carrusel";
import Footer from "../componentsHome/Footer";
import Navbar from "../componentsHome/Navbar";

function Home() {
    return (
        <>
        <Navbar/>
        <Carrusel/>
        <CardCuadruple/>
        <CardParticular title="HOLA" description="asdasdas" backgroundImage="https://tahecosmetics.com/trends/wp-content/uploads/2023/02/mohicano-personalizado.jpg"/>
        <CardParticular title="HOLA" description="asdasdas" backgroundImage="https://tahecosmetics.com/trends/wp-content/uploads/2023/02/mohicano-personalizado.jpg"/>
        <CardParticular title="HOLA" description="asdasdas" backgroundImage="https://tahecosmetics.com/trends/wp-content/uploads/2023/02/mohicano-personalizado.jpg"/>
        <Footer/>
        </>   
    )
}

export default Home;