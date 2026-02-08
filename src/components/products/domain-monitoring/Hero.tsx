import { ArrowRight, Radar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className={cn("relative w-full pt-24 pb-12 md:pt-36 md:pb-8 bg-gradient-to-b from-slate-50 via-white to-white")}>
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-slate-100/60 blur-3xl" />
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("flex flex-col items-center text-center")}>
          <div
            className={cn(
              "inline-flex items-center gap-2 px-1 py-1 pr-4 mb-8 border border-slate-200 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors cursor-pointer group shadow-sm"
            )}
          >
            <span
              className={cn(
                "bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              )}
            >
              Domain Monitoring
            </span>
            <span className={cn("text-sm font-medium text-slate-600 flex items-center gap-1")}>
              Real-time visibility for brand protection
              <ArrowRight size={14} className={cn("group-hover:translate-x-0.5 transition-transform")} />
            </span>
          </div>

          <h1 className={cn("text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6")}>
            Stop lookalike domains
            <br /> before they harm customers
          </h1>

          <p className={cn("text-lg md:text-xl text-slate-500 max-w-3xl mb-10 leading-relaxed")}>
            Detect typosquatting, rogue SSL certificates, and brand spoofing across new and existing
            registrations. Get actionable alerts with clear remediation steps.
          </p>

          <div className={cn("flex flex-col sm:flex-row items-center gap-4")}>
            <Button className={cn("bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium transition-all")}>
              Start monitoring
            </Button>
            <Button
              variant="ghost"
              className={cn("text-slate-600 hover:text-slate-900 px-8 py-5 text-base font-medium flex items-center gap-2")}
            >
              Talk to sales
              <Radar className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className={cn("mt-14 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 md:p-6 shadow-sm")}>
          <div className={cn("flex items-center gap-2 mb-4 text-sm text-slate-600")}>
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Live domain risk map and alert queue
          </div>

          <div className={cn("grid gap-4 md:grid-cols-[1.2fr_1fr]")}>
            <div className={cn("relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4")}>
              <div className={cn("absolute -top-10 -left-10 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl")} />
              <div className={cn("absolute -bottom-12 right-6 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl")} />
              <div className={cn("flex items-center justify-between text-xs text-slate-500")}>
                <span>Risk map</span>
                <span className={cn("rounded-full bg-white px-2 py-0.5 text-[10px] text-slate-600 border border-slate-200")}>
                  last 15m
                </span>
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
                  <div
                    key={item.label}
                    className={cn(
                      "rounded-lg border bg-white px-2 py-2 text-center shadow-sm",
                      item.color
                    )}
                  >
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-[9px] uppercase tracking-wide">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("rounded-xl border border-slate-200 bg-white p-4")}>
              <div className={cn("flex items-center justify-between text-xs text-slate-500")}>
                <span>Alert queue</span>
                <span className={cn("text-[10px] text-blue-600 font-medium")}>6 active</span>
              </div>
              <div className={cn("mt-3 space-y-2")}>
                {[
                  { title: "cyn0guard.com", tag: "Impersonation", tone: "bg-red-100 text-red-700 border-red-200" },
                  { title: "mx.cyno-mail.net", tag: "MX change", tone: "bg-amber-100 text-amber-700 border-amber-200" },
                  { title: "ssl mismatch", tag: "Certificate", tone: "bg-amber-100 text-amber-700 border-amber-200" },
                  { title: "login-cynoguard.io", tag: "Typosquat", tone: "bg-red-100 text-red-700 border-red-200" },
                ].map((alert) => (
                  <div
                    key={alert.title}
                    className={cn("flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2")}
                  >
                    <span className={cn("text-xs font-medium text-slate-800")}>{alert.title}</span>
                    <span className={cn("text-[10px] px-2 py-0.5 rounded-full border", alert.tone)}>
                      {alert.tag}
                    </span>
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
