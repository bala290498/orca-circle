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
          
          {/* Timeline - Two-column layout: Timeline left, Cards right, both centered */}
          <div className="relative flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[100px_auto] gap-6 md:gap-6">
              {/* Left Column - Timeline (Fixed Width) */}
              <div className="hidden md:block relative w-[100px] flex justify-center">
                {/* Vertical timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-secondary-500 -translate-x-1/2"></div>
                
                {/* Timeline nodes */}
                <div className="space-y-8">
                  {steps.map((step, index) => {
                    return (
                      <div key={index} className="flex items-center justify-center h-[140px]">
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
                      <div key={index} className="flex items-center justify-center h-[140px]">
                        <div className="w-full max-w-md bg-white rounded-lg p-5 md:p-6 transition-all duration-200 flex flex-col border-l-4 border-primary-500 h-[140px] shadow-sm">
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Layout - Single column */}
              <div className="md:hidden space-y-8">
                {steps.map((step, index) => {
                  return (
                    <div key={index} className="relative">
                      {/* Timeline line for mobile */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-secondary-500"></div>
                      
                      <div className="flex items-center ml-8">
                        {/* Timeline node */}
                        <div className="absolute left-0 z-10 -translate-x-1/2">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-base font-semibold border-2 border-primary-500 text-primary-600">
                            {step.number}
                          </div>
                        </div>
                        
                        {/* Card */}
                        <div className="w-full bg-white rounded-lg p-5 transition-all duration-200 flex flex-col border-l-4 border-primary-500 min-h-[140px] ml-6">
                          <h3 className="text-base font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
