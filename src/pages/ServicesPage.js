import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServicesPage(){
  return(
    <div>

      <Navbar/>

      <section className="services-hero">
        <h1>OUR SERVICES</h1>
      </section>

      <section className="services-content">
        <h2>
          DEDICATED TO DELIVERING EXCELLENCE <br/>
          IN GLOBAL LOGISTICS SERVICES
        </h2>
      </section>

      <Footer/>

    </div>
  )
}

export default ServicesPage;