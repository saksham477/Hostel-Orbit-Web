import { Apple, Play } from "lucide-react";

interface DownloadButtonsProps {
  className?: string;
  variant?: "default" | "large";
}

const DownloadButtons = ({ className = "", variant = "default" }: DownloadButtonsProps) => {
  const isLarge = variant === "large";
  
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${className}`}>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-primary group ${isLarge ? 'px-8 py-4' : ''}`}
        aria-label="Download from Google Play Store"
      >
        <Play className={`fill-current ${isLarge ? 'w-6 h-6' : 'w-5 h-5'}`} />
        <div className="text-left">
          <div className={`opacity-80 font-medium ${isLarge ? 'text-xs' : 'text-[11px]'}`}>Get it on</div>
          <div className={`font-bold -mt-0.5 ${isLarge ? 'text-base' : 'text-sm'}`}>Google Play</div>
        </div>
      </a>
      
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-secondary group ${isLarge ? 'px-8 py-4' : ''}`}
        aria-label="Download from App Store"
      >
        <Apple className={isLarge ? 'w-6 h-6' : 'w-5 h-5'} />
        <div className="text-left">
          <div className={`opacity-70 font-medium ${isLarge ? 'text-xs' : 'text-[11px]'}`}>Download on</div>
          <div className={`font-bold -mt-0.5 ${isLarge ? 'text-base' : 'text-sm'}`}>App Store</div>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
