import React, { useState } from 'react';
import './AppPreview.css';

const AppPreview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    {
      title: 'Dashboard Overview',
      description: 'Monitor your hostel operations at a glance with real-time metrics and quick actions.',
      image: '/dashboard.png',
      features: ['Real-time occupancy tracking', 'Quick action buttons', 'Performance metrics']
    },
    {
      title: 'Payment Management',
      description: 'Track rent payments, manage due amounts, and handle all financial operations seamlessly.',
      image: '/payments.png',
      features: ['Payment tracking', 'Due amount monitoring', 'Payment reminders']
    },
    {
      title: 'Room Management',
      description: 'Efficiently manage room inventory, availability, and occupancy status in real-time.',
      image: '/rooms.png',
      features: ['Room status tracking', 'Availability management', 'Occupancy insights']
    }
  ];

  return (
    <section className="app-preview">
      <div className="preview-container">
        <div className="preview-header">
          <h2 className="preview-title">
            See <span className="gradient-text">Hostel Orbit</span> in Action
          </h2>
          <p className="preview-subtitle">
            Professional hostel management tools designed for efficiency and ease of use
          </p>
        </div>

        <div className="preview-content">
          <div className="preview-tabs">
            {screens.map((screen, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {screen.title}
              </button>
            ))}
          </div>

          <div className="preview-showcase">
            <div className="preview-info">
              <h3 className="screen-title">{screens[activeTab].title}</h3>
              <p className="screen-description">{screens[activeTab].description}</p>

              <ul className="feature-list">
                {screens[activeTab].features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="preview-phone">
              <div className="phone-frame">
                <div className="phone-screen">
                  <img
                    src={screens[activeTab].image}
                    alt={screens[activeTab].title}
                    className="screen-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;