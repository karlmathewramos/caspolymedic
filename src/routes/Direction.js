import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Direc from "../components/Directions";
import Footer from "../components/Footer";
import MAP from "../assets/map.png";
function Direction() {
  return (
    <>
    <Navbar/>
    <Hero
    cName= "hero-mid"
    heroImg = {MAP}
    title= "Directions"
    buttonText=""
    url = "/"
    btnClass="hide"
    />
    <Direc/>
    <Footer/>
    </>
  );
}

export default Direction;
