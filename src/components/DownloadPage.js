import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DownloadPage.css";

const DownloadPage = () => {
  const location = useLocation();
  const [countdown, setCountdown] = useState(5);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const downloadLink = location.state?.downloadLink || "";
  const isAndroid = location.state?.isAndroid || false;
  const downloadText = location.state?.downloadText || "Download";

  useEffect(() => {
    // Start the download automatically
    if (downloadLink) {
      setTimeout(() => {
        if (isAndroid) {
          // For Android APK, open in same window to trigger download
          window.location.href = downloadLink;
        } else {
          // For iOS App Store, open in new tab
          window.open(downloadLink, "_blank");
        }
        setDownloadStarted(true);
      }, 1000);
    }

    // Countdown timer for redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [downloadLink, isAndroid]);

  const handleManualDownload = () => {
    if (isAndroid) {
      window.location.href = downloadLink;
    } else {
      window.open(downloadLink, "_blank");
    }
  };

  return (
    <div className="download-page">
      <div className="download-container">
        <div className="download-icon-wrapper">
          <div className="download-icon">
            {downloadStarted ? "✅" : "⬇️"}
          </div>
        </div>

        <h1 className="download-title">
          {downloadStarted ? "Download Started!" : "Preparing Download..."}
        </h1>

        <p className="download-description">
          {downloadStarted
            ? "Your download has been initiated successfully."
            : "Please wait while we prepare your download..."}
        </p>

        {isAndroid ? (
          <div className="download-info">
            <h3>Installation Guide for Android:</h3>
            <ol className="installation-steps">
              <li>
                <strong>Enable Unknown Sources:</strong> Go to Settings → Security
                → Enable "Unknown Sources" or "Install Unknown Apps"
              </li>
              <li>
                <strong>Download Warning:</strong> You may see a browser warning
                about the APK file - this is normal. Tap "Download anyway" or "Keep
                file"
              </li>
              <li>
                <strong>Locate the File:</strong> Open your Downloads folder or
                notification panel
              </li>
              <li>
                <strong>Install:</strong> Tap the APK file and follow the
                installation prompts
              </li>
              <li>
                <strong>Launch:</strong> Open Hostel Orbit and start managing your
                hostel!
              </li>
            </ol>
            <div className="security-note">
              <div className="security-icon">🛡️</div>
              <p>
                <strong>This APK is safe and verified.</strong> The security
                warning is standard for apps installed outside Google Play Store.
              </p>
            </div>
          </div>
        ) : (
          <div className="download-info">
            <h3>Next Steps:</h3>
            <ol className="installation-steps">
              <li>
                <strong>App Store:</strong> You'll be redirected to the App Store
              </li>
              <li>
                <strong>Install:</strong> Tap "Get" to download and install Hostel
                Orbit
              </li>
              <li>
                <strong>Launch:</strong> Open the app and start managing your
                hostel!
              </li>
            </ol>
          </div>
        )}

        <div className="download-actions">
          <button className="manual-download-btn" onClick={handleManualDownload}>
            <span className="btn-icon">📱</span>
            Retry Download
          </button>
          <a href="/" className="back-home-btn">
            ← Back to Home
          </a>
        </div>

        <div className="redirect-notice">
          <p>
            Redirecting to homepage in <strong>{countdown}</strong> seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
