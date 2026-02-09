import {
  Shield,
  Zap,
  BarChart3,
  Fingerprint,
  Globe,
  Settings,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "ML-Powered Detection",
    description:
      "Leverage advanced machine learning models trained on billions of requests to accurately distinguish bots from legitimate users in real time.",
  },
  {
    icon: Zap,
    title: "Sub-Millisecond Latency",
    description:
      "Analyze every incoming request in under 1ms at the edge, ensuring zero performance impact for your real users while blocking threats instantly.",
  },
  {
    icon: Fingerprint,
    title: "Device Fingerprinting",
    description:
      "Identify returning bots across sessions with sophisticated browser and device fingerprinting that goes beyond simple IP-based detection.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor bot traffic patterns with a live dashboard. See blocked requests, threat categories, and geographic distribution at a glance.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Deploy bot detection rules across 300+ edge locations worldwide, stopping malicious traffic at the nearest point of entry.",
  },
  {
    icon: Settings,
    title: "Custom Rules Engine",
    description:
      "Define granular rules for rate limiting, geo-blocking, and behavioral patterns. Fine-tune thresholds to match your specific use case.",
  },
]

export function BotDetectionFeatureGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            Everything you need to fight bots
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed">
            A complete toolkit to detect, analyze, and block automated threats
            across your entire infrastructure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-slate-200 bg-white shadow-none hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 mb-3">
                  <feature.icon className="h-5 w-5 text-slate-700" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
