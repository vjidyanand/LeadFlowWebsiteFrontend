import { CTASection } from "@/components/cta/cta-section"
import { FeatureSection } from "@/components/features/feature-section"
import { HeroSection } from "@/components/hero/hero-section"
import { AIAutomation } from "@/components/landing/AIAutomation"
import { AIHumanSection } from "@/components/landing/AIHumanSection"
import { Analytics } from "@/components/landing/Analytics"
import { BookingConversion } from "@/components/landing/BookingConversion"
import { DashboardPreview } from "@/components/landing/DashboardPreview"
import { EmployeeManagement } from "@/components/landing/EmployeeManagement"
import { FAQ } from "@/components/landing/FAQ"
import { FinalCTA } from "@/components/landing/FinalCTA"
import { Footer } from "@/components/landing/Footer"
import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { Integrations } from "@/components/landing/Integrations"
import { LeadLifecycle } from "@/components/landing/LeadLifecycle"
import { LeadScoring } from "@/components/landing/LeadScoring"
import { ProblemSection } from "@/components/landing/ProblemSection"
import { PropertyMatching } from "@/components/landing/PropertyMatching"
import { PurchasePlans } from "@/components/landing/PurchasePlans"
import { PlanSelectionProvider } from "@/components/landing/PlanSelectionContext"
import { Security } from "@/components/landing/Security"
import { SolutionSection } from "@/components/landing/SolutionSection"
import { Testimonials } from "@/components/landing/Testimonials"
import { TrustBar } from "@/components/landing/TrustBar"
import { StatsSection } from "@/components/stats/stats-section"

export default function Home() {
  return (
    <>
      <Header />
      <PlanSelectionProvider>
      <main id="main-content">
        <HeroSection />
        <StatsSection />
        {/* <Hero /> */}
        <TrustBar />
        <FeatureSection />
        {/* <ProblemSection />
        <SolutionSection /> */}
        <DashboardPreview />
        <BookingConversion />
        <CTASection />
        <PropertyMatching />
        {/* -----------above completed--------------- */}
        <PurchasePlans />
        <LeadLifecycle />
        <AIHumanSection />
        <AIAutomation />
        <EmployeeManagement />
        <LeadScoring />
        <Analytics />
        <Integrations />
        <Security />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      </PlanSelectionProvider>
      <Footer />
    </>
  )
}
