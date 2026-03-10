import { cn } from "@/lib/utils"
import { Activity, Globe, Shield } from "lucide-react"

const steps = [
  { title: "Ingest every signal", description: "Connect social APIs, forum crawlers, and pastebin feeds. CynoGuard continuously indexes brand keywords, handles, and threat actors.", icon: Globe },
  { title: "Detect + score risk", description: "AI models cluster conversations, flag impersonations, and score severity so analysts focus on the highest-impact events.", icon: Activity },
  { title: "Coordinate response", description: "Trigger alerts, start takedowns, and share evidence with legal or trust & safety teams in a single workflow.", icon: Shield },
]

const outcomes = [
  "3x faster identification of impersonation campaigns",
  "60% reduction in manual analyst review time",
  "Unified evidence package for compliance and legal teams",
]

const HowItWorks = () => {
  return (
    <section className={cn("py-20 bg-[#020812] border-t border-gray-900")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// How it works</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">From noisy conversations to high-confidence alerts in minutes</h2>
          </div>
          <div className="rounded-xl border border-green-900/40 bg-green-950/20 px-5 py-4 text-sm text-gray-400 font-mono shrink-0">
            Avg. onboarding: <span className="font-semibold text-green-400">48 hours</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-xl border border-gray-800 bg-gray-900/60 p-6 hover:border-green-800 transition-all group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-950/40 border border-green-900/40 text-green-500 shrink-0 group-hover:border-green-700 transition-colors">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-green-500 font-mono">Step {index + 1}</span>
                  <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-green-400 transition-colors">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Outcomes</p>
            <h3 className="text-xl font-semibold text-white mb-5">Shorten detection windows, amplify response speed</h3>
            <div className="space-y-3">
              {outcomes.map((o) => (
                <div key={o} className="rounded-lg border border-gray-800 bg-gray-800/40 px-4 py-3 text-sm text-gray-400 hover:border-green-900 hover:text-gray-300 transition-colors">
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks