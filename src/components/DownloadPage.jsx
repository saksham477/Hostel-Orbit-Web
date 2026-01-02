import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DownloadPage.css";

const IOS_APPSTORE_LINK =
  "https://apps.apple.com/us/app/hostel-orbit/id6751740636";
const ANDROID_APK_LINK =
  "https://github.com/saksham477/Hostel-Orbit-Web/releases/latest/download/hostel-orbit.apk";

function detectPlatformFromUA() {
  const ua = (navigator.userAgent || "").toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod"))
    return "ios";
  return "other";
}

const DownloadPage = () => {
  const location = useLocation();
  const timerRef = useRef(null);

  const navState = location.state || {};
  const stateLink = navState.downloadLink || "";
  const stateIsAndroid = !!navState.isAndroid;

  const [platform, setPlatform] = useState("other"); // android | ios | other
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [autoAttempted, setAutoAttempted] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatformFromUA());
  }, []);

  const resolved = useMemo(() => {
    // If coming from Hero state, trust it.
    if (stateLink) {
      return {
        isAndroid: stateIsAndroid,
        downloadLink: stateLink,
        label:
          navState.downloadText ||
          (stateIsAndroid ? "Download APK" : "Open App Store"),
        source: "state",
      };
    }

    // If user directly hits /download, infer from device.
    if (platform === "android") {
      return {
        isAndroid: true,
        downloadLink: ANDROID_APK_LINK,
        label: "Download APK",
        source: "inferred",
      };
    }

    if (platform === "ios") {
      return {
        isAndroid: false,
        downloadLink: IOS_APPSTORE_LINK,
        label: "Open in App Store",
        source: "inferred",
      };
    }

    // Desktop/unknown: show choice UI
    return {
      isAndroid: false,
      downloadLink: "",
      label: "Choose platform",
      source: "none",
    };
  }, [stateLink, stateIsAndroid, navState.downloadText, platform]);

  const triggerAndroidDownload = (href) => {
    // Keeps the user on the page and triggers a file download.
    // Works best for same-origin files in /public.
    const a = document.createElement("a");
    a.href = href;
    a.setAttribute("download", ""); // Let browser decide filename
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const openIOSStore = (href) => {
    const w = window.open(href, "_blank", "noopener,noreferrer");
    if (!w) setPopupBlocked(true);
  };

  const startAutoFlow = () => {
    if (!resolved.downloadLink) return;

    setPopupBlocked(false);
    setAutoAttempted(true);

    // Small delay to show "Preparing..." UI
    timerRef.current = setTimeout(() => {
      try {
        if (resolved.isAndroid) {
          triggerAndroidDownload(resolved.downloadLink);
        } else {
          openIOSStore(resolved.downloadLink);
        }
        setDownloadStarted(true);
      } catch (e) {
        // If anything fails, user can still click manual download
        setDownloadStarted(false);
      }
    }, 700);
  };

  useEffect(() => {
    // Auto-start only when we have a resolved link (android/ios).
    if (resolved.downloadLink && !autoAttempted) startAutoFlow();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resolved.downloadLink]);

  const handleManualDownload = () => {
    if (!resolved.downloadLink) return;

    setPopupBlocked(false);

    if (resolved.isAndroid) {
      triggerAndroidDownload(resolved.downloadLink);
      setDownloadStarted(true);
    } else {
      openIOSStore(resolved.downloadLink);
      setDownloadStarted(true);
    }
  };

  const handleChooseAndroid = () => {
    triggerAndroidDownload(ANDROID_APK_LINK);
    setDownloadStarted(true);
  };

  const handleChooseIOS = () => {
    openIOSStore(IOS_APPSTORE_LINK);
    setDownloadStarted(true);
  };

  const isAndroid = resolved.isAndroid;
  const hasResolvedLink = !!resolved.downloadLink;

  return (
    <div className="dl-page">
      <div className="dl-bg" aria-hidden="true" />
      <div className="dl-container">
        <div className="dl-card">
          <div className="dl-header">
            <div
              className={`dl-icon ${downloadStarted ? "dl-icon--success" : ""}`}
              aria-hidden="true"
            >
              {downloadStarted ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
                </svg>
              )}
            </div>

            <div className="dl-titleBlock">
              <h1 className="dl-title">
                {!hasResolvedLink
                  ? "Choose your download"
                  : downloadStarted
                  ? "Download initiated"
                  : "Preparing download"}
              </h1>

              <p className="dl-subtitle">
                {!hasResolvedLink
                  ? "Select your platform to continue."
                  : downloadStarted
                  ? "If it didn’t start automatically, use the button below."
                  : "This will start automatically in a moment."}
              </p>

              {hasResolvedLink && !downloadStarted && (
                <div className="dl-progress" aria-label="Preparing">
                  <span className="dl-dot" />
                  <span className="dl-dot" />
                  <span className="dl-dot" />
                </div>
              )}
            </div>
          </div>

          {!hasResolvedLink ? (
            <div className="dl-choice">
              <button
                className="dl-btn dl-btn--primary"
                onClick={handleChooseAndroid}
              >
                Download APK (Android)
              </button>
              <button
                className="dl-btn dl-btn--secondary"
                onClick={handleChooseIOS}
              >
                Open App Store (iOS)
              </button>
              <a className="dl-link" href="/">
                Back to Home
              </a>
            </div>
          ) : (
            <>
              {popupBlocked && !isAndroid && (
                <div className="dl-callout" role="status">
                  <strong>Popup blocked.</strong> Your browser blocked the App
                  Store tab. Click <span className="dl-inline">Retry</span> to
                  open it.
                </div>
              )}

              <div className="dl-body">
                {isAndroid ? (
                  <>
                    <h3 className="dl-sectionTitle">
                      Android installation steps
                    </h3>
                    <ol className="dl-steps">
                      <li>
                        <span className="dl-stepNum">1</span>
                        <div>
                          <strong>Allow installation:</strong> Settings →
                          Security / Privacy →{" "}
                          <span className="dl-inline">
                            Install unknown apps
                          </span>{" "}
                          (choose your browser).
                        </div>
                      </li>
                      <li>
                        <span className="dl-stepNum">2</span>
                        <div>
                          <strong>Browser warning:</strong> If prompted, tap{" "}
                          <span className="dl-inline">Download anyway</span> or{" "}
                          <span className="dl-inline">Keep file</span>.
                        </div>
                      </li>
                      <li>
                        <span className="dl-stepNum">3</span>
                        <div>
                          <strong>Open the APK:</strong> From Downloads or
                          notification panel.
                        </div>
                      </li>
                      <li>
                        <span className="dl-stepNum">4</span>
                        <div>
                          <strong>Install & launch:</strong> Finish installation
                          and open Hostel Orbit.
                        </div>
                      </li>
                    </ol>

                    <div className="dl-note">
                      <div className="dl-noteIcon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                        </svg>
                      </div>
                      <div>
                        <strong>Security note:</strong> Android warnings are
                        normal for APK installs outside Play Store.
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="dl-sectionTitle">iOS steps</h3>
                    <ol className="dl-steps">
                      <li>
                        <span className="dl-stepNum">1</span>
                        <div>
                          <strong>Open App Store:</strong> We’ll redirect you to
                          the App Store page.
                        </div>
                      </li>
                      <li>
                        <span className="dl-stepNum">2</span>
                        <div>
                          <strong>Install:</strong> Tap{" "}
                          <span className="dl-inline">Get</span> to install
                          Hostel Orbit.
                        </div>
                      </li>
                      <li>
                        <span className="dl-stepNum">3</span>
                        <div>
                          <strong>Launch:</strong> Open the app and begin setup.
                        </div>
                      </li>
                    </ol>
                  </>
                )}
              </div>

              <div className="dl-actions">
                <button
                  className="dl-btn dl-btn--primary"
                  onClick={handleManualDownload}
                >
                  Retry
                </button>

                {isAndroid ? (
                  <a
                    className="dl-btn dl-btn--secondary"
                    href={resolved.downloadLink}
                  >
                    Direct link
                  </a>
                ) : (
                  <a
                    className="dl-btn dl-btn--secondary"
                    href={resolved.downloadLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Direct link
                  </a>
                )}

                <a className="dl-link" href="/">
                  Back to Home
                </a>
              </div>
            </>
          )}
        </div>

        <div className="dl-footerHint">
          If anything fails, refresh the page and click Retry. This page is safe
          to share with your hostel users.
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
