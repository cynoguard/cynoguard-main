import React from 'react';
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import { SignupCTA } from "@/components/landing/SignupCTA";
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';

const Page = () => {
  return (
    <div className={cn("min-h-screen flex flex-col bg-[#020812]")}>

      {/* Hero */}
      <section className="pt-24 pb-4 md:pt-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(34,197,94,0.07),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Pricing</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">Simple, transparent pricing</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">Start free. Scale as you grow. No hidden fees.</p>
        </div>
      </section>

      <Pricing />

      {/* Comparison Table */}
      <section className={cn("py-24 border-t border-gray-900")}>
        <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
          <div className={cn("text-center mb-16")}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Compare</p>
            <h2 className={cn("text-4xl md:text-5xl font-bold text-white tracking-tight mb-4")}>Compare Plans</h2>
            <p className={cn("text-gray-400 text-lg max-w-2xl mx-auto")}>See what&apos;s included in each plan</p>
          </div>

          <div className={cn("border border-gray-800 rounded-xl overflow-hidden bg-gray-900/60")}>
            <div className={cn("overflow-x-auto")}>
              <table className={cn("w-full border-collapse")}>
                <thead>
                  <tr className={cn("border-b border-gray-800")}>
                    <th className={cn("text-left py-4 px-6 font-semibold text-gray-300 border-r border-gray-800 font-mono text-sm")}>Features</th>
                    <th className={cn("text-center py-4 px-6 font-semibold text-gray-300 border-r border-gray-800 font-mono text-sm")}>Free</th>
                    <th className={cn("text-center py-4 px-6 font-semibold text-green-400 border-r border-gray-800 font-mono text-sm")}>Pro</th>
                    <th className={cn("text-center py-4 px-6 font-semibold text-gray-300 font-mono text-sm")}>Startup</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Domain Monitoring", free: "Limited", pro: "Advanced", startup: "Unlimited" },
                    { feature: "Bot Detection", free: "Basic", pro: "Enhanced", startup: "Advanced AI" },
                    { feature: "Social Media Monitoring", free: "Basic", pro: "Full Suite", startup: "Full Suite" },
                    { feature: "API Access", free: false, pro: true, startup: true },
                    { feature: "Priority Support", free: false, pro: true, startup: true },
                    { feature: "Custom Security Rules", free: false, pro: false, startup: true },
                    { feature: "Dedicated Account Manager", free: false, pro: false, startup: true },
                    { feature: "Advanced Analytics", free: false, pro: false, startup: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-300 font-medium border-r border-gray-800">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-500 border-r border-gray-800">
                        {typeof row.free === 'boolean' ? (row.free ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <span className="text-gray-700">—</span>) : row.free}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-400 border-r border-gray-800">
                        {typeof row.pro === 'boolean' ? (row.pro ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <span className="text-gray-700">—</span>) : row.pro}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">
                        {typeof row.startup === 'boolean' ? (row.startup ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <span className="text-gray-700">—</span>) : row.startup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <SignupCTA />
    </div>
  );
};

export default Page;