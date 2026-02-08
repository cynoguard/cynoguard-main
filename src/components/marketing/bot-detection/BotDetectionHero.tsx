import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BotDetectionHero() {
  return (
    <section className="pt-24 pb-12 md:pt-36 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              New
            </span>
            <span className="text-sm text-slate-600">
              Advanced Bot Detection is now available
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 text-balance">
            Stop bots before they reach your users
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto text-pretty">
            Real-time bot detection that identifies and blocks automated threats
            with machine-learning precision, keeping your platform safe without
            compromising user experience.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button
            className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium"
          >
            Start protecting now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-8 py-5 rounded-md text-base font-medium bg-transparent"
          >
            View documentation
          </Button>
        </div>

        {/* Product Screenshot */}
        <div className="mt-16 md:mt-20">
          <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-lg">
            <Image
              src="/images/bot-detection-dashboard.png"
              alt="CynoGuard Bot Detection Dashboard showing real-time traffic analysis, blocked bot metrics, and detection event logs"
              width={1200}
              height={675}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
