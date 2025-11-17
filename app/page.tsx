import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import WhyThisWorks from '@/components/WhyThisWorks'
import HowItWorks from '@/components/HowItWorks'
import MemberBenefits from '@/components/MemberBenefits'
import BusinessPillars from '@/components/BusinessPillars'
import Membership from '@/components/Membership'
import CommunityStructure from '@/components/CommunityStructure'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The Problem */}
      <ProblemSection />

      {/* 3. The Solution */}
      <SolutionSection />

      {/* 4. Why This Works */}
      <WhyThisWorks />

      {/* 5. How the Community Works */}
      <HowItWorks />

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
    </main>
  )
}
