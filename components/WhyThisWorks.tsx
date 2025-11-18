export default function WhyThisWorks() {
  const points = [
    {
      text: 'Community-driven, not ad-driven',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      text: 'Solves the cold start problem instantly',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      text: 'Boosts visibility faster than paid advertising',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      text: 'Works for any type of business',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      text: '100 percent free to join',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-secondary-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading */}
            <div className="flex flex-col lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why This Works
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                A Proven Approach That Delivers Real Results
              </h3>
            </div>

            {/* Right Column: Content */}
            <div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                By leveraging the power of collective engagement, we create sustainable growth that benefits everyone involved.
              </p>

              {/* Points Tiles */}
              <div className="space-y-4 sm:space-y-6">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[80px] flex items-center"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex-shrink-0 flex items-center">
                        {point.icon}
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
