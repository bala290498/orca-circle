export default function Membership() {
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free for Life. No Investment. No Payment. Ever.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Your only responsibility is to stay active within the community.
          </p>
          <p className="text-2xl font-semibold text-primary-600 mb-10">
            Every active member earns — without spending a single rupee.
          </p>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 border-2 border-primary-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl font-bold text-gray-900">
              <svg
                className="w-10 h-10 text-primary-600"
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
              <span>100% Free Forever</span>
              <span className="hidden sm:inline">•</span>
              <span>No Hidden Costs</span>
              <span className="hidden sm:inline">•</span>
              <span>No Subscription</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
