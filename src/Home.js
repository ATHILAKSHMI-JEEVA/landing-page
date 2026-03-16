import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import ServicesStats from "./components/servicesStats";
import GetToTouch from "./components/get-to-touch";
import Footer from "./components/Footer";
import "./App.css";

function App(){
  return(
    <div>

      <Navbar/>

      <section id="home">
        <Hero/>
      </section>

      <section id="services">
        <Services/>
      </section>

      <section id="about">
        <About/>
      </section>

      <Features/>

      <Gallery/>

      <ServicesStats/>

      <section id="contact">
        <GetToTouch/>
      </section>

      <Footer/>

    </div>
  )
}

export default App;