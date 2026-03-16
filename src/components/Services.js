import React from "react";

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-left">
        <p className="services-tag">/services/</p>
        <h2 className="services-title">
          TRANSPORTATION SERVICES
          <br />
          WHICH WE PROVIDE TO OUR
          <br />
          CUSTOMERS
        </h2>

        <div className="services-button-wrap">
          <button className="all-services-btn">All Services</button>
          <button className="services-arrow-btn">↗</button>
        </div>
      </div>

      <div className="services-right">
        <div className="service-item">
          <div className="service-icon-box">
            <span className="service-emoji">🚚</span>
            <span className="icon-bg-dot"></span>
          </div>
          <div className="service-content">
            <h3>Road Transport Services</h3>
            <p>
              Reliable Qatar & GCC delivery with modern fleet and timely
              service.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon-box">
            <span className="service-emoji">✈️</span>
            <span className="icon-bg-dot"></span>
          </div>
          <div className="service-content">
            <h3>Air Freight Services</h3>
            <p>Fast, secure air cargo with customs support and tracking.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon-box">
            <span className="service-emoji">🚢</span>
            <span className="icon-bg-dot"></span>
          </div>
          <div className="service-content">
            <h3>Sea Cargo and Shipping</h3>
            <p>
              Fast, secure, and cost-effective sea freight for all your
              shipping needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;