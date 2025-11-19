'use client';

import {
  Stories,
  StoriesContent,
  Story,
} from '@/components/Stories';

export default function StoriesSection() {
  const pillars = [
    {
      id: 1,
      number: 1,
      title: 'Community-Owned Businesses',
      description: 'Run entirely by active community members. Profits are reinvested into member rewards.',
    },
    {
      id: 2,
      number: 2,
      title: 'In-House Initiatives',
      description: 'Member-owned businesses get promotional support, exclusive discounts, and increased client reach.',
    },
    {
      id: 3,
      number: 3,
      title: 'Trusted Partner Program',
      description: 'External brands can promote instantly to our active community in return for fees that become member rewards.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <h2 className="font-bold text-gray-900 text-center px-2" style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 1.875rem)' }}>
            Community Stories
          </h2>
        </div>
        <div className="w-full overflow-hidden">
          <Stories>
            <StoriesContent className="!ml-0">
              {pillars.map((pillar, index) => (
                <Story 
                  key={pillar.id} 
                  className={`h-[300px] sm:h-[350px] md:h-[400px] bg-black rounded-3xl ${
                    index === 0 ? '!pl-4 sm:!pl-6 md:!pl-8 !pr-2' : index === pillars.length - 1 ? '!pl-2 !pr-4 sm:!pr-6 md:!pr-8' : '!pl-2 !pr-2'
                  }`}
                >
                  <div className="h-full w-full p-6 sm:p-8 flex flex-col justify-center">
                    <div className="font-bold text-primary-400 mb-4 sm:mb-6" style={{ fontSize: 'clamp(2rem, 2.5vw + 1rem, 2.5rem)' }}>
                      {pillar.number}
                    </div>
                    <h3 className="font-bold text-white mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                      {pillar.description}
                    </p>
                  </div>
                </Story>
              ))}
            </StoriesContent>
          </Stories>
        </div>
      </div>
    </section>
  );
}

