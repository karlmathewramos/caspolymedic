import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SER from "../assets/service.jpg";
import Offer from "../components/WhatweOffer";
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
    <Offer/>
    <Footer/>
    
    </>
  );
}

export default Service;
