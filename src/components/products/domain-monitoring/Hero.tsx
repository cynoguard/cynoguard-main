import { ArrowRight, Radar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={cn("relative w-full pt-24 pb-12 md:pt-36 md:pb-8 overflow-hidden")}>

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white pointer-events-none" />

      {/* Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute top-28 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-slate-100/60 blur-3xl animate-pulse-slow delay-500" />

      <div className={cn("relative z-10 max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("flex flex-col items-center text-center")}>

          {/* Badge */}
          <div className="animate-in fade-in slide-in-from-top-4 duration-700 fill-mode-both">
            <div className={cn(
              "inline-flex items-center gap-2 px-1 py-1 pr-4 mb-8 border border-slate-200 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors cursor-pointer group shadow-sm"
            )}>
              <span className={cn("bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider")}>
                Domain Monitoring
              </span>
              <span className={cn("text-sm font-medium text-slate-600 flex items-center gap-1")}>
                Real-time visibility for brand protection
                <ArrowRight size={14} className={cn("group-hover:translate-x-0.5 transition-transform")} />
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className={cn(
            "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both",
            "text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6"
          )}>
            Stop lookalike domains
            <br />
            <span className="text-gradient-blue">before they harm customers</span>
          </h1>

          <p className={cn(
            "animate-in fade-in duration-700 delay-300 fill-mode-both",
            "text-lg md:text-xl text-slate-500 max-w-3xl mb-10 leading-relaxed"
          )}>
            Detect typosquatting, rogue SSL certificates, and brand spoofing across new and existing
            registrations. Get actionable alerts with clear remediation steps.
          </p>

          {/* CTAs */}
          <div className={cn(
            "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both",
            "flex flex-col sm:flex-row items-center gap-4"
          )}>
            <Button className={cn("bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium hover:scale-[1.02] transition-all shadow-lg")} asChild>
              <Link href="/sign-up">Start monitoring</Link>
            </Button>
            <Button variant="ghost" className={cn("text-slate-600 hover:text-slate-900 px-8 py-5 text-base font-medium flex items-center gap-2")} asChild>
              <Link href="/contact">
                Talk to sales
                <Radar className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Dashboard mock */}
        <div className={cn(
          "animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both",
          "mt-14 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 md:p-6 shadow-lg glow-blue-sm"
        )}>
          <div className={cn("flex items-center gap-2 mb-4 text-sm text-slate-600")}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Live domain risk map and alert queue
          </div>

          <div className={cn("grid gap-4 md:grid-cols-[1.2fr_1fr]")}>
            <div className={cn("relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4")}>
              <div className={cn("absolute -top-10 -left-10 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl")} />
              <div className={cn("absolute -bottom-12 right-6 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl")} />
              <div className={cn("flex items-center justify-between text-xs text-slate-500")}>
                <span>Risk map</span>
                <span className={cn("rounded-full bg-white px-2 py-0.5 text-[10px] text-slate-600 border border-slate-200")}>last 15m</span>
              </div>
              <div className={cn("mt-4 grid grid-cols-3 gap-2 text-[10px] text-slate-600")}>
                {[
                  { label: "US-West", level: "High", color: "bg-red-100 text-red-700 border-red-200" },
                  { label: "EU-Central", level: "Medium", color: "bg-amber-100 text-amber-700 border-amber-200" },
                  { label: "APAC", level: "Low", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  { label: "LATAM", level: "Medium", color: "bg-amber-100 text-amber-700 border-amber-200" },
                  { label: "ME-SEA", level: "Low", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  { label: "Global", level: "High", color: "bg-red-100 text-red-700 border-red-200" },
                ].map((item) => (
                  <div key={item.label} className={cn("rounded-lg border bg-white px-2 py-2 text-center shadow-sm hover:scale-[1.02] transition-transform", item.color)}>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-[9px] uppercase tracking-wide">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("rounded-xl border border-slate-200 bg-white p-4")}>
              <div className={cn("flex items-center justify-between text-xs text-slate-500")}>
                <span>Alert queue</span>
                <span className={cn("text-[10px] text-blue-600 font-medium flex items-center gap-1")}>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  6 active
                </span>
              </div>
              <div className={cn("mt-3 space-y-2")}>
                {[
                  { title: "cyn0guard.com", tag: "Impersonation", tone: "bg-red-100 text-red-700 border-red-200" },
                  { title: "mx.cyno-mail.net", tag: "MX change", tone: "bg-amber-100 text-amber-700 border-amber-200" },
                  { title: "ssl mismatch", tag: "Certificate", tone: "bg-amber-100 text-amber-700 border-amber-200" },
                  { title: "login-cynoguard.io", tag: "Typosquat", tone: "bg-red-100 text-red-700 border-red-200" },
                ].map((alert) => (
                  <div key={alert.title} className={cn("flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-white transition-colors")}>
                    <span className={cn("text-xs font-medium text-slate-800")}>{alert.title}</span>
                    <span className={cn("text-[10px] px-2 py-0.5 rounded-full border", alert.tone)}>{alert.tag}</span>
                  </div>
                ))}
              </div>
              <div className={cn("mt-3 text-[11px] text-slate-500")}>
                Auto-triage applied to 4/6 alerts • Avg time-to-review: 6m
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;