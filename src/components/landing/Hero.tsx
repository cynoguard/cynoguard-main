import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={cn("relative w-full pt-24 pb-12 md:pt-36 md:pb-8 overflow-hidden")}>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Radial gradient fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.07),transparent)] pointer-events-none" />

      {/* Top-right glow orb */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      {/* Bottom-left glow orb */}
      <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-slate-300/20 blur-3xl pointer-events-none" />

      <div className={cn("relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center")}>

        {/* Badge */}
        <div className={cn(
          "animate-in fade-in slide-in-from-top-4 duration-700 fill-mode-both",
          "inline-flex items-center gap-2 px-1 py-1 pr-4 mb-8 border border-slate-200 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer group shadow-sm"
        )}>
          <span className={cn("bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider")}>New</span>
          <span className={cn("text-sm font-medium text-slate-600 flex items-center gap-1")}>
            Introducing v1 Automation
            <ArrowRight size={14} className={cn("group-hover:translate-x-0.5 transition-transform")} />
          </span>
        </div>

        {/* Heading */}
        <h1 className={cn(
          "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both",
          "text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6"
        )}>
          The Security Solutions{" "}
          <span className="text-gradient-blue">For Your Business</span>
        </h1>

        {/* Subtext */}
        <p className={cn(
          "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both",
          "text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed"
        )}>
          Empower your cyber team. The one stop platform for all secure management of small and medium-sized business
        </p>

        {/* CTAs */}
        <div className={cn(
          "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both",
          "flex flex-col sm:flex-row items-center gap-4"
        )}>
          <Button
            className={cn("bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl")}
            asChild
          >
            <Link href="/sign-up">Start for free</Link>
          </Button>
          <Button
            variant="ghost"
            className={cn("text-slate-600 hover:text-slate-900 px-8 py-5 text-base font-medium flex items-center gap-2")}
            asChild
          >
            <Link href="/docs">Read the docs <ArrowRight size={16} /></Link>
          </Button>
        </div>

        {/* Trust strip */}
        <div className={cn(
          "animate-in fade-in duration-1000 delay-700 fill-mode-both",
          "mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
        )}>
          {[
            { icon: Shield, label: "SOC 2 compliant" },
            { icon: Zap, label: "Sub-millisecond detection" },
            { icon: Globe, label: "99.9% uptime SLA" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 border border-slate-100 rounded-full px-4 py-2 bg-white/60 backdrop-blur-sm">
              <item.icon className="h-3.5 w-3.5 text-blue-500" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;