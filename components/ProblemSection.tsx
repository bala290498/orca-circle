export default function ProblemSection() {
  const problems = [
    "Organic reach is extremely low for new businesses.",
    "Paid ads are costly and unpredictable.",
    "Competing with big brands makes visibility hard.",
    "Engagement fades without steady support.",
    "New creators struggle to get initial traction.",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-secondary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading */}
            <div className="flex flex-col lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Problems
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                Businesses Are Struggling to Get Reach and Real Engagement
              </h3>
            </div>

            {/* Right Column: Content */}
            <div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Today, visibility is harder than ever. Paid promotions drain budgets. Organic reach is unpredictable. New businesses face the cold start problem — starting with zero audience and zero momentum.
              </p>

              {/* Problem Tiles */}
              <div className="space-y-4 sm:space-y-6">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[80px] flex items-center"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex-shrink-0 flex items-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {problem}
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
