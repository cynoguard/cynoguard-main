import { cn } from "@/lib/utils"
import { Activity, Bot, CircleAlert, ShieldCheck, Users, Workflow } from "lucide-react"

const features = [
  { title: "Multi-platform coverage", description: "Monitor X, Reddit, TikTok, Instagram, forums, and dark-web mirrors from one console.", icon: Activity },
  { title: "Phishing & impersonation detection", description: "Identify fake brand handles, lookalike promos, and account-takeover campaigns early.", icon: ShieldCheck },
  { title: "AI triage & enrichment", description: "Auto-label severity, extract IoCs, and map attacker clusters with contextual data.", icon: Bot },
  { title: "Incident-ready playbooks", description: "Coordinate takedowns, response workflows, and evidence capture in minutes.", icon: Workflow },
  { title: "Executive reporting", description: "Weekly insight summaries that translate social risk into business impact.", icon: Users },
  { title: "Compliance-grade alerting", description: "Configurable alerts with audit trails to meet SOC2 and ISO response requirements.", icon: CircleAlert },
]

const FeatureGrid = () => {
  return (
    <section className={cn("py-20 bg-[#020812] border-t border-gray-900")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">A deep dive into social monitoring, built for security teams</h2>
          <p className="mt-4 text-base text-gray-400">Replace manual searches with a dedicated intelligence layer. Automations surface the highest-risk conversations so your analysts can focus on response.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 transition-all hover:-translate-y-1 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-950/40 border border-green-900/40 text-green-500 mb-4 group-hover:border-green-700 transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid