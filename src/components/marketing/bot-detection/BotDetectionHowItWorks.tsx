import { Code2, ScanSearch, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Code2,
    title: "Integrate in minutes",
    description:
      "Add a single script tag or install our SDK. Works with any framework, any language, and any infrastructure. No architectural changes required.",
  },
  {
    step: "02",
    icon: ScanSearch,
    title: "Detect automatically",
    description:
      "Our ML models begin analyzing traffic immediately, learning your normal patterns and flagging anomalies. Detection improves continuously with every request.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Block and protect",
    description:
      "Malicious bots are stopped at the edge before they hit your servers. Legitimate users pass through without friction, CAPTCHAs, or slowdowns.",
  },
]

export function BotDetectionHowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            Up and running in three steps
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed">
            Get from zero to fully protected in minutes, not weeks.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-start">
              {/* Step Number */}
              <span className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                Step {item.step}
              </span>
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-200 mb-4">
                <item.icon className="h-6 w-6 text-slate-700" />
              </div>
              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <Button
            className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium"
          >
            Get started for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
