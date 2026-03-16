import React from "react";
import plane from "../images/plane.png";

function ServicesSection() {
  return (
    <section className="services-section">

      <div className="services-header">
        <p className="breadcrumb">/services/</p>

        <h1>
          EXPERTISE IN OUR <br />
          TRANSPORTATION SERVICES
        </h1>
      </div>

      <div className="services-content">

        <div className="stat">
          <h2>15K+</h2>
          <h4>Shipments Successfully Delivered</h4>
          <hr />

          <p>
            We’ve handled millions of shipments across Qatar and globally,
            powered by cutting-edge technology and a skilled logistics team.
          </p>

          <ul>
            <li>Advanced logistics software</li>
            <li>Trained and certified staff</li>
            <li>Scalable operations</li>
          </ul>
        </div>

        <div className="stat">
          <h2>99%</h2>
          <h4>On-Time Delivery Rate</h4>
          <hr />

          <p>
            Our optimized routing, real-time tracking, and regional hubs
            ensure timely deliveries even in high demand periods.
          </p>

          <ul>
            <li>Smart delivery fleet</li>
            <li>Qatar-wide warehouse network</li>
            <li>Automated dispatch systems</li>
          </ul>
        </div>

        <div className="stat">
          <h2>750K+</h2>
          <h4>Cargo Secured with Insurance</h4>
          <hr />

          <p>
            We prioritize the safety of your cargo with top-tier security
            protocols and insurance coverage tailored for all needs.
          </p>

          <ul>
            <li>GPS-enabled tracking</li>
            <li>Qatar-compliant cargo insurance</li>
            <li>24/7 cargo security monitoring</li>
          </ul>
        </div>

      </div>

      <div className="plane-image">
        <img src={plane} alt="plane" />
      </div>

    </section>
  );
}

export default ServicesSection;