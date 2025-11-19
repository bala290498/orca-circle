'use client';

import {
  Stories,
  StoriesContent,
  Story,
  StoryImage,
} from '@/components/Stories';

export default function StoriesSection() {
  // Sample stories data - replace with your actual data
  const stories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=600&fit=crop',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2" style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 1.875rem)' }}>
            Community Stories
          </h2>
          <Stories>
            <StoriesContent>
              {stories.map((story) => (
                <Story key={story.id} className="h-[300px] sm:h-[350px] md:h-[400px]">
                  <StoryImage
                    src={story.image}
                    alt="Community story"
                  />
                </Story>
              ))}
            </StoriesContent>
          </Stories>
        </div>
      </div>
    </section>
  );
}

