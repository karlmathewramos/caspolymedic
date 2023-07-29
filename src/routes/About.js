import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import CAS from "../assets/cas.jpg";
function About() {
  return (
    <>
    <Navbar/>
    <Hero
    cName= "hero-mid"
    heroImg = {CAS}
    title= "About Us"
    buttonText=""
    url = "/"
    btnClass="hide"
    />
    <AboutUs/>
    <Footer/>
    </>
  );
}

export default About;
