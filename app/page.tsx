"use client";

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import WhyThisWorks from '@/components/WhyThisWorks'
import HowCommunityWorks from '@/components/HowCommunityWorks'
import MemberBenefits from '@/components/MemberBenefits'
import BusinessPillars from '@/components/BusinessPillars'
import Membership from '@/components/Membership'
import CommunityStructure from '@/components/CommunityStructure'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import JoinFormModal from '@/components/JoinFormModal'
import GreetingModal from '@/components/GreetingModal'
import { useModal } from '@/contexts/ModalContext'

export default function Home() {
  const { isModalOpen, closeModal } = useModal();
  const [greetingModal, setGreetingModal] = useState({ isOpen: false, userName: "", userWhatsApp: "" });

  // Get current section in view
  const getCurrentSection = () => {
    if (typeof window === 'undefined') return null;
    
    const sections = [
      'benefits',
      'membership',
      'testimonials',
      'faq'
    ];

    const scrollPosition = window.scrollY + 150; // Offset for header

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          return sectionId;
        }
      }
    }
    return null;
  };

  // Restore scroll position on mobile after reload
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isMobile = window.innerWidth < 768; // md breakpoint
    if (!isMobile) return;

    const lastSection = localStorage.getItem('lastViewedSection');
    if (lastSection) {
      // Wait for page to fully load
      const timer = setTimeout(() => {
        const element = document.getElementById(lastSection);
        if (element) {
          const headerHeight = 120;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto' // Instant scroll on reload
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // Track scroll position and save last viewed section on mobile
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isMobile = window.innerWidth < 768; // md breakpoint
    if (!isMobile) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentSection = getCurrentSection();
          if (currentSection) {
            localStorage.setItem('lastViewedSection', currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleShowGreeting = (event: CustomEvent) => {
      const { name, whatsapp } = event.detail;
      setGreetingModal({ isOpen: true, userName: name, userWhatsApp: whatsapp || "" });
    };

    window.addEventListener('showGreeting', handleShowGreeting as EventListener);

    return () => {
      window.removeEventListener('showGreeting', handleShowGreeting as EventListener);
    };
  }, []);

  const closeGreetingModal = () => {
    setGreetingModal({ isOpen: false, userName: "", userWhatsApp: "" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The Problem */}
      <ProblemSection />

      {/* 3. The Solution */}
      <SolutionSection />

      {/* 4. Why This Works */}
      <WhyThisWorks />

      {/* 5. How the Community Works */}
      <HowCommunityWorks />

      {/* 6. Member Benefits */}
      <MemberBenefits />

      {/* 7. Our Three Business Pillars */}
      <BusinessPillars />

      {/* 8. Membership */}
      <Membership />

      {/* 9. Community Structure */}
      <CommunityStructure />

      {/* 10. Testimonials (Social Proof) */}
      <Testimonials />

      {/* 11. FAQ (Remove objections) */}
      <FAQ />

      {/* 12. Final Call to Action */}
      <FinalCTA />

      {/* 13. Footer */}
      <Footer />

      {/* Global Join Form Modal */}
      <JoinFormModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Greeting Modal */}
      <GreetingModal 
        isOpen={greetingModal.isOpen} 
        onClose={closeGreetingModal}
        userName={greetingModal.userName}
        userWhatsApp={greetingModal.userWhatsApp}
      />
    </main>
  )
}
