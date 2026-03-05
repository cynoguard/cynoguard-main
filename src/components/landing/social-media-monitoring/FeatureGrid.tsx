import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Activity, Bot, CircleAlert, ShieldCheck, Users, Workflow } from "lucide-react"

const features = [
  {
    title: "Multi-platform coverage",
    description: "Monitor X, Reddit, TikTok, Instagram, forums, and dark-web mirrors from one console.",
    icon: Activity,
  },
  {
    title: "Phishing & impersonation detection",
    description: "Identify fake brand handles, lookalike promos, and account-takeover campaigns early.",
    icon: ShieldCheck,
  },
  {
    title: "AI triage & enrichment",
    description: "Auto-label severity, extract IoCs, and map attacker clusters with contextual data.",
    icon: Bot,
  },
  {
    title: "Incident-ready playbooks",
    description: "Coordinate takedowns, response workflows, and evidence capture in minutes.",
    icon: Workflow,
  },
  {
    title: "Executive reporting",
    description: "Weekly insight summaries that translate social risk into business impact.",
    icon: Users,
  },
  {
    title: "Compliance-grade alerting",
    description: "Configurable alerts with audit trails to meet SOC2 and ISO response requirements.",
    icon: CircleAlert,
  },
]

const FeatureGrid = () => {
  return (
    <section className={cn("relative py-20 bg-slate-50")}>
      <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -bottom-48 left-10 h-80 w-80 rounded-full bg-slate-200/70 blur-3xl" />

      <div className={cn("relative z-10 max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            Capabilities
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            A deep dive into social monitoring, built for security teams
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Replace manual searches with a dedicated intelligence layer. Automations surface the highest-risk
            conversations so your analysts can focus on response.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-slate-200 bg-white/90 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <feature.icon className="h-5 w-5" />
                  </div>
                </div>
                <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
