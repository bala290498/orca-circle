import { ShineBorder } from "@/registry/magicui/shine-border";

export default function BusinessPillars() {
  const pillars = [
    {
      number: 1,
      title: 'Community-Owned Businesses',
      description: 'Run entirely by active community members. Profits are reinvested into member rewards.',
      shineColor: ["#0284c7", "#0ea5e9", "#38bdf8"],
    },
    {
      number: 2,
      title: 'In-House Initiatives',
      description: 'Member-owned businesses get promotional support, exclusive discounts, and increased client reach.',
      shineColor: ["#0369a1", "#0284c7", "#0ea5e9"],
    },
    {
      number: 3,
      title: 'Trusted Partner Program',
      description: 'External brands can promote instantly to our active community in return for fees that become member rewards.',
      shineColor: ["#075985", "#0369a1", "#0284c7"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Three Business Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <ShineBorder
                key={index}
                className="relative w-full overflow-visible"
                color={pillar.shineColor}
                borderRadius={12}
                borderWidth={2}
                duration={14}
              >
                <div className="bg-white p-8 h-full">
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {pillar.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
