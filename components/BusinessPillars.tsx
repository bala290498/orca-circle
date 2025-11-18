export default function BusinessPillars() {
  const pillars = [
    {
      number: 1,
      title: 'Community-Owned Businesses',
      description: 'Run entirely by active community members. Profits are reinvested into member rewards.',
    },
    {
      number: 2,
      title: 'In-House Initiatives',
      description: 'Member-owned businesses get promotional support, exclusive discounts, and increased client reach.',
    },
    {
      number: 3,
      title: 'Trusted Partner Program',
      description: 'External brands can promote instantly to our active community in return for fees that become member rewards.',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            Our Three Business Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative w-full min-w-0 h-full rounded-lg p-[3px] overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #6b7280, #9ca3af, #d1d5db, #e5e7eb, #f3f4f6, #9ca3af, #6b7280, #4b5563, #374151, #6b7280, #9ca3af, #d1d5db, #6b7280)',
                  backgroundSize: '300% 300%',
                  animation: 'border-rotate 4s linear infinite',
                }}
              >
                <div className="w-full h-full bg-white rounded-lg p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-3 sm:mb-4">
                    {pillar.number}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
