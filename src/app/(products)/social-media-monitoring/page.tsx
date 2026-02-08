
import SocialMonitoringFAQ from "@/components/landing/social-media-monitoring/FAQ"
import FeatureGrid from "@/components/landing/social-media-monitoring/FeatureGrid"
import SocialMonitoringHero from "@/components/landing/social-media-monitoring/Hero"
import HowItWorks from "@/components/landing/social-media-monitoring/HowItWorks"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/NavBar"

const Page = () => {
  return (
    <div>
      <Navbar/>
      <SocialMonitoringHero />
      <FeatureGrid />
      <HowItWorks />
      <SocialMonitoringFAQ />
      <Footer/>
    </div>
  )
}

export default Page
