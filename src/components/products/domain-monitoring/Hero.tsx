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
        </div>
      </div>
    </section>
  );
};

export default Hero;
