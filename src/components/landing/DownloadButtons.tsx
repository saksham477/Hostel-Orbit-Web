import { Apple } from "lucide-react";

interface DownloadButtonsProps {
  className?: string;
  variant?: "default" | "large";
}

const PlayStoreIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 2.5v19l10.5-9.5L3 2.5z" fill="#34A853" />
    <path d="M13.5 12L17.2 8.7l-9.8-5.6L13.5 12z" fill="#4285F4" />
    <path d="M13.5 12L7.4 20.9l9.8-5.6L13.5 12z" fill="#FBBC04" />
    <path
      d="M17.2 8.7L20.5 10.6c.7.4.7 1.4 0 1.8l-3.3 1.9L13.5 12l3.7-3.3z"
      fill="#EA4335"
    />
  </svg>
);

const DownloadButtons = ({
  className = "",
  variant = "default",
}: DownloadButtonsProps) => {
  const isLarge = variant === "large";

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${className}`}
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.orbit.HostelOrbit&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-primary group ${isLarge ? "px-8 py-4" : ""}`}
        aria-label="Download on Google Play"
      >
        <PlayStoreIcon className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
        <div className="text-left">
          <div
            className={`opacity-80 font-medium ${
              isLarge ? "text-xs" : "text-[11px]"
            }`}
          >
            Download on
          </div>
          <div
            className={`font-bold -mt-0.5 ${isLarge ? "text-base" : "text-sm"}`}
          >
            Google Play
          </div>
        </div>
      </a>

      <a
        href="https://apps.apple.com/us/app/hostel-orbit/id6751740636"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-secondary group ${isLarge ? "px-8 py-4" : ""}`}
        aria-label="Download from App Store"
      >
        <Apple className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
        <div className="text-left">
          <div
            className={`opacity-70 font-medium ${
              isLarge ? "text-xs" : "text-[11px]"
            }`}
          >
            Download on
          </div>
          <div
            className={`font-bold -mt-0.5 ${isLarge ? "text-base" : "text-sm"}`}
          >
            App Store
          </div>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
