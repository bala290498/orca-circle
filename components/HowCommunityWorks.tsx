export default function HowCommunityWorks() {
  const steps = [
    {
      number: 1,
      title: 'Members perform small engagement tasks',
      description: 'Such as following, liking, commenting.',
    },
    {
      number: 2,
      title: 'Businesses gain reach, trust, and improved visibility',
      description: 'Across platforms.',
    },
    {
      number: 3,
      title: 'The community generates revenue',
      description: 'Through its business pillars.',
    },
    {
      number: 4,
      title: 'Members receive valuable non-financial rewards',
      description: 'Such as gift vouchers and platform subscriptions.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Single column layout */}
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <div className="mb-8 sm:mb-10 text-center">
              <h2 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)' }}>
                How the Community Works
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                Our community operates through a straightforward process that creates value for both members and businesses.
              </p>
            </div>

            {/* Flat Tile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-primary-300 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-primary-500 transition-all flex flex-col items-center justify-center text-center"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-sm mx-auto">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: 'clamp(1rem, 1.2vw + 0.5rem, 1.125rem)' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

