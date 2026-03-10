import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BotDetectionHero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-36 md:pb-8 overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Badge */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700 fill-mode-both">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white/80 px-4 py-1.5 shadow-sm">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">New</span>
            <span className="text-sm text-slate-600">Advanced Bot Detection is now available</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
            Stop bots before they reach{" "}
            <span className="text-gradient-blue">your users</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto text-pretty animate-in fade-in duration-700 delay-300 fill-mode-both">
            Real-time bot detection that identifies and blocks automated threats with machine-learning precision, keeping your platform safe without compromising user experience.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both">
          <Button className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium hover:scale-[1.02] transition-all shadow-lg" asChild>
            <Link href="/sign-up">
              Start protecting now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-8 py-5 rounded-md text-base font-medium bg-transparent" asChild>
            <Link href="/docs">View documentation</Link>
          </Button>
        </div>

        {/* Dashboard screenshot */}
        <div className="mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <div className="relative rounded-2xl p-px bg-gradient-to-b from-slate-200 to-transparent glow-blue">
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 text-center">
                    app.cynoguard.io/bots
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Scanning
                </div>
              </div>
              <Image
                src="/images/bot-detection-dashboard.png"
                alt="CynoGuard Bot Detection Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}