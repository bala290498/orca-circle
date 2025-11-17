"use client";

import { useModal } from "@/contexts/ModalContext";

export default function SolutionSection() {
  const { openModal } = useModal();
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">
            A Community That Actively Promotes and Supports Each Other
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 text-center leading-relaxed max-w-3xl mx-auto px-2">
            Our member-driven ecosystem helps businesses grow through consistent social engagement. Members follow, like, share, and comment across platforms — creating instant traction and real visibility.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 sm:p-6 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Authentic engagement from real people
                </h3>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 sm:p-6 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Fast audience growth
                </h3>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 sm:p-6 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Zero cost to join
                </h3>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 sm:p-6 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Benefits for every active member
                </h3>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center px-2">
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Become an Active Member
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
