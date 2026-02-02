import React from 'react';
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import { SignupCTA } from "@/components/landing/SignupCTA";
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';

const Page = () => {
  return (
    <div className={cn("min-h-screen flex flex-col bg-white")}>

      {/* Pricing Section */}
      <Pricing />

      {/* Comparison Table */}
      <section className={cn("py-24 bg-slate-50")}>
        <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
          <div className={cn("text-center mb-16")}>
            <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4")}>
              Compare Plans
            </h2>
            <p className={cn("text-slate-500 text-lg max-w-2xl mx-auto")}>
              See what's included in each plan
            </p>
          </div>

          <div className={cn("bg-white border border-slate-200 overflow-hidden")}>
            <div className={cn("overflow-x-auto")}>
              <table className={cn("w-full border-collapse")}>
                <thead>
                  <tr className={cn("border-b border-slate-200")}>
                    <th className={cn("text-left py-4 px-6 font-semibold text-slate-900 border-r border-slate-200")}>Features</th>
                    <th className={cn("text-center py-4 px-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50")}>Free</th>
                    <th className={cn("text-center py-4 px-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50")}>Pro</th>
                    <th className={cn("text-center py-4 px-6 font-semibold text-slate-900 bg-slate-50")}>Startup</th>
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
                    <tr key={index} className={cn("border-b border-slate-200")}>
                      <td className={cn("py-4 px-6 text-slate-700 font-medium border-r border-slate-200")}>{row.feature}</td>
                      <td className={cn("py-4 px-6 text-center text-slate-600 border-r border-slate-200")}>
                        {typeof row.free === 'boolean' ? (
                          row.free ? <Check className={cn("w-5 h-5 mx-auto text-slate-900")} /> : <span className={cn("text-slate-400")}>—</span>
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className={cn("py-4 px-6 text-center text-slate-600 border-r border-slate-200")}>
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className={cn("w-5 h-5 mx-auto text-slate-900")} /> : <span className={cn("text-slate-400")}>—</span>
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className={cn("py-4 px-6 text-center text-slate-600")}>
                        {typeof row.startup === 'boolean' ? (
                          row.startup ? <Check className={cn("w-5 h-5 mx-auto text-slate-900")} /> : <span className={cn("text-slate-400")}>—</span>
                        ) : (
                          row.startup
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <SignupCTA />
    </div>
  );
};

export default Page;