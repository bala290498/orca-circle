"use client";

import { useModal } from "@/contexts/ModalContext";

export default function MemberBenefits() {
  const { openModal } = useModal();
  const benefits = [
    {
      text: 'Amazon and Flipkart gift cards',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      text: 'Exclusive savings on group purchases',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      text: 'Additional earning opportunities',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: 'Promote your own business',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      text: 'Opportunities to join community-owned initiatives',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      text: 'Knowledge and skill-sharing sessions',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      text: 'Exposure, networking, and limitless growth opportunities',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading - Sticky on desktop */}
            <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)' }}>
                Member Benefits
              </h2>
              <h3 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1rem, 2.5vw + 0.75rem, 1.5rem)' }}>
                Your Activity = Real Rewards
              </h3>
            </div>

            {/* Right Column: Content */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                Members enjoy multiple high-value benefits, including exclusive rewards, special discounts, business and personal growth opportunities, strong community support, and constant networking with like-minded people — all designed to help you grow faster together.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[5rem] flex items-center"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex-shrink-0 flex items-center">
                        {benefit.icon}
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center lg:text-left flex justify-center lg:justify-start">
                <button
                  onClick={openModal}
                  className="w-full max-w-[90%] sm:max-w-[18.75rem] bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
                >
                  Start Receiving Benefits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
