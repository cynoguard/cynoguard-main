import { Shield, Zap, BarChart3, Fingerprint, Globe, Settings } from "lucide-react"

const features = [
  { icon: Shield, title: "ML-Powered Detection", description: "Leverage advanced machine learning models trained on billions of requests to accurately distinguish bots from legitimate users in real time." },
  { icon: Zap, title: "Sub-Millisecond Latency", description: "Analyze every incoming request in under 1ms at the edge, ensuring zero performance impact for your real users while blocking threats instantly." },
  { icon: Fingerprint, title: "Device Fingerprinting", description: "Identify returning bots across sessions with sophisticated browser and device fingerprinting that goes beyond simple IP-based detection." },
  { icon: BarChart3, title: "Real-Time Analytics", description: "Monitor bot traffic patterns with a live dashboard. See blocked requests, threat categories, and geographic distribution at a glance." },
  { icon: Globe, title: "Global Edge Network", description: "Deploy bot detection rules across 300+ edge locations worldwide, stopping malicious traffic at the nearest point of entry." },
  { icon: Settings, title: "Custom Rules Engine", description: "Define granular rules for rate limiting, geo-blocking, and behavioral patterns. Fine-tune thresholds to match your specific use case." },
]

export function BotDetectionFeatureGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#020812] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Features</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">Everything you need to fight bots</h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">A complete toolkit to detect, analyze, and block automated threats across your entire infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10 transition-all group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-950/40 border border-green-900/40 mb-4 group-hover:border-green-700 transition-colors">
                <feature.icon className="h-5 w-5 text-green-500" />
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