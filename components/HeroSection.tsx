"use client";

import { AvatarCircles } from "@/registry/magicui/avatar-circles";
import { useModal } from "@/contexts/ModalContext";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar Circles */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
          </div>

          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Grow Your Business Faster With the Power of Community
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Instant reach, real engagement, and rewards — all from a supportive member network.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center items-center">
            <button
              onClick={openModal}
              className="w-full max-w-[280px] sm:max-w-[300px] bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white font-semibold py-2.5 px-6 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join the Community
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="w-full max-w-[280px] sm:max-w-[300px] border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-2.5 px-6 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
            >
              Learn How It Works
            </button>
          </div>

          {/* Microcopy */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            No fees • 5–15 minutes/day
          </p>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-700">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">20k+ members</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-medium">10k+ businesses promoted</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Free for life</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
