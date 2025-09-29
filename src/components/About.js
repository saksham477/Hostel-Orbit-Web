import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      title: 'Operations Dashboard',
      description: 'Centralized control panel for managing all aspects of your hostel operations.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
        </svg>
      ),
      title: 'Room Management',
      description: 'Efficiently manage room inventory, pricing, and availability in real-time.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63a1.5 1.5 0 0 0-1.48-1.37A1.5 1.5 0 0 0 16.5 8.5L15 16v6h2zm-6.5 0v-7.5L11 10h2L8.5 4H7v6.5h2V22h2.5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/>
        </svg>
      ),
      title: 'Guest Management',
      description: 'Streamline check-ins, check-outs, and guest communication processes.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      title: 'Analytics & Reports',
      description: 'Gain insights into your business performance with detailed analytics.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            Professional <span className="gradient-text">Hostel Management</span>
          </h2>
          <p className="about-subtitle">
            Built specifically for Nepal's hospitality industry with essential management tools
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card feature-card-${index + 1}`}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;