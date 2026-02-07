import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Activity, Globe, Shield } from "lucide-react"

const steps = [
  {
    title: "Ingest every signal",
    description:
      "Connect social APIs, forum crawlers, and pastebin feeds. CynoGuard continuously indexes brand keywords, handles, and threat actors.",
    icon: Globe,
  },
  {
    title: "Detect + score risk",
    description:
      "AI models cluster conversations, flag impersonations, and score severity so analysts focus on the highest-impact events.",
    icon: Activity,
  },
  {
    title: "Coordinate response",
    description:
      "Trigger alerts, start takedowns, and share evidence with legal or trust & safety teams in a single workflow.",
    icon: Shield,
  },
]

const HowItWorks = () => {
  return (
    <section className={cn("py-20 bg-slate-50")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              From noisy conversations to high-confidence alerts in minutes
            </h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
            Average onboarding time: <span className="font-semibold text-slate-900">48 hours</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-slate-200">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-blue-600">Step {index + 1}</span>
                      <Separator className="hidden h-0.5 flex-1 bg-slate-200 md:block" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-slate-200 bg-white">
            <CardContent className="p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Outcomes</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  Shorten detection windows, amplify response speed
                </h3>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  3x faster identification of impersonation campaigns
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  60% reduction in manual analyst review time
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  Unified evidence package for compliance and legal teams
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
