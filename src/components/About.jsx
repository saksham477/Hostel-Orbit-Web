import React from "react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      title: "Operations Dashboard",
      description:
        "A calm overview for occupancy, dues, meals, and requests — so you can act fast without digging through data.",
      points: ["Daily overview", "Quick actions", "Owner controls"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
        </svg>
      ),
      title: "Room Management",
      description:
        "Track beds, rooms, and availability with a simple structure that stays consistent as your hostel grows.",
      points: [
        "Bed/room status",
        "Allocation workflow",
        "Availability clarity",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63a1.5 1.5 0 0 0-1.48-1.37A1.5 1.5 0 0 0 16.5 8.5L15 16v6h2zm-6.5 0v-7.5L11 10h2L8.5 4H7v6.5h2V22h2.5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z" />
        </svg>
      ),
      title: "Student & Guest Records",
      description:
        "Maintain organized profiles, documents, and basic communication without messy spreadsheets or manual tracking.",
      points: ["Profiles & documents", "Clear history", "Structured records"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      ),
      title: "Analytics & Reports",
      description:
        "Understand performance trends with clean summaries that help you make better operational decisions.",
      points: ["Trends & insights", "Better planning", "Actionable summaries"],
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <header className="about__header">
          <div className="about__kicker">What you get</div>
          <h2 className="about__title">
            Professional{" "}
            <span className="gradient-text">hostel management</span>, built to
            stay clean
          </h2>
          <p className="about__subtitle">
            Designed for Nepal’s day-to-day hostel operations — simple to use,
            structured for growth, and easy to trust.
          </p>
        </header>

        <div className="about__grid">
          {features.map((f, idx) => (
            <article
              key={f.title}
              className="aboutCard"
              style={{ "--delay": `${idx * 90}ms` }}
            >
              <div className="aboutCard__top">
                <div className="aboutCard__icon" aria-hidden="true">
                  {f.icon}
                </div>
                <h3 className="aboutCard__title">{f.title}</h3>
              </div>

              <p className="aboutCard__desc">{f.description}</p>

              <ul className="aboutCard__list">
                {f.points.map((p) => (
                  <li key={p} className="aboutCard__item">
                    <span className="aboutCard__check" aria-hidden="true">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="about__bottom">
          <div className="aboutStat">
            <div className="aboutStat__value">Owner</div>
            <div className="aboutStat__label">dashboard + controls</div>
          </div>
          <div className="aboutStat">
            <div className="aboutStat__value">Student</div>
            <div className="aboutStat__label">flows for daily use</div>
          </div>
          <div className="aboutStat">
            <div className="aboutStat__value">Admin</div>
            <div className="aboutStat__label">approval & monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
