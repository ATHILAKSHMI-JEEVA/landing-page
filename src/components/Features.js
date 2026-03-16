import React from "react";


const featuresList = [
  "Transparent pricing",
  "Warehouse storage",
  "Real time tracking",
  "Security for cargo",
  "Easy payment method",
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-left">
        <img src="/black-container.jpg" alt="Black Container" />
      </div>

      <div className="features-right">
        <p className="features-tag">/services/</p>

        <h2>
          CORE FEATURES OF OUR
          <br />
          LOGISTICS ADVANTAGE
        </h2>

        <div className="features-list">
          {featuresList.map((item, index) => (
            <div className="feature-row" key={index}>
              <span className="feature-text">
                {String(index + 1).padStart(2, "0")}. {item}
              </span>
              <span className="feature-arrow">↘</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;