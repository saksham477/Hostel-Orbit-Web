import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [userAgent, setUserAgent] = useState('');
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');
  const [downloadText, setDownloadText] = useState('');

  useEffect(() => {
    const ua = navigator.userAgent;
    setUserAgent(ua);

    if (/Android/i.test(ua)) {
      setShowDownloadButton(true);
      setDownloadLink('/Hostel Orbit.apk'); // Direct download link
      setDownloadText('Download APK');
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      setShowDownloadButton(true);
      setDownloadLink('#'); // Replace with your App Store link
      setDownloadText('Download on App Store');
    } else {
      setShowDownloadButton(false);
    }
  }, []);

  const handleDownload = () => {
    if (downloadLink !== '#') {
      window.open(downloadLink, '_blank');
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            Streamline Your
            <span className="gradient-text"> Hostel Management</span>
            <br />
            in Nepal
          </h1>

          <p className="hero-description">
            Professional hostel management app designed for Nepal's hospitality industry.
            Simplify operations, manage bookings, and enhance guest experiences.
          </p>

          {showDownloadButton && (
            <div className="download-section">
              <button className="download-btn" onClick={handleDownload}>
                <span className="btn-icon">📱</span>
                {downloadText}
              </button>
              <p className="download-note">
                ⚠️ You may see a security warning. This is normal for APK downloads.
                <br />Tap "Download anyway" to continue.
              </p>
            </div>
          )}

          <div className="hero-features">
            <div className="feature-badge">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              Smart Analytics
            </div>
            <div className="feature-badge">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              Secure Platform
            </div>
            <div className="feature-badge">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Made for Nepal
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-phone">
            <div className="phone-mockup">
              <img src="/dashboard.png" alt="Hostel Orbit Dashboard" className="hero-screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;