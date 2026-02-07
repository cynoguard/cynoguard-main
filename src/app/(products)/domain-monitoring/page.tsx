
import FeatureGrid from "@/components/products/domain-monitoring/FeatureGrid";
import Hero from "@/components/products/domain-monitoring/Hero";
import HowItWorks from "@/components/products/domain-monitoring/HowItWorks";
import Footer from "@/components/shared/Footer";

const Page = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="absolute top-16 right-0 h-96 w-96 translate-x-1/4 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        </div>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
};

export default Page;
