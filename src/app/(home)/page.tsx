import FAQ from "@/components/landing/FAQ"
import { FeaturesGrid } from "@/components/landing/FeaturesGrid"
import FeaturesSub from "@/components/landing/FeaturesSub"
import { SignupCTA } from "@/components/landing/SignupCTA"
import Hero from "@/components/landing/Hero"
import HeroImage from "@/components/landing/HeroImage"
import Pricing from "@/components/landing/Pricing"
import React from "react"

const Page = () => {
  return (
    <div className="bg-[#020812] min-h-screen">
      <Hero/>
      <HeroImage/>
      <FeaturesGrid/>
      <FeaturesSub/>
      <Pricing/>
      <FAQ/>
      <SignupCTA/>
    </div>
  )
}

export default Page