import SocialMonitoringFAQ from "@/components/landing/social-media-monitoring/FAQ"
import FeatureGrid from "@/components/landing/social-media-monitoring/FeatureGrid"
import SocialMonitoringHero from "@/components/landing/social-media-monitoring/Hero"
import HowItWorks from "@/components/landing/social-media-monitoring/HowItWorks"
import { SignupCTA } from "@/components/landing/SignupCTA"

const Page = () => {
  return (
    <div className="min-h-screen bg-[#020812]">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <SocialMonitoringHero />
      <FeatureGrid />
      <HowItWorks />
      <SocialMonitoringFAQ />
      <SignupCTA />
    </div>
  )
}

export default Page