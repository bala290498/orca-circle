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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            How the Community Works
          </h2>
          
          {/* Timeline - Clean zig-zag layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical timeline line - thinner and centered */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-secondary-500"></div>
            
            {/* Steps - Fixed vertical rhythm */}
            <div className="space-y-10 md:space-y-12">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const isLast = index === steps.length - 1;
                
                return (
                  <div
                    key={index}
                    className="relative flex items-center min-h-[120px] md:min-h-[140px]"
                  >
                    {/* Left card (even steps: 1, 3) - Desktop only */}
                    {isEven && (
                      <div className="hidden md:block w-full md:w-[calc(50%-2.5rem)] md:pr-4 relative">
                        <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-200 border-r-4 border-primary-500 h-full flex flex-col">
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 flex-grow">{step.description}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Timeline node - smaller with thinner border */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0 -ml-6 md:ml-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl font-semibold shadow-sm border-2 border-primary-500 text-primary-600">
                        {step.number}
                      </div>
                      {/* Mobile connecting line */}
                      {!isLast && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-5 md:hidden bg-gradient-to-b from-primary-400 to-primary-500"></div>
                      )}
                    </div>
                    
                    {/* Right card - Mobile: all cards on right, Desktop: odd steps (2, 4) */}
                    <div className={`w-full md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-4 relative ml-12 md:ml-auto ${isEven ? 'md:hidden' : ''}`}>
                      <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col border-l-4 border-primary-500">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 flex-grow">{step.description}</p>
                      </div>
                    </div>
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
