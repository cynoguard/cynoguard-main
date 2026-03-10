
import SocialMonitoringFAQ from "@/components/landing/social-media-monitoring/FAQ"
import FeatureGrid from "@/components/landing/social-media-monitoring/FeatureGrid"
import SocialMonitoringHero from "@/components/landing/social-media-monitoring/Hero"
import HowItWorks from "@/components/landing/social-media-monitoring/HowItWorks"
import { SignupCTA } from "@/components/landing/SignupCTA"

const Page = () => {
  return (
    <div>
      <SocialMonitoringHero />
      <FeatureGrid />
      <HowItWorks />
      <SocialMonitoringFAQ />
      <SignupCTA />
    </div>
  )
}

export default Page