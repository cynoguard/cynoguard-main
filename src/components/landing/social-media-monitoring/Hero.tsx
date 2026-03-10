import { Activity, ArrowRight, Bell, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SignupCTA } from "@/components/landing/SignupCTA"

const SocialMonitoringHero = () => {
  return (
    <section className={cn("relative overflow-hidden bg-white pt-24 pb-16 md:pt-32")}>
      <div className="absolute -top-48 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <div className={cn("relative z-10 max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className="space-y-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">Social</span>
            Always-on brand threat intelligence
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Social Media Monitoring that catches threats before they trend
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Watch every channel for impersonations, phishing chatter, and account takeovers.
              CynoGuard maps risk signals in real time, so your team responds with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-7 py-5 rounded-md text-base font-medium" asChild>
              <Link href="/sign-up">Start monitoring</Link>
            </Button>
            <Button variant="ghost" className="text-slate-700 hover:text-slate-900 px-7 py-5 text-base font-medium" asChild>
              <Link href="/docs">
                View documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Activity, label: "Real-time signal detection" },
              { icon: Bell, label: "Instant incident alerts" },
              { icon: Zap, label: "AI priority scoring" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                <item.icon className="h-4 w-4 text-blue-600" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMonitoringHero