export default function BusinessPillars() {
  const pillars = [
    {
      number: 1,
      title: 'Community-Owned Businesses',
      description: 'Run entirely by active community members. Profits are reinvested into member rewards.',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'In-House Initiatives',
      description: 'Member-owned businesses get promotional support, exclusive discounts, and increased client reach.',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Trusted Partner Program',
      description: 'External brands can promote instantly to our active community in return for fees that become member rewards.',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2" style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 1.875rem)' }}>
            Our Three Business Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 rounded-full mb-4 sm:mb-6 flex-shrink-0">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed flex-1" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
