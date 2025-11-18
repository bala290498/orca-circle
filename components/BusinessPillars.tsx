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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            Our Three Business Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="w-full min-w-0 h-full bg-white rounded-lg p-4 sm:p-6 md:p-8 flex-1 flex flex-col shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-3 sm:mb-4">
                  {pillar.number}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
