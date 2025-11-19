"use client";

import { useModal } from "@/contexts/ModalContext";
import { AvatarCircles } from "@/registry/magicui/avatar-circles";

const avatarUrls = [
  "https://ui-avatars.com/api/?name=John+Smith&background=3B82F6&color=fff",
  "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366F1&color=fff",
  "https://ui-avatars.com/api/?name=Michael+Brown&background=10B981&color=fff",
  "https://ui-avatars.com/api/?name=Emily+Davis&background=A855F7&color=fff",
  "https://ui-avatars.com/api/?name=David+Wilson&background=F59E0B&color=fff",
  "https://ui-avatars.com/api/?name=Jessica+Martinez&background=64748B&color=fff",
  "https://ui-avatars.com/api/?name=Robert+Taylor&background=3B82F6&color=fff",
  "https://ui-avatars.com/api/?name=Amanda+Anderson&background=6366F1&color=fff",
  "https://ui-avatars.com/api/?name=Christopher+Thomas&background=10B981&color=fff",
  "https://ui-avatars.com/api/?name=Lisa+Jackson&background=A855F7&color=fff",
  "https://ui-avatars.com/api/?name=Daniel+White&background=F59E0B&color=fff",
  "https://ui-avatars.com/api/?name=Michelle+Harris&background=64748B&color=fff",
];

export default function HeroSection() {
  const { openModal } = useModal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar Circles */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <AvatarCircles numPeople={100} avatarUrls={avatarUrls} />
          </div>

          {/* Headline */}
          <h1 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2.5rem)' }}>
            Grow Your Business Faster With the Power of Community
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)' }}>
            Instant reach, real engagement, and rewards — all from a supportive member network.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center items-center">
            <button
              onClick={openModal}
              className="w-full max-w-[90%] sm:max-w-[16rem] bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
            >
              Join the Community
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="w-full max-w-[90%] sm:max-w-[16rem] border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
            >
              Learn How It Works
            </button>
          </div>

          {/* Microcopy */}
          <p className="text-gray-600 mb-6 sm:mb-8" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
            No Cost • 5–15 Minutes Per Day
          </p>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">100+ Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-medium">10+ Businesses Promoted</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Free for Life</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
