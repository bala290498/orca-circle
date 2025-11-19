"use client";

import { useModal } from "@/contexts/ModalContext";

export default function SolutionSection() {
  const { openModal } = useModal();
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading - Sticky on desktop */}
            <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)' }}>
                Solution
              </h2>
              <h3 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1rem, 2.5vw + 0.75rem, 1.5rem)' }}>
                A Community That Actively Promotes and Supports Each Other
              </h3>
            </div>

            {/* Right Column: Content */}
            <div>
              <p className="text-gray-700 mb-8 sm:mb-10 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                Our member-driven ecosystem helps businesses grow through consistent social engagement. Members follow, like, share, and comment across platforms — creating instant traction and real visibility.
              </p>

              {/* Solution Tiles */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[5rem] flex items-center">
                  <div className="flex items-center space-x-3 w-full">
                    <div className="flex-shrink-0 flex items-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      Authentic Engagement From Real People
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[5rem] flex items-center">
                  <div className="flex items-center space-x-3 w-full">
                    <div className="flex-shrink-0 flex items-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      Fast Audience Growth
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[5rem] flex items-center">
                  <div className="flex items-center space-x-3 w-full">
                    <div className="flex-shrink-0 flex items-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      Zero Cost to Join
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[5rem] flex items-center">
                  <div className="flex items-center space-x-3 w-full">
                    <div className="flex-shrink-0 flex items-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      Benefits for Every Active Member
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[5rem] flex items-center">
                  <div className="flex items-center space-x-3 w-full">
                    <div className="flex-shrink-0 flex items-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      Boosted Trust and Credibility
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-left flex justify-center lg:justify-start">
                <button
                  onClick={openModal}
                  className="w-full max-w-[90%] sm:max-w-[18.75rem] bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
                >
                  Become an Active Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
