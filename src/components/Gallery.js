import React from "react";
import ship from "../images/ship.jpg";

function Gallery() {
  return (
    <div className="gallery-container" style={{ backgroundImage: `url(${ship})` }}>
      <div className="gallery-grid">

        <div className="gallery-box">
          <span className="number">01</span>

          <h2>FREIGHT FORWARDING</h2>

          <div className="hover-text">
            <ul>
              <li>Air freight service</li>
              <li>Sea cargo handling</li>
              <li>Global logistics network</li>
            </ul>
          </div>
        </div>

        <div className="gallery-box">
          <span className="number">02</span>

          <h2>ELEGANT PACKERS AND MOVERS</h2>

          <div className="hover-text">
            <ul>
              <li>Personal effects moving</li>
              <li>Factory relocation</li>
              <li>Packing services</li>
              <li>Home / Villa moving</li>
            </ul>
          </div>
        </div>

        <div className="gallery-box">
          <span className="number">03</span>

          <h2>HBN SPECIAL SERVICE</h2>

          <div className="hover-text">
            <ul>
              <li>Daily fresh air cargo</li>
              <li>Automobile movers</li>
              <li>Ship spare parts logistics</li>
              <li>Scrap logistics</li>
            </ul>
          </div>
        </div>

        <div className="gallery-box">
          <span className="number">04</span>

          <h2>MOVE TO QATAR</h2>

          <div className="hover-text">
            <ul>
              <li>Complete relocation</li>
              <li>Household shipping</li>
              <li>Documentation support</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Gallery;