import type { Metadata } from "next"
import { BotDetectionHero } from "@/components/marketing/bot-detection/BotDetectionHero"
import { BotDetectionFeatureGrid } from "@/components/marketing/bot-detection/BotDetectionFeatureGrid"
import { BotDetectionHowItWorks } from "@/components/marketing/bot-detection/BotDetectionHowItWorks"
import { SignupCTA } from "@/components/landing/SignupCTA"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Bot Detection | CynoGuard",
  description: "Real-time ML-powered bot detection that identifies and blocks automated threats with sub-millisecond latency.",
}

export default function BotDetectionPage() {
  return (
    <main className="min-h-screen bg-[#020812]">
      <BotDetectionHero />
      <BotDetectionFeatureGrid />
      <BotDetectionHowItWorks />

      <section className="py-20 md:py-28 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(34,197,94,0.08),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
            Ready to stop bots in their tracks?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Join thousands of companies that trust CynoGuard to protect their platforms from automated threats.
          </p>
          <div className="mt-10">
            <Link href="/sign-up"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-md text-base font-medium transition-all shadow-lg shadow-green-900/40 hover:scale-[1.02]">
              Start your free trial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SignupCTA />
    </main>
  )
}