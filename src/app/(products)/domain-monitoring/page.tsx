import FeatureGrid from "@/components/products/domain-monitoring/FeatureGrid";
import FAQ from "@/components/products/domain-monitoring/FAQ";
import Hero from "@/components/products/domain-monitoring/Hero";
import HowItWorks from "@/components/products/domain-monitoring/HowItWorks";
import { SignupCTA } from "@/components/landing/SignupCTA";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#020812]">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <FAQ />
      <SignupCTA />
    </div>
  );
};

export default Page;