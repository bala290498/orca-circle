"use client";

import { useModal } from "@/contexts/ModalContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnnouncement, setHasAnnouncement] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check if announcement banner is visible
    const checkAnnouncement = () => {
      const dismissed = localStorage.getItem("announcement-dismissed");
      setHasAnnouncement(!dismissed);
    };
    checkAnnouncement();
    
    // Listen for announcement dismissal
    const handleAnnouncementDismissed = () => {
      setHasAnnouncement(false);
    };
    window.addEventListener("announcement-dismissed", handleAnnouncementDismissed);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("announcement-dismissed", handleAnnouncementDismissed);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = hasAnnouncement ? 120 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        hasAnnouncement ? "top-[2.5rem] sm:top-[2.75rem]" : "top-0"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-lg sm:text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Orca Circle
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-xs lg:text-sm text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-xs lg:text-sm text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-xs lg:text-sm text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-xs lg:text-sm text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

          {/* Primary CTA */}
          <div className="flex items-center">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white font-semibold py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full text-xs transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Join the Community (Free Forever)
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

