export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Members perform small engagement tasks',
      description: 'Such as following, liking, commenting, and sharing.',
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
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            How the Community Works
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-50 to-secondary-50/50 rounded-lg p-4 sm:p-6 border-l-4 border-primary-600 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
