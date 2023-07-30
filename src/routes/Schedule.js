import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import ContactForm from "../components/ContactForm";
import DOC from "../assets/doc.png";
import Appointment from "../components/Appointment";
function Schedule() {
  return (
    <>
    <Navbar/>
    <Hero
    cName= "hero-mid"
    heroImg = {DOC}
    title= "Schedule an Appointment"
    buttonText=""
    url = "/"
    btnClass="hide"
    />
    
    <ContactForm/>
   
    <Footer/>
    </>
  );
}

export default Schedule;
