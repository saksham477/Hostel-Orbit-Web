import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function detectPlatform(uaString) {
  const ua = (uaString || "").toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod"))
    return "ios";
  return "other";
}

const IOS_APPSTORE_LINK =
  "https://apps.apple.com/us/app/hostel-orbit/id6751740636";

const ANDROID_APK_LINK =
  "https://github.com/saksham477/Hostel-Orbit-Web/releases/latest/download/hostel-orbit.apk";

const Hero = () => {
  const navigate = useNavigate();

  const [platform, setPlatform] = useState("other"); // android | ios | other
  const [showWarning, setShowWarning] = useState(false);

  const downloadInfo = useMemo(() => {
    if (platform === "android") {
      return {
        isAndroid: true,
        downloadLink: ANDROID_APK_LINK,
        downloadText: "Download APK",
      };
    }
    if (platform === "ios") {
      return {
        isAndroid: false,
        downloadLink: IOS_APPSTORE_LINK,
        downloadText: "Download on App Store",
      };
    }
    return { isAndroid: false, downloadLink: "", downloadText: "Get the app" };
  }, [platform]);

  useEffect(() => {
    setPlatform(detectPlatform(navigator.userAgent));
  }, []);

  const goToDownload = () => {
    navigate("/download", {
      state: {
        downloadLink: downloadInfo.downloadLink,
        isAndroid: downloadInfo.isAndroid,
        downloadText: downloadInfo.downloadText,
        platform,
      },
    });
  };

  const handlePrimaryCTA = () => {
    if (platform === "android") {
      setShowWarning(true);
      return;
    }
    goToDownload(); // iOS + desktop -> download page
  };

  const proceedWithDownload = () => {
    setShowWarning(false);
    goToDownload();
  };

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__container">
        <header className="hero__topbar">
          <div className="brand" role="banner" aria-label="Hostel Orbit">
            <div className="brand__mark" aria-hidden="true">
              HO
            </div>
            <div className="brand__text">
              <div className="brand__name">Hostel Orbit</div>
              <div className="brand__tag">Hostel operations, simplified</div>
            </div>
          </div>

          <div className="hero__topActions">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => navigate("/download")}
              aria-label="Go to download page"
            >
              Download
            </button>
          </div>
        </header>

        <div className="hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">
              Streamline your{" "}
              <span className="gradient-text">hostel management</span>
              <br />
              in Nepal
            </h1>

            <p className="hero__subtitle">
              A professional hostel management platform designed for real-world
              operations: payments, rooms, students, meals, outpass, and admin
              controls — with clarity and speed.
            </p>

            <div className="hero__ctaRow">
              <button
                type="button"
                className="btn btn--primary"
                onClick={handlePrimaryCTA}
              >
                {platform === "android" ? "Download APK" : "Get the app"}
              </button>

              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => navigate("/download")}
              >
                View download options
              </button>
            </div>

            <div className="hero__chips" aria-label="Key benefits">
              <span className="chip">Secure platform</span>
              <span className="chip">Owner + student flows</span>
              <span className="chip">Made for Nepal</span>
            </div>

            <div className="hero__trust">
              <div className="trustItem">
                <div className="trustDot" aria-hidden="true" />
                Fast setup
              </div>
              <div className="trustItem">
                <div className="trustDot" aria-hidden="true" />
                Clean dashboards
              </div>
              <div className="trustItem">
                <div className="trustDot" aria-hidden="true" />
                Operational control
              </div>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="workspaceCard">
              <div className="workspaceTop">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <div className="workspaceTitle">Hostel Orbit Workspace</div>
              </div>

              <div className="workspaceBody">
                <aside className="workspaceSide">
                  <div className="sideItem sideItem--active" />
                  <div className="sideItem" />
                  <div className="sideItem" />
                  <div className="sideItem" />
                </aside>

                <main className="workspaceMain">
                  <div className="mainHeader" />
                  <div className="mainLine" />
                  <div className="mainLine mainLine--short" />

                  <div className="metricRow">
                    <div className="metric">
                      <div className="metricLabel">Occupancy</div>
                      <div className="metricValue">92%</div>
                    </div>
                    <div className="metric">
                      <div className="metricLabel">Due Payments</div>
                      <div className="metricValue">14</div>
                    </div>
                    <div className="metric">
                      <div className="metricLabel">Today’s Meals</div>
                      <div className="metricValue">3</div>
                    </div>
                  </div>

                  <div className="tableBlock">
                    <div className="tableRow">
                      <span className="pill">Room 204</span>
                      <span className="muted">2/2 beds</span>
                      <span className="status status--ok">Active</span>
                    </div>
                    <div className="tableRow">
                      <span className="pill">Room 105</span>
                      <span className="muted">1/2 beds</span>
                      <span className="status status--warn">Due</span>
                    </div>
                    <div className="tableRow">
                      <span className="pill">Room 301</span>
                      <span className="muted">0/2 beds</span>
                      <span className="status status--idle">Vacant</span>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            <div className="floatCard floatCard--one" />
            <div className="floatCard floatCard--two" />
          </div>
        </div>
      </div>

      {showWarning && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Safe download notice"
        >
          <div className="modal">
            <div className="modalHeader">
              <div className="modalIcon" aria-hidden="true">
                !
              </div>
              <div>
                <div className="modalTitle">Safe download</div>
                <div className="modalSubtitle">
                  Android may show a warning for APK files.
                </div>
              </div>
            </div>

            <div className="modalBody">
              <p>
                This is normal when installing apps outside the Play Store. Your
                browser may show “Download anyway” or “Keep file”.
              </p>
              <ul>
                <li>Official Hostel Orbit APK</li>
                <li>No malware or harmful content</li>
                <li>Install only if you trust the source (this website)</li>
              </ul>
              <p className="modalNote">
                We’ll take you to the download page with installation
                instructions.
              </p>
            </div>

            <div className="modalActions">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => setShowWarning(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={proceedWithDownload}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
