import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DownloadPage.css";

const DownloadPage = () => {
  const location = useLocation();
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
            {downloadStarted ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
              </svg>
            )}
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
              <div className="security-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
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
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
            Retry Download
          </button>
          <a href="/" className="back-home-btn">
            <svg className="back-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Home
          </a>
        </div>

      </div>
    </div>
  );
};

export default DownloadPage;
