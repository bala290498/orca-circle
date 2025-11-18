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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            How the Community Works
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - centered on desktop */}
            <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-secondary-500"></div>
            
            {/* Steps */}
            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="relative flex items-start sm:items-center w-full"
                  >
                    {/* Left side card (even steps) */}
                    {isEven && (
                      <div className="ml-12 sm:ml-0 sm:w-[calc(50%-3rem)] sm:mr-auto sm:pr-8 bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                      </div>
                    )}
                    
                    {/* Timeline node - centered on the line */}
                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold shadow-md border-4 border-primary-600 text-primary-600">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Right side card (odd steps) */}
                    {!isEven && (
                      <div className="ml-12 sm:ml-auto sm:w-[calc(50%-3rem)] sm:pl-8 bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
