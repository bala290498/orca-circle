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
      color: 'bg-gray-100',
    },
    {
      id: 2,
      number: 2,
      title: 'In-House Initiatives',
      description: 'Member-owned businesses get promotional support, exclusive discounts, and increased client reach.',
      color: 'bg-gray-100',
    },
    {
      id: 3,
      number: 3,
      title: 'Trusted Partner Program',
      description: 'External brands can promote instantly to our active community in return for fees that become member rewards.',
      color: 'bg-gray-100',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <h2 className="font-bold text-gray-900 text-center px-2" style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 1.875rem)' }}>
            Our Three Business Pillars
          </h2>
        </div>
        <div className="w-full overflow-x-auto overflow-y-visible">
          <Stories>
            <StoriesContent className="!ml-0 pl-6 sm:pl-8 md:pl-10">
              {pillars.map((pillar, index) => {
                const isFirst = index === 0;
                const isLast = index === pillars.length - 1;
                const isOnly = pillars.length === 1;
                
                // All cards aligned left, no right gaps, left gap from container
                let paddingClasses = '';
                if (isFirst) {
                  // First card: uses container left gap, no right padding
                  paddingClasses = '!pl-0 !pr-0';
                } else {
                  // All other cards: spacing from previous card, no right padding
                  paddingClasses = '!pl-2 !pr-0';
                }
                
                return (
                  <Story 
                    key={pillar.id}
                    className={`h-[300px] sm:h-[350px] md:h-[400px] ${pillar.color} rounded-3xl ${paddingClasses} !hover:scale-100 !hover:shadow-none cursor-default`}
                    style={{
                      transform: 'scale(1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="h-full w-full p-6 sm:p-8 relative">
                      {/* Number icon - Top left, big */}
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 font-bold text-primary-400" style={{ fontSize: 'clamp(3.5rem, 5vw + 2rem, 5rem)' }}>
                        {pillar.number}
                      </div>
                      
                      {/* Content - Positioned below number */}
                      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-8">
                        <h3 className="font-bold text-white mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
                          {pillar.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed line-clamp-3" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </Story>
                );
              })}
            </StoriesContent>
          </Stories>
        </div>
      </div>
    </section>
  );
}

