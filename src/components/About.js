import React from "react";


function About() {
  return (
    <section className="about" id="about">
      <div className="about-overlay"></div>

      <div className="about-top">
        <p className="about-tag">/about us/</p>

        <div className="about-stats">
          <h1>223.458.482</h1>
          <h2>
            DELIVERED TONS
            <br />
            OF PRODUCTS
          </h2>
        </div>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2>
            DELIVERING LOGISTICS
            <br />
            EXCELLENCE FROM THE
            <br />
            HEART OF THE QATAR
          </h2>
        </div>

        <div className="about-right">
          <p>
            HBN Logistics is a Qatar-based logistics provider offering fast,
            reliable, and tech-driven solutions across freight forwarding,
            warehousing, and customs clearance. With a strategic location,
            expert team, and strong regional network, we ensure seamless
            delivery across Qatar and beyond.
          </p>

          <div className="about-btn-group">
            <button className="about-btn">Read More</button>
            <button className="about-arrow">↗</button>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src="/container.png" alt="Container" />
      </div>
    </section>
  );
}

export default About;