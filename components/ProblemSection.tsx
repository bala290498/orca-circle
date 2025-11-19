export default function ProblemSection() {
  const problems = [
    "Organic Reach Is Extremely Low for New Businesses",
    "Paid Advertisements (Ads) Are Costly and Unpredictable",
    "Competing With Big Brands Makes Visibility Hard",
    "Engagement Fades Without Steady Support",
    "New Creators Struggle to Get Initial Traction",
    "Building a Loyal Audience Takes Too Long",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-50" id="problem">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Single column layout */}
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)' }}>
                Problem
              </h2>
              <h3 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1rem, 2.5vw + 0.75rem, 1.5rem)' }}>
                Businesses Are Struggling to Get Reach and Real Engagement
              </h3>
            </div>

            {/* Content */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                Today, visibility is harder than ever. Paid promotions drain budgets. Organic reach is unpredictable. New businesses face the cold start problem — starting with zero audience and zero momentum.
              </p>

              {/* Problem Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 sm:p-5 border-l-4 border-red-500"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
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
                      <p className="text-gray-900 font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
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
