export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Members Perform Small Engagement Tasks',
      description: 'Such as following, liking, commenting, and sharing.',
    },
    {
      number: 2,
      title: 'Businesses Gain Reach, Trust, and Improved Visibility',
      description: 'Across platforms.',
    },
    {
      number: 3,
      title: 'The Community Generates Revenue',
      description: 'Through its business pillars.',
    },
    {
      number: 4,
      title: 'Members Receive Valuable Non-Financial Rewards',
      description: 'Such as gift vouchers and platform subscriptions.',
    },
  ]

  return (
    <section id="how-it-works" className="pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Single column layout */}
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)' }}>
                How the Community Works
              </h2>
            </div>

            {/* Content */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                Our community operates through a straightforward process that creates value for both members and businesses.
              </p>

              {/* Timeline - Two-column layout: Timeline left, Cards right, both centered */}
              <div className="relative flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-[80px_auto] gap-3 md:gap-4 max-w-3xl mx-auto">
                  {/* Left Column - Timeline (Fixed Width) */}
                  <div className="hidden md:block relative w-20 flex justify-center">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-primary-500 -translate-x-1/2"></div>
                    
                    {/* Timeline nodes */}
                    <div className="space-y-8">
                      {steps.map((step, index) => {
                        return (
                          <div key={index} className="flex items-center justify-center h-[8.75rem]">
                            <div className="relative z-10">
                              {/* Step circle */}
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg font-semibold border-2 border-primary-500 text-primary-600 shadow-sm">
                                {step.number}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column - All Cards */}
                  <div className="hidden md:block">
                    <div className="space-y-8">
                      {steps.map((step, index) => {
                        return (
                          <div key={index} className="flex items-center justify-center h-[8.75rem]">
                            <div className="w-full max-w-md bg-white rounded-lg px-2 md:px-3 pt-1.5 md:pt-2 pb-0 transition-all duration-200 flex flex-col border-l-4 border-primary-500 h-[8.75rem] shadow-sm">
                              <h3 className="font-semibold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.5rem, 1rem)' }}>
                                {step.title}
                              </h3>
                              <p className="text-gray-700 mb-0" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>{step.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mobile Layout - Single column */}
                  <div className="md:hidden relative">
                    {/* Continuous timeline line for mobile */}
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-500"></div>
                    
                    <div className="space-y-8">
                      {steps.map((step, index) => {
                        return (
                          <div key={index} className="relative flex items-center gap-4">
                            {/* Timeline node - centered on the line */}
                            <div className="relative z-10 flex-shrink-0">
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-base font-semibold border-2 border-primary-500 text-primary-600 shadow-sm">
                                {step.number}
                              </div>
                            </div>
                            
                            {/* Card */}
                            <div className="flex-1 bg-white rounded-lg px-2 pt-1 pb-0 transition-all duration-200 flex flex-col border-l-4 border-primary-500 h-[6.875rem] shadow-sm">
                              <h3 className="font-semibold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                                {step.title}
                              </h3>
                              <p className="text-gray-700 leading-tight mb-0" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>{step.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
