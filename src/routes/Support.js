import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import ContactForm from "../components/ContactForm";
import SUP from "../assets/support.jpg";
function Support() {
  return (
    <>
    <Navbar/>
    <Hero
    cName= "hero-mid"
    heroImg = {SUP}
    title= "Support"
    buttonText=""
    url = "/"
    btnClass="hide"
    />
    <Chat/>
    
    
    <Footer/>
    </>
  );
}

export default Support;
