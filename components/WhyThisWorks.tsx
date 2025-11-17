export default function WhyThisWorks() {
  const points = [
    'Community-driven, not ad-driven',
    'Solves the cold start problem instantly',
    'Boosts visibility faster than paid advertising',
    'Works for any type of business',
    '100 percent free to join',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Why This Works
          </h2>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start bg-gradient-to-r from-white to-secondary-50/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-secondary-100"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-800 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
