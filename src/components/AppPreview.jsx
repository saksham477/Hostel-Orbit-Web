import React, { useMemo, useState } from "react";
import "./AppPreview.css";

const AppPreview = () => {
  const [active, setActive] = useState(0);

  const items = useMemo(
    () => [
      {
        title: "Dashboard & Overview",
        description:
          "A clear operational view: occupancy, due payments, meals, outpass — built for quick decisions.",
        bullets: [
          "Real-time visibility",
          "Quick actions",
          "Owner & admin control",
        ],
        metrics: [
          { label: "Occupancy", value: "92%" },
          { label: "Due", value: "14" },
          { label: "Requests", value: "6" },
        ],
      },
      {
        title: "Payments & Dues",
        description:
          "Track rent cycles, due amounts, and reminders without messy spreadsheets or manual follow-up.",
        bullets: ["Due monitoring", "Payment status", "Cleaner records"],
        metrics: [
          { label: "Collected", value: "NPR 3.2L" },
          { label: "Due", value: "NPR 48K" },
          { label: "Reminders", value: "12" },
        ],
      },
      {
        title: "Rooms & Students",
        description:
          "Manage beds, room status, and student records in a structured workflow that stays consistent.",
        bullets: ["Room status", "Student assignment", "Faster onboarding"],
        metrics: [
          { label: "Rooms", value: "38" },
          { label: "Beds", value: "76" },
          { label: "Vacant", value: "6" },
        ],
      },
    ],
    []
  );

  const current = items[active];

  return (
    <section className="preview">
      <div className="preview__container">
        <div className="preview__header">
          <h2 className="preview__title">
            Built like a calm workspace — not a noisy dashboard
          </h2>
          <p className="preview__subtitle">
            Hostel Orbit keeps daily operations organized using simple,
            structured views inspired by modern tools.
          </p>
        </div>

        <div className="preview__layout">
          <nav className="preview__tabs" aria-label="Product sections">
            {items.map((it, idx) => (
              <button
                key={it.title}
                type="button"
                className={`tab ${idx === active ? "tab--active" : ""}`}
                onClick={() => setActive(idx)}
              >
                <div className="tab__title">{it.title}</div>
                <div className="tab__desc">{it.description}</div>
              </button>
            ))}
          </nav>

          <div className="preview__panel" key={current.title}>
            <div className="panel__copy">
              <h3 className="panel__title">{current.title}</h3>
              <p className="panel__desc">{current.description}</p>

              <ul className="panel__list">
                {current.bullets.map((b) => (
                  <li key={b} className="panel__item">
                    <span className="check" aria-hidden="true">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="panel__ctaRow">
                <a className="btn btn--primary" href="/download">
                  Download options
                </a>
                <a className="btn btn--secondary" href="#about">
                  Learn more
                </a>
              </div>
            </div>

            <div className="panel__visual" aria-hidden="true">
              <div className="halo" />
              <div className="miniWorkspace">
                <div className="miniTop">
                  <span className="miniDot" />
                  <span className="miniDot" />
                  <span className="miniDot" />
                  <div className="miniTitle">Workspace</div>
                </div>

                <div className="miniBody">
                  <div className="miniSide">
                    <div className="miniItem miniItem--active" />
                    <div className="miniItem" />
                    <div className="miniItem" />
                    <div className="miniItem" />
                  </div>

                  <div className="miniMain">
                    <div className="miniHeadline" />
                    <div className="miniLine" />
                    <div className="miniLine miniLine--short" />

                    <div className="miniMetrics">
                      {current.metrics.map((m) => (
                        <div className="miniMetric" key={m.label}>
                          <div className="miniLabel">{m.label}</div>
                          <div className="miniValue">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="miniTable">
                      <div className="miniRow">
                        <span className="miniPill">Room 204</span>
                        <span className="miniMuted">2/2</span>
                        <span className="miniStatus miniStatus--ok">
                          Active
                        </span>
                      </div>
                      <div className="miniRow">
                        <span className="miniPill">Room 105</span>
                        <span className="miniMuted">1/2</span>
                        <span className="miniStatus miniStatus--warn">Due</span>
                      </div>
                      <div className="miniRow">
                        <span className="miniPill">Room 301</span>
                        <span className="miniMuted">0/2</span>
                        <span className="miniStatus miniStatus--idle">
                          Vacant
                        </span>
                      </div>
                    </div>
                  </div>
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
