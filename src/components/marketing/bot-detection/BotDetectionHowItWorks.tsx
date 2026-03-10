import { Code2, ScanSearch, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  { step: "01", icon: Code2, title: "Integrate in minutes", description: "Add a single script tag or install our SDK. Works with any framework, any language, and any infrastructure. No architectural changes required." },
  { step: "02", icon: ScanSearch, title: "Detect automatically", description: "Our ML models begin analyzing traffic immediately, learning your normal patterns and flagging anomalies. Detection improves continuously with every request." },
  { step: "03", icon: ShieldCheck, title: "Block and protect", description: "Malicious bots are stopped at the edge before they hit your servers. Legitimate users pass through without friction, CAPTCHAs, or slowdowns." },
]

export function BotDetectionHowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#020812] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// How it works</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">Up and running in three steps</h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">Get from zero to fully protected in minutes, not weeks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, i) => (
            <div key={item.step} className="relative flex flex-col items-start group">
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-4 font-mono">Step {item.step}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-950/40 border border-green-900/40 mb-4 group-hover:border-green-700 transition-colors">
                <item.icon className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">{item.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-full h-px bg-gradient-to-r from-green-900/40 to-transparent -translate-x-6" />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-md text-base font-medium shadow-lg shadow-green-900/40" asChild>
            <Link href="/sign-up">Get started for free <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}