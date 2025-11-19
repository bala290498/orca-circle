"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement-dismissed", "true");
    // Dispatch custom event to notify header
    window.dispatchEvent(new CustomEvent("announcement-dismissed"));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-accent-500 text-white py-2 sm:py-2.5 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-xs sm:text-sm font-medium text-center flex-1">
          Free forever — Join thousands growing together.
        </p>
        <button
          onClick={handleDismiss}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}

