import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pfooter">
      <div className="pfooter__container">
        {/* Premium CTA band */}
        <div className="pfooter__cta">
          <div className="pfooter__ctaText">
            <div className="pfooter__ctaKicker">Hostel Orbit</div>
            <h3 className="pfooter__ctaTitle">
              Upgrade your hostel operations with clarity.
            </h3>
            <p className="pfooter__ctaSub">
              Payments, rooms, students, meals, outpass, and admin monitoring —
              streamlined for Nepal.
            </p>
          </div>

          <div className="pfooter__ctaActions">
            <a className="pfooter__btn pfooter__btn--primary" href="/download">
              Download
              <span className="pfooter__btnIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 20h14v-2H5v2zm7-18l-5.5 5.5 1.41 1.41L11 6.83V16h2V6.83l3.09 3.09 1.41-1.41L12 2z" />
                </svg>
              </span>
            </a>

            <a
              className="pfooter__btn pfooter__btn--secondary"
              href="https://wa.me/9779761805818"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <span className="pfooter__btnIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.65 15.02L2 22l5.14-1.31A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.05.78.81-2.97-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.63-6.08c-.25-.13-1.46-.72-1.69-.8-.23-.09-.4-.13-.56.12-.16.25-.65.8-.8.97-.15.16-.3.18-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.12-.15.16-.25.25-.42.09-.16.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="pfooter__main">
          <div className="pfooter__brand">
            <div className="pfooter__logo">
              <span className="pfooter__mark" aria-hidden="true">
                HO
              </span>
              <div>
                <div className="pfooter__name">Hostel Orbit</div>
                <div className="pfooter__tag">
                  Professional hostel management for Nepal
                </div>
              </div>
            </div>

            <div className="pfooter__badges">
              <span className="pfooter__badge">Secure</span>
              <span className="pfooter__badge">Owner + Student</span>
              <span className="pfooter__badge">Admin Approval</span>
            </div>

            <div className="pfooter__contactCard">
              <div className="pfooter__contactLeft">
                <div className="pfooter__contactTitle">Contact</div>
                <div className="pfooter__contactValue">+977 976-180-5818</div>
                <div className="pfooter__contactMeta">Kathmandu, Nepal</div>
              </div>
              <a
                className="pfooter__contactAction"
                href="https://wa.me/9779761805818"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Desktop columns */}
          <div className="pfooter__cols">
            <div className="pfooter__col">
              <div className="pfooter__colTitle">Product</div>
              <a className="pfooter__link" href="/download">
                Download
              </a>
              <a className="pfooter__link" href="#about">
                Features
              </a>
              <a className="pfooter__link" href="/">
                Home
              </a>
            </div>

            <div className="pfooter__col">
              <div className="pfooter__colTitle">Support</div>
              <a
                className="pfooter__link"
                href="https://wa.me/9779761805818"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Support
              </a>
              <a className="pfooter__link" href="#about">
                How it works
              </a>
            </div>

            <div className="pfooter__col">
              <div className="pfooter__colTitle">Legal</div>
              {/* Make these real routes later, or change to # for now */}
              <a className="pfooter__link" href="/privacy">
                Privacy Policy
              </a>
              <a className="pfooter__link" href="/terms">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Mobile accordion (no JS needed) */}
          <div className="pfooter__accordion">
            <details className="pfooter__details">
              <summary className="pfooter__summary">Product</summary>
              <div className="pfooter__panel">
                <a className="pfooter__link" href="/download">
                  Download
                </a>
                <a className="pfooter__link" href="#about">
                  Features
                </a>
                <a className="pfooter__link" href="/">
                  Home
                </a>
              </div>
            </details>

            <details className="pfooter__details">
              <summary className="pfooter__summary">Support</summary>
              <div className="pfooter__panel">
                <a
                  className="pfooter__link"
                  href="https://wa.me/9779761805818"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Support
                </a>
                <a className="pfooter__link" href="#about">
                  How it works
                </a>
              </div>
            </details>

            <details className="pfooter__details">
              <summary className="pfooter__summary">Legal</summary>
              <div className="pfooter__panel">
                <a className="pfooter__link" href="/privacy">
                  Privacy Policy
                </a>
                <a className="pfooter__link" href="/terms">
                  Terms of Service
                </a>
              </div>
            </details>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pfooter__bottom">
          <div className="pfooter__bottomLeft">
            © {currentYear} Hostel Orbit. All rights reserved.
          </div>
          <div className="pfooter__bottomRight">
            <span className="pfooter__version">v1.1.18</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
