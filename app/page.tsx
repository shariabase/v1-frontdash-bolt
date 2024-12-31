import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TokenomicsSection } from "@/components/landing/tokenomics-section"
import { BusinessSection } from "@/components/landing/business-section"
import { ScholarSection } from "@/components/landing/scholar-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { CtaSection } from "@/components/landing/cta-section"
import { LandingNav } from "@/components/landing/landing-nav"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BusinessSection />
        <ScholarSection />
        <TokenomicsSection />
        <CtaSection />
      </main>
    </div>
  )
}