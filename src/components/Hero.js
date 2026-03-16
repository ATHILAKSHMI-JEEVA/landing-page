import React from "react";
import truck from "../images/truck.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${truck})` }}
    >
      <div className="hero-overlay">
        <p className="tagline">BOUNDLESS. SEAMLESS. DELIVERED</p>
        <h1>HBN SHIPPING AND LOGISTICS</h1>
        <h2>FROM HERE TO ANYWHERE, HASSLE-FREE</h2>

        <div className="hero-buttons">
          <button className="explore-btn">Explore More</button>
          <button className="arrow-btn">↗</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;