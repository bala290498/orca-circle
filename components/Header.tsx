"use client";

import { useModal } from "@/contexts/ModalContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnnouncement, setHasAnnouncement] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
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
              className="font-bold text-gray-900 hover:text-primary-600 transition-colors"
              style={{ fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.25rem)' }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Orca Circle
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              style={{ fontSize: 'clamp(0.75rem, 1vw + 0.5rem, 0.875rem)' }}
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              style={{ fontSize: 'clamp(0.75rem, 1vw + 0.5rem, 0.875rem)' }}
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              style={{ fontSize: 'clamp(0.75rem, 1vw + 0.5rem, 0.875rem)' }}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              style={{ fontSize: 'clamp(0.75rem, 1vw + 0.5rem, 0.875rem)' }}
            >
              FAQ
            </button>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-4 pt-2 pb-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors font-medium"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="block w-full text-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors font-medium"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors font-medium"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors font-medium"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

