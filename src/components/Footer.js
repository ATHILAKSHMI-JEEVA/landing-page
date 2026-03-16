import React from "react";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col">
          <h2 className="logo">HBN</h2>
          <p>Managed By: hbn@hbngroup.com.qa</p>
          <p>© HBN Logistics 2025. All Rights Reserved.</p>

          <div className="social-icons">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>X</span>
          </div>
        </div>

        {/* Menu */}
        <div className="footer-col">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Air Freight</li>
            <li>Sea Cargo and Shipping</li>
            <li>Road Transport</li>
            <li>Warehouse Service</li>
          </ul>
        </div>

        {/* Office */}
        <div className="footer-col">
          <h3>Office</h3>
          <p>sales@hbnlogistics.com</p>
          <p>+974 51473330</p>
          <p>
            Doha, State of Qatar, Al Muntazah, <br/>
            24 Rawdat Al-Khail, 840 Al-Rawabi Street,<br/>
            Namco Building, P.O. Box: 55913
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;