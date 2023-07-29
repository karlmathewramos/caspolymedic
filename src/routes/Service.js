import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SER from "../assets/service.jpg";
import Destination from "../components/Destination";
function Service() {
  return (
    <>
    <Navbar/>
    <Hero
    cName= "hero-mid"
    heroImg = {SER}
    title= "Services"
    buttonText=""
    url = "/"
    btnClass="hide"
    />
    <Destination/>
    <Footer/>
    
    </>
  );
}

export default Service;
