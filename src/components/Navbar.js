import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">

      <div className="logo">
        <img
          src="https://via.placeholder.com/180x80?text=HBN+Logo"
          alt="HBN Logo"
        />
      </div>

      <nav className="nav-links">

        <span onClick={() => scrollToSection("home")}>Home</span>

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span>Services ▾</span>

          {showDropdown && (
            <div className="dropdown-menu">

              <Link to="/air-freight">Air Freight</Link>

              <Link to="/sea-cargo">Sea Cargo</Link>

              <Link to="/road-transport">Road Transport</Link>

              <Link to="/warehousing">Warehousing</Link>

              <Link to="/packers-movers">Packers & Movers</Link>

              <Link to="/cool-express">Cool Express Service</Link>

              <Link to="/move-qatar">Move to Qatar</Link>

            </div>
          )}
        </div>

        <span onClick={() => scrollToSection("about")}>About Us</span>

        <span onClick={() => scrollToSection("contact")}>Contact Us</span>

      </nav>

      <button
        className="quote-btn"
        onClick={() => scrollToSection("contact")}
      >
        Get A Quote →
      </button>

    </header>
  );
}

export default Navbar;