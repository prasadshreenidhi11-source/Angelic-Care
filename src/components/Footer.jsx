import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="premium-footer">

      {/* Top Footer */}
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">

          <div className="footer-logo">
            <span>Anne's Angels</span>
          </div>

          <p className="footer-description">
            Stay in your own home and live independently with assistance.
            Accredited and registered NDIS Provider offering Support
            Coordination, SIL and SDA Provider Services, Social and Community
            Interaction and Lifestyle Skills. Support is tailored to your
            individual needs.
          </p>

          <div className="ndis-number">
            <span>NDIS Provider Number</span>
            <strong>405 000 9963</strong>
          </div>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/110189161241940"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-icon"
            aria-label="Facebook"
          >
            f
          </a>

        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/services/">Services</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>


        {/* Contact Details */}
        <div className="footer-column contact-column">
          <h3>Contact Details</h3>

          <a href="tel:+61448377117" className="contact-item">
            <span className="contact-icon">☎</span>
            <span>+61 448 377 117</span>
          </a>

          <a href="mailto:anne@annesangels.au" className="contact-item">
            <span className="contact-icon">✉</span>
            <span>anne@annesangels.au</span>
          </a>

          <a
            href="https://maps.app.goo.gl/XgevrpKGJm6Wfd998"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">⌖</span>
            <span>
              10 Krefter Crescent,
              <br />
              Highfields, QLD, Australia
            </span>
          </a>
        </div>


        {/* Opening Hours */}
        <div className="footer-column hours-column">
          <h3>Opening Hours</h3>

          <div className="hours-row">
            <span>Mon</span>
            <span>09:00 am – 05:00 pm</span>
          </div>

          <div className="hours-row">
            <span>Tue</span>
            <span>09:00 am – 05:00 pm</span>
          </div>

          <div className="hours-row">
            <span>Wed</span>
            <span>09:00 am – 05:00 pm</span>
          </div>

          <div className="hours-row">
            <span>Thu</span>
            <span>09:00 am – 05:00 pm</span>
          </div>

          <div className="hours-row">
            <span>Fri</span>
            <span>09:00 am – 05:00 pm</span>
          </div>

          <div className="hours-row closed">
            <span>Sat & Sun</span>
            <span>Closed</span>
          </div>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            Copyright © 2026 AREFEN Pty Ltd Trading as Anne's Angels -
            All Rights Reserved.
          </p>

          <p className="designer">
            Design By <span>Shopamarketing</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;