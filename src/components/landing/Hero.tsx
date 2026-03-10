"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, Lock } from 'lucide-react';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const TERMINAL_LINES = [
  { text: "$ cynoguard scan --domain yourbrand.com", color: "text-green-400" },
  { text: "> Scanning 247 lookalike domains...", color: "text-gray-400" },
  { text: "> Bot traffic: 12.4% flagged & blocked", color: "text-gray-400" },
  { text: "> 3 threats neutralized in real-time", color: "text-red-400" },
  { text: "✓ Protection active. System secure.", color: "text-green-400" },
];

function TerminalPreview() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= TERMINAL_LINES.length) {
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#060d14] border border-green-900/40 rounded-xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden min-h-[140px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-scan" />
      </div>
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-green-500/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green-500/50" />

      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-gray-500 text-[10px] ml-1">cynoguard — terminal</span>
        <div className="ml-auto flex items-center gap-1 text-[10px] text-green-500">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          LIVE
        </div>
      </div>

      <div className="space-y-1.5">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <p key={i} className={cn("transition-all duration-300", line.color)}>
            {line.text}
          </p>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <span className="text-green-400 animate-blink">█</span>
        )}
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className={cn("relative w-full pt-24 pb-12 md:pt-36 md:pb-8 overflow-hidden bg-[#020812]")}>
      <div className="absolute inset-0 bg-grid-dark opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,197,94,0.08),transparent)] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-green-900/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-green-500/20 via-transparent to-transparent pointer-events-none opacity-40" />
      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none opacity-30" />

      <div className={cn("relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center")}>

        <div className={cn(
          "animate-in fade-in slide-in-from-top-4 duration-700 fill-mode-both",
          "inline-flex items-center gap-2 px-1 py-1 pr-4 mb-8 border border-green-900/60 rounded-full bg-green-950/40 backdrop-blur-sm hover:bg-green-950/60 transition-colors cursor-pointer group shadow-sm shadow-green-900/20"
        )}>
          <span className={cn("bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider")}>New</span>
          <span className={cn("text-sm font-medium text-green-300/80 flex items-center gap-1")}>
            Introducing v1 Automation
            <ArrowRight size={14} className={cn("group-hover:translate-x-0.5 transition-transform")} />
          </span>
        </div>

        <h1 className={cn(
          "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both",
          "text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6 leading-[1.05]"
        )}>
          The Security Solutions{" "}
          <span className="text-gradient-blue">For Your Business</span>
        </h1>

        <p className={cn(
          "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both",
          "text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
        )}>
          Empower your cyber team. The one stop platform for all secure management of small and medium-sized business.
        </p>

        <div className={cn(
          "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both",
          "flex flex-col sm:flex-row items-center gap-4 mb-12"
        )}>
          <Button
            className={cn("bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-md text-base font-medium transition-all hover:scale-[1.02] shadow-lg shadow-green-900/40 hover:shadow-green-800/50")}
            asChild
          >
            <Link href="/sign-up">Start for free</Link>
          </Button>
          <Button
            variant="ghost"
            className={cn("text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-8 py-5 text-base font-medium flex items-center gap-2 bg-transparent")}
            asChild
          >
            <Link href="/docs">Read the docs <ArrowRight size={16} /></Link>
          </Button>
        </div>

        <div className={cn(
          "animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 fill-mode-both",
          "w-full max-w-lg mb-12"
        )}>
          <TerminalPreview />
        </div>

        <div className={cn(
          "animate-in fade-in duration-1000 delay-700 fill-mode-both",
          "flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500"
        )}>
          {[
            { icon: Shield, label: "SOC 2 compliant" },
            { icon: Zap, label: "Sub-millisecond detection" },
            { icon: Globe, label: "99.9% uptime SLA" },
            { icon: Lock, label: "Zero-trust architecture" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 border border-gray-800 rounded-full px-4 py-2 bg-gray-900/60 backdrop-blur-sm hover:border-green-800 transition-colors">
              <item.icon className="h-3.5 w-3.5 text-green-500" />
              <span className="font-medium text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;