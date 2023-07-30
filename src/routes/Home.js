import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Doctor from "../assets/home.jpg";
function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName= "hero"
    heroImg = {Doctor}
    title= "The best clinic and pharmacy in Leyte"
    
    url = "/"
    btnClass= "hide"
    />
    <Footer/>
    </>
  );
}

export default Home;
