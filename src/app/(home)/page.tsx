import FAQ from "@/components/landing/FAQ"
import { FeaturesGrid } from "@/components/landing/FeaturesGrid"
import FeaturesSub from "@/components/landing/FeaturesSub"
import FinalCTA, { SignupCTA } from "@/components/landing/SignupCTA"
import Hero from "@/components/landing/Hero"
import HeroImage from "@/components/landing/HeroImage"
import Pricing from "@/components/landing/Pricing"
import React from "react"

const Page = () => {
  return (
    <div>
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
