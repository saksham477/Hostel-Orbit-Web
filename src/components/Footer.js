import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Hostel Orbit</span>
            </div>
            <p className="footer-description">
              Professional hostel management solutions for Nepal's hospitality industry.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Contact Hostel Orbit</h4>
              <ul className="footer-list">
                <li className="contact-item">
                  <span className="contact-icon">💬</span>
                  <a href="https://wa.me/9779761805818" target="_blank" rel="noopener noreferrer" className="footer-link whatsapp-link">+977 976-180-5818<br />Chat on WhatsApp</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="footer-link">Kathmandu, Nepal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Hostel Orbit. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;