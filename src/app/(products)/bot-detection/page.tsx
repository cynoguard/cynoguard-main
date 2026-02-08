import type { Metadata } from "next"
import { BotDetectionHero } from "@/components/marketing/bot-detection/BotDetectionHero"
import { BotDetectionFeatureGrid } from "@/components/marketing/bot-detection/BotDetectionFeatureGrid"
import { BotDetectionHowItWorks } from "@/components/marketing/bot-detection/BotDetectionHowItWorks"


export const metadata: Metadata = {
  title: "Bot Detection | CynoGuard",
  description:
    "Real-time ML-powered bot detection that identifies and blocks automated threats with sub-millisecond latency. Protect your platform without compromising user experience.",
}

export default function BotDetectionPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <BotDetectionHero />
      <BotDetectionFeatureGrid />
      <BotDetectionHowItWorks />

      {/* Footer CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            Ready to stop bots in their tracks?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Join thousands of companies that trust CynoGuard to protect their
            platforms from automated threats.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium transition-colors"
            >
              Start your free trial
            </a>
          </div>
        </div>
      </section>

      
    </main>
  )
}
